const mongoose = require("mongoose");

const Schema = mongoose.Schema;

///////////////////////////////////////
//          ZONE SCHEMA             //
/////////////////////////////////////

const ZoneSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  deliverytime:{
    type: Schema.Types.ObjectId
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Zone = mongoose.model("zones", ZoneSchema);
