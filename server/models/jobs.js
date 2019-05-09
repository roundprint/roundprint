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
    document: {
        type: String,
        required: true
      },
    instructions:{
        type: String,
        required: true,
        maxlength:100
    },
    date: {
      type: Date,
      default: Date.now
    },
    deliveryzone:{
        type: Schema.Types.ObjectId
    },
    deliverytime:{
      type: Schema.Types.ObjectId
      }
  });
  
  module.exports = Job = mongoose.model("jobs", JobSchema);