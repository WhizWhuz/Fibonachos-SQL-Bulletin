const express = require("express");
const router = express.Router();
const {
	createUser,
	deleteUser,
	listUsers,
	getUserChannels,
} = require("../controllers/userController");

router.route("/").get(listUsers).post(createUser);
router.route("/:id").delete(deleteUser);
router.route("/:id/channels").get(getUserChannels);

module.exports = router;
