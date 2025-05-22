const express = require("express");
const channelsController = require("../controllers/channelsController");
const messagesController = require("../controllers/messagesController");
const router = express.Router();

router.route("/").post(channelsController.createChannel);

router.route("/:id/messages").get(messagesController.getChannelMessages);

module.exports = router;




