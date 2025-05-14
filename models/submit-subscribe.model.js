import mongoose from "mongoose";


const submitSubscribe = new mongoose.Schema(
    {
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
        message: {
            type: String,
            required:[true,"Message is required"]
        },
	},
	{ timestamps: true }
);

const UserDetails = mongoose.model ("UserDetails", submitSubscribe)

export default UserDetails;