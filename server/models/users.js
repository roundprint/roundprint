const mongoose = require("mongoose");

const Schema = mongoose.Schema;

///////////////////////////////////////
//          USER SCHEMA             //
/////////////////////////////////////

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  regnumber:{
      type: String,
      unique: true,
      maxlength:8
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
  },
  deliveryzone:{
      type: Schema.Types.ObjectId
  },
  deliverytime:{
    type: Schema.Types.ObjectId
  },
  token:{
      type: String
  }
});

module.exports = User = mongoose.model("users", UserSchema);
