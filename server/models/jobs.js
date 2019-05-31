const mongoose = require('mongoose');
const Schema = mongoose.Schema;

///////////////////////////////////////
//          JOB SCHEMA             //
/////////////////////////////////////

const JobSchema = new Schema({

    category:{
        type: String,
        default: 'assignment'
    },
    job_document: {
        type: String,
        required: false
      },
    instructions:{
        type: String,
        required: false,
        maxlength:100
    },
    date: {
      type: Date,
      default: Date.now
    },
    deliveryzone:{
        type: Schema.Types.ObjectId,
        ref: "zones"

    },
    price:{
      type: Number,
      required: false
    },
    user:{
      type: Schema.Types.ObjectId,
      ref: "users"
    },
    timestamp: {
      type: Number,
      required: false
    }
   
  });
  
  module.exports = Job = mongoose.model("jobs", JobSchema);