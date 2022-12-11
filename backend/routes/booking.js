
const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingControllers");

router
  .route("/")
  .get(bookingController.getAllSchedules)
  .post(bookingController.createUserBooking);

module.exports = router;
