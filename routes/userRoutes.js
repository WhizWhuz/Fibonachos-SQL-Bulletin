const express = require("express");
const router = express.Router();
const {
	createUser,
	deleteUser,
	listUsers,
	getUserOwnedChannels,
	getUserSubscriptions,
} = require("../controllers/userController");

router.route("/").get(listUsers).post(createUser);
router.route("/:id").delete(deleteUser);
router.route("/:id/channels").get(getUserOwnedChannels);
router.route("/:id/subscriptions").get(getUserSubscriptions);

module.exports = router;
