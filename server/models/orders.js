const mongoose = require('mongoose');
const Schema = mongoose.Schema;

///////////////////////////////////////
//          ORDER SCHEMA             //
/////////////////////////////////////

const OrderSchema = new Schema({

    JobID:{
        type: Schema.Types.ObjectId
    },
    status: {
        type: String,
        required: true
      }
   
  });
  
  module.exports = Job = mongoose.model("orders", OrderSchema);