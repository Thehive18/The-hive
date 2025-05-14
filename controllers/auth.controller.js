import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

// import RefreshToken from "../models/RefreshTxoken.js"; // adjust the path





const generateTokens = (userId) => {
  const accessToken = jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });

  const refreshToken = jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });

  return {
    accessToken,
    refreshToken,
  };
};
const storeRefreshToken = async (userId, refreshToken) => {
  try {
    const token = new RefreshToken({
      userId,
      refreshToken,
    });

    await token.save();
    console.log("Refresh token stored successfully:", token);
  } catch (error) {
    console.error("Error storing refresh token:", error.message);
  }
};

const setCookies = (res, accessToken, refreshToken) => {
  res.cookie("accessToken", accessToken, {
    httpOnly: true, // Prevent client-side access
    sameSite: "none", // Allows cross-site cookies (needed if frontend is on a different domain)
    secure: process.env.NODE_ENV === "production", // Only HTTPS in production
    maxAge: 15 * 60 * 1000, // 15 minutes in milliseconds
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    sameSite: "none",
    secure: process.env.NODE_ENV === "production",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
};


export const signup = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, name });

    const { accessToken, refreshToken } = generateTokens(user._id);
    await storeRefreshToken(user._id, refreshToken);
    setCookies(res, accessToken, refreshToken);

    res.status(201).json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      message: "User created successfully"
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.comparePasswords(password))) {
      const { accessToken, refreshToken } = generateTokens(user._id);
      await storeRefreshToken(user._id, refreshToken);
      setCookies(res, accessToken, refreshToken);

      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      });
    } else {
      res.status(400).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error in login controller", error.message);
    res.status(500).json({ message: error.message });
  }
};
export const delUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error in delUser controller", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (refreshToken) {
      const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
      const { error } = await supabase
        .from('refresh_tokens')
        .delete()
        .eq('user_id', decoded.userId);

      if (error) {
        console.error("Error deleting refresh token:", error.message);
      }
    }

    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    res.json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Error in logout controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({ message: "No refresh token provided" });
    }

    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const { data, error } = await supabase
      .from('refresh_tokens')
      .select('refresh_token')
      .eq('user_id', decoded.userId)
      .single();

    if (error || !data || data.refresh_token !== refreshToken) {
      return res.status(401).json({ message: "Invalid refresh token" });
    }

    const accessToken = jwt.sign({ userId: decoded.userId }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 15 * 60 * 1000,
    });

    res.json({ message: "Token refreshed successfully" });
  } catch (error) {
    console.error("Error in refreshToken controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// export const getProfile = async (req, res) => {
//   try {
//     res.json(req.user);
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };
