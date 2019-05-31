const mongoose = require('mongoose');
const Schema = mongoose.Schema;

///////////////////////////////////////
//          ORDER SCHEMA             //
/////////////////////////////////////

const OrderSchema = new Schema({

    jobID:{
        type: String,
        required: true
    },
    status: {
        type: String,
        required: false
      }
   
  });
  
  module.exports = Order = mongoose.model("orders", OrderSchema);