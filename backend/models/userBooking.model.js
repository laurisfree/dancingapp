const mongoose = require("mongoose")

const userBookings = new mongoose.Schema({
    userId: {
      type : mongoose.Schema.Types.ObjectId,
      ref : 'User'
    },
    bookingId: {
      type : mongoose.Schema.Types.ObjectId,
      ref: 'Booking'
    }
  },
  {
      timestamps:true
  })
  
  const UserBookings = mongoose.model('UserBooking',userBookings)
  
  module.exports = UserBookings