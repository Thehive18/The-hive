import mongoose from "mongoose";


const donationSchema = new mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required:true,
        },
        currency:{
            type: String,
            required:true,
        },
        totalAmount: {
			type: Number,
			required: true,
			min: 0,
		},
		stripeSessionId: {
			type: String,
			unique: true,
		},
	},
	{ timestamps: true }
);

const Donation = mongoose.model("Donation", donationSchema);

export default Donation;