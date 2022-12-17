
const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentControllers");
const checkToken = require("../utils/helpers");

router
  .route("/")
  .get(checkToken, commentController.getUserComments)
  .post(checkToken, commentController.createUserComments)
  .put(checkToken, commentController.updateUserComments)
  .delete(checkToken, commentController.deleteUserComments)


module.exports = router;
