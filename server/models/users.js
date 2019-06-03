const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//=================================
//           USER SCHEMA
//=================================

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phonenumber: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  role:{
      type: String,
      default: 'client'
  }
});

module.exports = User = mongoose.model("users", UserSchema);
