
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControllers");
const checkToken = require("../utils/helpers");

router
.route("/login")
.post(userController.loginUser)
.get(checkToken, userController.getUserProfile)
;

module.exports = router;
