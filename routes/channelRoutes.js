const express = require("express");
const channelsController = require("../controllers/channelsController");
const router = express.Router();

router.route("/").post(channelsController.createChannel);

router.route("/user/:id").get(channelsController.getUserChannels);

module.exports = router;
