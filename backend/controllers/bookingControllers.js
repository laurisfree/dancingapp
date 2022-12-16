const Booking = require("../models/booking.model")
const UserBookings = require("../models/userBooking.model")
const mongoose = require("mongoose");
const Users = require("../models/user.model");

exports.getAllSchedules = (req, res) => {
    
  Booking.find().sort({ date: 1 }).then(response => {
    res.status(200).json(response) 
  }).catch(error => console.log(error))
};


exports.getUserBookings = (req, res) => {
  UserBookings.find({ userId: mongoose.Types.ObjectId(req.user.id)}).populate({path: 'bookingId', options: { sort : [{'createdAt': 'asc' }]}}).then(response => {
    if (response && response.length) {
      response = response.map(element => element.bookingId)
    }
    res.status(200).json(response) 
  }).catch(error => console.log(error))
};



exports.createUserBooking = async (req, res) => {
  try {

    const {passesBought, passesUsed} = await Users.findOne({ _id: mongoose.Types.ObjectId(req.user.id)});
    if(passesBought - passesUsed < 1) throw new Error('error')
    await Users.updateOne({ _id: mongoose.Types.ObjectId(req.user.id) }, { $inc: { passesUsed: 1 } })

    const myBooking = new UserBookings({
      userId: mongoose.Types.ObjectId(req.user.id),
      bookingId: mongoose.Types.ObjectId(req.body.bookingId)
    })
    await myBooking.save()
    res.sendStatus(200)
  } catch (error) {
    res.sendStatus(500)
  } 
};

exports.deleteUserBooking = async (req, res) => {
  try {
    const deleted = await UserBookings.deleteOne({ userId: mongoose.Types.ObjectId(req.user.id), bookingId: mongoose.Types.ObjectId(req.query.id)});
    res.sendStatus(200)
  } catch (error) {
    res.sendStatus(500)
  } 
};