
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControllers");
const checkToken = require("../utils/helpers");

router
.route("/login")
.post(userController.loginUser)
.get(checkToken, userController.getUserProfile)
;

router
.route("/buy")
.post(checkToken, userController.buyPass)
.get(checkToken, userController.getPassInfo)
;


module.exports = router;
