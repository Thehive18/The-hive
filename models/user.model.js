import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true,"Name is required"]
    },
    email: {
            type: String,
            required: [true, "Email is required"],
            unique:true,
            lowercase:true,
            trim:true
    },
    password: {
        type:String,
        required:[true,"Password is required"],
        minlength:[6, "Password must be at least 6 characters"],
    },

    role:{
        type:String,
        enum: ["member", "admin"],
        default: "member"
    },
},{
    // created at and updated at timestamps
    timestamps:true
})



// pre save hook to hash password before saving into db 

userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt); // randomise user paswword
        next();
    } catch (error) {
        next(error)
    }
})

userSchema.methods.comparePasswords = async function(password) {
    return await bcrypt.compare(password, this.password);
    }
const User = mongoose.model("User", userSchema)


export default User;

