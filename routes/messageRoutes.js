const express = require("express");
const router = express.Router();
const {
	createMessage,
	getChannelMessages,
} = require("../controllers/messagesController");

// Create a new message in a channel
//TODO: POST /channels/:id/messages - to create new messages
//GET /channels/:id/messages - to read messages in a channel
//middleware ?? token?
//router.post('/channels/:id/messages', authenticateToken, createMessage);

router.post("/:id", createMessage);

// Get all messages in a channel
router.get("/:id", getChannelMessages);

module.exports = router;
