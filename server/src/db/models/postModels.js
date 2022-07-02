const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const { stringConfig } = require('../schemaConfig');

const postSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref:'Users'
  },
  imageUrl: {
    ...stringConfig
  },
  caption: {
    ...stringConfig,
  },
  tags: [{
    type:String,
    default:[]
  }],
  comments:[{
    type:Schema.Types.ObjectId,
    ref:'Comments',
    default:[]
  }],
  likes:[{
    type:Schema.Types.ObjectId,
    ref:'Users'
  }]
}, {timestamps:true});

const Post = model('Posts', postSchema);

module.exports = Posts;