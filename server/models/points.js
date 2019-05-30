const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//=================================
//    USER LOYALT POINTS SCHEMA
//=================================

const PointsSchema = new Schema({ 
points:{
    type: Number,
    required:false
},
order_id:{
    type: Schema.Types.ObjectId,
    ref:"orders"
},

});

module.exports = Point = mongoose.model("points", PointsSchema);
