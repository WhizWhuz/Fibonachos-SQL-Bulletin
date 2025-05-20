const pool = require("../db");

exports.createUser = async (req, res) => {
	const { username, email } = req.body;

	try {
		const result = await pool.query(
			"INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *",
			[username, email]
		);
		res.status(201).json(result.rows[0]);
	} catch (error) {
		console.error(error);
		res.status(500).send("Error creating new user!");
	}
};

exports.listUsers = async (req, res) => {
	try {
		const result = await pool.query("SELECT * FROM users");
		res.status(200).json(result.rows);
	} catch (error) {
		console.errror(error);
		res.status(500).send("Error getting user list!");
	}
};
