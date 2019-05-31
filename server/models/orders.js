const mongoose = require('mongoose');
const Schema = mongoose.Schema;

///////////////////////////////////////
//          ORDER SCHEMA             //
/////////////////////////////////////

const OrderSchema = new Schema({

    job_id:{
        type: Schema.Types.ObjectId,
        ref: 'jobs'
    },
    profile_id:{
        type: Schema.Types.ObjectId,
        ref: 'profile'
    },
    status: {
        type: String,
        required: false
      }
   
  });
  
  module.exports = Order = mongoose.model("orders", OrderSchema);