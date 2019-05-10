const express = require("express");
const router = express.Router();
const passport = require("passport");

require('dotenv').config();


//=================================
//              MODELS
//=================================

const Zone = require("../../models/zones");


//=================================
//          REGISTRATION
//=================================

router.post("/create",passport.authenticate('admin', { session: false }), (req, res) => {


  Zone.findOne({ name:req.body.name }).then(zone => {

    if (zone) {

      return res.status(400).json({errors:'Zone already exist'});

    }else {
      const newZone = new Zone(req.body)

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

router.get("/all",
(req, res) => {
  const errors = {};

  Zone.find()
    .then(zone => {
      if (!zone) {
        errors.nozone = "There are no delivery zones available";
        return res.status(404).json(errors);
      }

      return res.json(zone);

      
    })
    .catch(err =>
      res.status(404).json({ profile: "There are no clients profile" })
    );
});

//=================================
//             DELETE ZONE
//=================================

router.delete(
  "/remove/:id",
  passport.authenticate('admin', { session: false }),
  (req, res) => {
    Zone.findOneAndRemove({ _id: req.zone.id }).then(() => {
      res.json({ success: true });
    });
  }
);
//=================================
//             DELETE ZONES
//=================================

router.delete(
  "/remove/",
  passport.authenticate('admin', { session: false }),
  (req, res) => {
    Zone.findOneAndRemove({}).then(() => {
      res.json({ success: true });
    });
  }
);

module.exports = router;
