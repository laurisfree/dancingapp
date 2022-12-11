
const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingControllers");
const checkToken = require("../utils/helpers");

router
  .route("/")
  .get(bookingController.getAllSchedules)
  .post(checkToken, bookingController.createUserBooking);

router
  .route("/userbookings")
  .get(checkToken, bookingController.getUserBookings)

module.exports = router;
