const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//=================================
//           PROFILE SCHEMA
//=================================

const ProfileSchema = new Schema({
  client: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  regnumber: {
    type: String,
    required: true,
    max: 8
  },
  deliveryzone:{
      name:{
          type: String,
          required: true
      },
      time:{
          type: String,
          required: true
      }
  },
  academic: [
    {
        program: {
        type: String,
        required: true
        },
        year:{
        type: Number,
        required:true
        },
        semester: {
        type: Number,
        required:true
        },
        date:{
        type: Date,
        default: Date.now
        }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
