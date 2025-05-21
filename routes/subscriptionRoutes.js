const express = require("express");
const router = express.Router();
const {
	createSubscription,
} = require("../controllers/subscriptionsController");

router.route("/").post(createSubscription);

module.exports = router;
