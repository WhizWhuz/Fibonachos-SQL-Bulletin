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






//! Can be found in ('../controllers/messagesController.js')
// exports.getMessagesByChannel = async (req, res) => {
//   const channelId = req.params.id;

//   try {
//     const result = await pool.query(
//       `SELECT m.id AS message.id, channel_id,
//       m.content, m.user_id, u.username, m.created_at
// 		FROM messages AS m
// 		JOIN users AS u
// 		ON m.user_id = u.user_id
// 		WHERE m.channel_id = $1
// 		ORDER BY m.created_at ASC`,
//       [channelId]
//     );
//     res.json(result.rows);
//   } catch (err) {
//     console.error("Failed to fetch channel messages:", err);
//     res.status(500).json({ message: "Could not fetch messages" });
//   }
// };
