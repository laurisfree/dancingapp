const Booking = require("../models/booking.model")
const UserBookings = require("../models/userBooking.model")
const mongoose = require("mongoose");
const Users = require("../models/user.model");
const Comments = require("../models/comment.model");


exports.getUserComments = (req, res) => {

  Comments.find({ userId: mongoose.Types.ObjectId(req.user.id)}).then(response => {
    res.status(200).json(response) 
  }).catch(error => console.log(error))
};

exports.createUserComments = async (req, res) => {
  try {
    const userComment = new Comments({
      userId: mongoose.Types.ObjectId(req.user.id),
      comment: req.body.comment,
      imageUrl: req.body.imageUrl
    })
    await userComment.save()
    res.sendStatus(201)
  } catch (error) {
    console.log('error in creating user comments');
    res.sendStatus(500);
  }
};

exports.updateUserComments = (req, res) => {
  Comments.updateOne({ _id: mongoose.Types.ObjectId(req.query.id) }, { $set: { ...req.body } })
  .then(response => {
    res.sendStatus(200)
  }).catch(error => console.log(error))
};

exports.deleteUserComments = (req, res) => {
    
  Comments.deleteOne({ _id: mongoose.Types.ObjectId(req.query.id)}).then(response => {
    res.sendStatus(200)
  }).catch(error => console.log(error))
};