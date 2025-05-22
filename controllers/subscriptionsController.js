const pool = require("../db/db");

exports.createSubscription = async (req, res) => {
	const { user_id, channel_id } = req.body;

	try {
		const result = await pool.query(
			`INSERT INTO subscriptions (user_id, channel_id)
    VALUES ($1, $2)
    RETURNING *`,
			[user_id, channel_id]
		);

		res
			.status(201)
			.json({
				message: "Subscription successful!",
				subscription: result.rows[0],
			});
	} catch (error) {
		console.error("Failed to subscribe: ", error);
		res.status(500).json({ error: "Could not subscribe to channel!" });
	}
};

exports.deleteSubscription = async (req, res) => {
	const { userId, channelId } = req.params;

	try {
		const result = await pool.query(
			"DELETE FROM subscriptions WHERE user_id = $1 AND channel_id = $2 RETURNING *",
			[userId, channelId]
		);

		res.status(200).json({
			message: `Successfully unsubscribed from channel ${channelId}!`,
			unsubscribed: result.rows[0],
		});
	} catch (error) {
		console.error("Failed to unsubscribe: ", error);
		res.status(500).json({ error: "Could not unsubscribe from the channel!" });
	}
};
