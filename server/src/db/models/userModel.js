const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const { stringConfig } = require('../schemaConfig');

const userSchema = new Schema({
  displayName:{
    ...stringConfig,
    min:4
  },
  email:{
    ...stringConfig,
    min:6
  },
  password:{
    ...stringConfig,
    min:8
  },
  bio:{
    type: String,
    default: ''
  },
  profileImage:{
    ...stringConfig,
    default: 'defaultUserImage.png'
  },
  banned:{
    type:Boolean,
    required:true,
    default:false
  },
  following:[{
    type: Schema.Types.ObjectId,
    ref: 'Users'
  }],
  followers:[{
    type: Schema.Types.ObjectId,
    ref: 'Users'
  }],
  saved:[{
    type: Schema.Types.ObjectId,
    ref: 'Posts'
  }],
  blocked:[{
    type: Schema.Types.ObjectId,
    ref: 'Users'
  }],
}, { timestamps:true });

const Users = model('users', userSchema);

module.exports = Users;
