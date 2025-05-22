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

// Get all messages in a channel (inside ('../routes/channelRoutes') now) \\
// router.get("/channels/:id/messages", getChannelMessages);

module.exports = router;
