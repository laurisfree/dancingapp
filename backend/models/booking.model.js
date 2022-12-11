const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  date: {
    type : Date,
    required : true
  },
  time: {
    type : Date,
    required : true
  },
  classType: {
    type : String,
    required : true
  },
  teacher: {
    type : String,
    required : true
  },
  userId: {
    type: String
  }
},
{
    timestamps:true
})

const Bookings = mongoose.model('Booking',bookingSchema)

module.exports = Bookings