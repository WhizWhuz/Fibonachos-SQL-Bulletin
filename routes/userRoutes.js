const express = require("express");
const router = express.Router();
const { createUser, listUsers } = require("../controllers/userController");

router.route("/").get(listUsers).post(createUser);

module.exports = router;
