const express = require("express");
const router = express.Router();
const {
	createSubscription,
	deleteSubscription,
} = require("../controllers/subscriptionsController");

router.route("/").post(createSubscription);
router.route("/:userId/:channelId").delete(deleteSubscription);

module.exports = router;
