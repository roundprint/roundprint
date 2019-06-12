const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//=================================
//           ZONE SCHEMA
//=================================

const ZoneSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  default_deliverytime: {
    type: String,
    default: "08:00"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Zone = mongoose.model("zones", ZoneSchema);
