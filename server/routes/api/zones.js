const express = require("express");
const router = express.Router();
const passport = require("passport");

require('dotenv').config();


//=================================
//              MODELS
//=================================

const Zone = require("../../models/zones");

//=================================
//            VALIDATIONS
//=================================

const validateZoneInput = require("../../validation/zone");
const isEmpty = require("../../validation/is-empty");


//=================================
//          CREATE OR EDIT ZONE
//=================================

router.post("/create-edit",passport.authenticate('admin', { session: false }), (req, res) => {

  const { errors, isValid } = validateZoneInput(req.body);

  // Validating zone name field
  if(!isValid){
      return res.status(400).json(errors);
  }

  // Get fields
  const zoneFields = {};
  zoneFields.name =  req.body.name;
  zoneFields.deliverytime =  req.body.deliverytime;

  Zone.findOne({ name:req.body.name }).then(zone => {

      if (zone) {
          // Update
          Zone.findOneAndUpdate(
              { _id: zone._id },
              { $set:zoneFields },
              { new: true }
          ).then(zone => res.json(zone));

      }else{
          
          const newZone = new Zone(zoneFields)

          newZone
          .save()
          .then(zone => res.json(zone))
          .catch(err => console.log(err));
      }
  }).catch(err => res.status(404).json(err));
});


//=================================
//         ALL DELIEVERY ZONES
//=================================

router.get("/all-zones",
(req, res) => {
  const errors = {};

  Zone.find()
    .then(zone => res.json(zone))
    .catch(err =>
      res.status(404).json({ zone: "There are no zones" })
    );
});

//=================================
//             DELETE ZONE
//=================================

router.post(
  "/remove",
  passport.authenticate('admin', { session: false }),
  (req, res) => {
    
    const { errors, isValid } = validateZoneInput(req.body);

    // Validating zone name field
    if(!isValid){
        return res.status(400).json(errors);
    }

    Zone.findOneAndRemove({ name: req.body.name }).then((zone) => {
      if(!zone){
        return res.status(404).json({success:false,message:"Zone not found"})
      }

      res.json({ success: true, message:`Zone ${req.body.name} succesfully deleted`});
    });
  }
);
//=================================
//             DELETE ZONES
//=================================

router.delete(
  "/remove-all",
  passport.authenticate('admin', { session: false }),
  (req, res) => {
    Zone.findOneAndRemove({}).then(() => {
      res.json({ success: true });
    });
  }
);

module.exports = router;
