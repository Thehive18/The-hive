import mongoose from "mongoose";


const Subscribe = new mongoose.Schema(
    {
    email: {
        type: String,
        required: [true, "Email is required"],
        unique:true,
        lowercase:true,
        trim:true
    },
       
    },
    { timestamps: true }
);

const UserSubscribe = mongoose.model ("UserSubscribe", Subscribe)

export default UserSubscribe;