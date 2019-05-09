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
  regnumber:{
      type: String,
      required: true,
      unique: true,
      maxlength:8
  },
  email: {
    type: String,
    required: true
  },
  picture: {
    type: String
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
    }
});

module.exports = User = mongoose.model("users", UserSchema);
