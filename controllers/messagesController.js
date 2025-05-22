const db = require("../db/db");

// Create a new message
/*TODO: ta in CONTENT från BODY 
        ta in CHANNEL ID från PARAMS
        ta in USER ID från REQ.USER 
        kolla om channel existerar 
        skapa message 
        return message 
*/

const createMessage = async (req, res) => {
	const { content, user_id } = req.body;
	const channelId = parseInt(req.params.id);

	try {
		// Check if channel exists
		const channelCheck = await db.query(
			"SELECT channel_id FROM channels WHERE channel_id = $1",
			[channelId]
		);
		if (channelCheck.rows.length === 0) {
			return res.status(404).json({ error: "Channel not found" });
		}

		//Check if user is subscribed to chosen channel
		const subscriptionCheck = await db.query(
			"SELECT * FROM subscriptions WHERE user_id = $1 AND channel_id = $2",
			[user_id, channelId]
		);

		if (subscriptionCheck.rows.length === 0) {
			return res
				.status(403)
				.json({ error: "User is not subscribed to this channel!" });
		}

		const result = await db.query(
			"INSERT INTO messages (content, user_id, channel_id) VALUES ($1, $2, $3) RETURNING *",
			[content, user_id, channelId]
		);

		res.status(201).json(result.rows[0]);
	} catch (error) {
		console.error("Error creating message:", error);
		res.status(500).json({ error: "Internal server error" });
	}
};

// Get messages in a channel
/*TODO: ta in CHANNEL ID från PARAMS
        kolla om channel existerar 
        hämta alla messages i channelen 
        return messages 
*/

const getChannelMessages = async (req, res) => {
  const userId = req.query.user_id;
  const channelId = req.params.id;

  if (isNaN(channelId)) {
    return res.status(400).json({ error: "Invalid channel ID" });
  }

  try {
    const subCheck = await db.query(
      `SELECT * FROM subscriptions 
       WHERE user_id = $1 AND channel_id = $2`,
      [userId, channelId]
    );

    if (subCheck.rows.length === 0) {
      return res
        .status(403)
        .json({ error: "You are not subscribed to this channel" });
    }

    const channelCheck = await db.query(
      "SELECT channel_id FROM channels WHERE channel_id = $1",
      [channelId]
    );
    if (channelCheck.rows.length === 0) {
      return res.status(404).json({ error: "Channel not found" });
    }

    const result = await db.query(
      `SELECT 
  m.id AS message_id,
  m.content,
  m.user_id,
  u.username,
  m.channel_id,
  c.name AS channel_name,
  m.created_at
      FROM messages m
      JOIN users u ON m.user_id = u.user_id
      JOIN channels c ON m.channel_id = c.channel_id
      WHERE m.channel_id = $1
      ORDER BY m.created_at ASC;
`,
      [channelId]
    );

    res.json(result.rows);
  } catch (err) {
    console.error("Failed to fetch channel messages:", err);
    res.status(500).json({ message: "Could not fetch messages" });
  }
};

module.exports = {
  createMessage,
  getChannelMessages,
};
