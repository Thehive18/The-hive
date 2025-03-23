import Donation from "../models/donation.model.js";
import { stripe } from "../lib/stripe.js";

export const createCheckoutSession = async (req, res) => {
	try {
		const { donation } = req.body;

		if (!donation || !donation.currency || !donation.totalAmount) {
			return res.status(400).json({ error: "Invalid donation data" });
		}

		const amount = Math.round(donation.totalAmount * 100); // Stripe wants the amount in cents

		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			line_items: [{
				price_data: {
					currency: donation.currency,
					product_data: {
						name: `Donation of ${donation.totalAmount} ${donation.currency}`,
					},
					unit_amount: amount,
				},
				quantity: 1,
			}],
			mode: "payment",
			success_url: `${process.env.CLIENT_URL}/purchase-success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${process.env.CLIENT_URL}/purchase-cancel`,
			metadata: {
				userId: req.user._id.toString(),
				totalAmount: donation.totalAmount,
				currency: donation.currency,
			},
		});

		// Save donation details to the database
		const newDonation = new Donation({
			user: req.user._id,
			currency: donation.currency,
			totalAmount: donation.totalAmount,
			stripeSessionId: session.id,
		});
		await newDonation.save();

		res.status(200).json({ id: session.id, totalAmount: donation.totalAmount });
	} catch (error) {
		console.error("Error processing checkout:", error);
		res.status(500).json({ message: "Error processing checkout", error: error.message });
	}
};

export const checkoutSuccess = async (req, res) => {
	try {
		const { sessionId } = req.body;
		const session = await stripe.checkout.sessions.retrieve(sessionId);

		if (session.payment_status === "paid") {
			return res.status(200).json({ message: "Checkout successful" });
		}
	} catch (error) {
		console.error("Error processing successful checkout:", error);
		res.status(500).json({ message: "Error processing successful checkout", error: error.message });
	}
};
