const pool = require("../db/db");

exports.createUser = async (req, res) => {
	const { username, email } = req.body;

	try {
		const result = await pool.query(
			"INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *",
			[username, email]
		);
		res.status(201).json(result.rows[0]);
	} catch (error) {
		console.error("Failed to create a user: ", error);
		res.status(500).json({ error: "Error creating new user!" });
	}
};

exports.deleteUser = async (req, res) => {
	const userId = req.params.id;

	try {
		const result = await pool.query(
			"DELETE FROM users WHERE user_id = $1 RETURNING *",
			[userId]
		);

		if (result.rows.length === 0) {
			return res.status(404).json({ message: "User not found!" });
		}
		res
			.status(200)
			.json({ message: `User ${result.rows[0].username} deleted!` });
	} catch (error) {
		console.error("Failed deleting user: ", error);
		res.status(500).json({ error: "Error deleting user!" });
	}
};

exports.listUsers = async (req, res) => {
	try {
		const result = await pool.query("SELECT * FROM users");

		if (result.rows.length === 0) {
			return res.status(404).json({ message: "There are no users!" });
		}

		res.status(200).json(result.rows);
	} catch (error) {
		console.error("Failed to get a list of users: ", error);
		res.status(500).json({ error: "Error getting user list!" });
	}
};

exports.getUserOwnedChannels = async (req, res) => {
	const userId = req.params.id;

	try {
		const result = await pool.query(
			"SELECT * FROM channels WHERE owner_id = $1",
			[userId]
		);

		if (result.rows.length === 0) {
			return res.status(404).json({ message: "This user owns no channels!" });
		}

		res.json(result.rows);
	} catch (error) {
		console.error("Failed to fetch channels:", error);
		res.status(500).json({ error: "Error when fetching channels" });
	}
};

exports.getUserSubscriptions = async (req, res) => {
	const userId = req.params.id;

	try {
		const result = await pool.query(
			`SELECT channels.* FROM channels JOIN subscriptions ON channels.channel_id = subscriptions.channel_id WHERE subscriptions.user_id = $1`,
			[userId]
		);

		if (result.rows.length === 0) {
			return res
				.status(404)
				.json({ message: "User is not subscribed to any channels!" });
		}

		res.json(result.rows);
	} catch (error) {
		console.error("Failed to fetch subscriptions:", error);
		res.status(500).json({ error: "Error when fetching user subscriptions!" });
	}
};
