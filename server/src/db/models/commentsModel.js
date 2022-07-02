const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const commentSchema = new Schema({
  postId: {
    type:Schema.Types.ObjectId,
    ref:'Posts',
    required:true
  },
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required:true
  },
  content: {
    type: String,
    required: true,
    min: 1,
    max:255
  },
  replies:[{
    type:Schema.Types.ObjectId,
    ref:'Comments',
    default:[]
  }]
}, {timestamps:true});

const commentModel = model('Comments', commentSchema);

module.exports = commentModel;