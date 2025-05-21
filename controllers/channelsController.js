const pool = require("../db/db");

exports.createChannel = async (req, res) => {
	const { name, description, owner_id } = req.body;

	try {
		const result = await pool.query(
			`INSERT INTO channels (name, description, owner_id)
    VALUES ($1, $2, $3)
    RETURNING *`,
			[name, description, owner_id]
		);

		res.status(201).json(result.rows[0]);
	} catch (err) {
		console.error("Failed to create channel", err);
		res.status(500).json({ error: "Could not create channel!" });
	}
};
