const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  comment: {
    type : String,
    required : true
  },
  imageUrl: {
    type : String
  },
  userId: {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User'
  }
},
{
    timestamps:true
})

const Comments = mongoose.model('Comment',commentSchema)

module.exports = Comments