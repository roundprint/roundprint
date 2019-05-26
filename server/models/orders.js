const mongoose = require('mongoose');
const Schema = mongoose.Schema;

///////////////////////////////////////
//          ORDER SCHEMA             //
/////////////////////////////////////

const OrderSchema = new Schema({

    jobID:{
        type: Schema.Types.ObjectId
    },
    status: {
        type: String,
        required: true
      }
   
  });
  
  module.exports = Order = mongoose.model("orders", OrderSchema);