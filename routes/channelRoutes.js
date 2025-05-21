const express = require("express");
const channelsController = require("../controllers/channelsController");
const router = express.Router();

router.route("/").post(channelsController.createChannel);

module.exports = router;
