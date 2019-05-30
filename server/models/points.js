const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//=================================
//    USER LOYALT POINTS SCHEMA
//=================================

const PointsSchema = new Schema({
user_id:{
   type: Schema.Types.ObjectId,
   ref: "users"
}, 
points:{
    type: Number,
    required:false
},
order_id:{
    type: Schema.Types.ObjectId,
    ref:"orders"
}


})
