
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControllers");

router
  .route("/signup")
  .post(userController.signUpUser);


router
.route("/login")
.post(userController.loginUser);

module.exports = router;
