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

router.post("/order-status",passport.authenticate(['admin','manager'], { session: false }), (req, res) => {

    Order.findOne({ _id: req.body.order_id }).then(order => {

        if (order.order_status.length>0) {

            order.order_status[0].status = req.body.status;

            // Update Order Status
            Order.findOneAndUpdate(
                { _id: req.body.order_id },
                { $set:order },
                { new: true }
            ).then(order => res.json(order));

        }else{

            const newStatus = {
                status: req.body.status
                };
    
            // Add to exp array
            order.order_status.unshift(newStatus);
    
            order.save().then(order => res.json(order)); 
        }

      });
    });


    router.get("/order-status",passport.authenticate(['admin','manager','client'], { session: false }), (req, res) => {

      Order.findOne({ _id: req.body.order_id }).then(order => {
        res.json(order.order_status);
      });
  });


  module.exports = router;
