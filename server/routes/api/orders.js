const express = require("express");
const router = express.Router();
const passport = require("passport");

require('dotenv').config();


//=================================
//              MODELS
//=================================

const Order = require("../../models/orders");

//=================================
//       GET ALL ORDERS
//=================================
router.get("/all", passport.authenticate(['admin','manager'], { session: false }),(req, res) => {
  
    Order.find()
    .populate("job_id", ["category", "instructions","job_document","price","deliveryzone"])
    .populate({ path: "profile_id",
         populate: { path: 'client'}})
      .then(order => {
  
        res.json(order);
      })
      .catch(err => res.status(404).json({ order: "There are no orders" }));
  });

  module.exports = router;