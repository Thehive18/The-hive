import UserDetails from "../models/submit-subscribe.model.js";
import UserSubscribe from "../models/subscribe.model.js";

 export const saveForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newSubmission = await UserDetails.create({ name, email, message });

    res.status(201).json({
      message: "Form submitted successfully!",
      data: newSubmission,
    });
  } catch (error) {
    if (error.code === 11000) {

      return res.status(400).json({ error: "Email already exists." });
    }

    res.status(500).json({
      error: error.message || "Something went wrong.",
    });
  }
};

export const subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    const newSubmission = await UserSubscribe.create({ email });

    res.status(201).json({
      message: "subscribed successfully!",
      data: newSubmission,
    });
  } catch (error) {
    if (error.code === 11000) {

      return res.status(400).json({ error: "Email already exists." });
    }

    res.status(500).json({
      error: error.message || "Something went wrong.",
    });
  }
};
