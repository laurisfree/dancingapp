const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type : String,
    required : true
  },
  email: {
    type : String,
    required : true
  },
  password: {
    type : String,
    required : true
  },
  passesBought: {
    type: Number,
    default: 0
  },
  passesUsed: {
    type: Number,
    default: 0
  }
},
{
    timestamps:true
})

const Users = mongoose.model('User',userSchema)

module.exports = Users