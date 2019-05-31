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
    order_status: [
        {
            status: {
            type: String,
            required: true
            },
            date:{
            type: Date,
            default: Date.now
            }
        }
      ],
   
  });
  
  module.exports = Order = mongoose.model("orders", OrderSchema);