const express = require('express');
const router = express.Router();
const { createMessage, getChannelMessages } = require('../controllers/messagesController');

// Create a new message in a channel
//TODO: POST /channels/:id/messages - to create new messages
//GET /channels/:id/messages - to read messages in a channel
//middleware ?? token? 
//router.post('/channels/:id/messages', authenticateToken, createMessage);


router.post('/channels/:id/messages', createMessage);

// Get all messages in a channel
router.get('/channels/:id/messages', getChannelMessages);

module.exports = router; 