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
        required: true
      },
    instructions:{
        type: String,
        required: true,
        maxlength:100
    },
    deliveryzone:{
        type: Object,
        required:true

    },
    price:{
      type: Number,
      required: true
    },
    timestamp: {
      type: Date,
      default: Date.now
    }
   
  });
  
  module.exports = Job = mongoose.model("jobs", JobSchema);