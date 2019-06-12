const express = require("express");
const router = express.Router();
const passport = require("passport");

require('dotenv').config();


//=================================
//              MODELS
//=================================

const Profile = require("../../models/profile");
const Zone = require("../../models/zones");
const User = require("../../models/users");

//=================================
//            VALIDATIONS
//=================================

const validateAcademicInput = require("../../validation/academic");
const validateProfileInput = require("../../validation/profile");
const isEmpty = require("../../validation/is-empty");




//=================================
//      CURRENT CLIENT PROFILE
//=================================
router.get(
    "/",
    passport.authenticate("client", { session: false }),
    (req, res) => {
      const errors = {};
  
      Profile.findOne({ client: req.user.id })
        .populate("client", ["name", "lastname","email","phonenumber","role"])
        .then(profile => {
          if (!profile) {
            errors.noprofile = "There is no profile for this client";
            return res.status(404).json(errors);
          }
          res.json(profile);
        })
        .catch(err => res.status(404).json(err));
    }
  );

//=================================
//       GET ALL CLIENT
//=================================
  router.get("/all", (req, res) => {
    const errors = {};
  
    Profile.findOne({ client: req.user.id })
    .populate("client", ["name", "lastname","email","phonenumber","role"])
      .then(profiles => {
        if (!profiles) {
          errors.noprofile = "There are no profiles";
          return res.status(404).json(errors);
        }
  
        res.json(profiles);
      })
      .catch(err => res.status(404).json({ profile: "There are no profiles" }));
  });

  
//=================================
// CREATE OR EDIT CLIENT PROFILE
//=================================

  router.post(
    "/edit-create",
    passport.authenticate("client", { session: false }),
    (req, res) => {
      const { errors, isValid } = validateProfileInput(req.body);
  
      // Check Validation
      if (!isValid) {
        // Return any errors with 400 status
        return res.status(400).json(errors);
      }
  
      // Get fields
      const profileFields = {};
      profileFields.client = req.user.id;
      if (req.body.regnumber) profileFields.regnumber = req.body.regnumber;
  
      Zone.findOne({ name: req.body.zonename }).then(zone => {
          if(zone){

            
            profileFields.deliveryzone = {};
            profileFields.deliveryzone.name = zone.name;
            profileFields.deliveryzone.time = zone.deliverytime?zone.deliverytime[0]:zone.default_deliverytime;

            Profile.findOne({ client: req.user.id }).then(profile => {
                if (profile) {
                    // Update
                    Profile.findOneAndUpdate(
                        { client: req.user.id },
                        { $set: profileFields },
                        { new: true }
                    ).then(profile => {
                      
                      const userFields = {};
                      if (req.body.email) userFields.email = req.body.email;
                      User.findByIdAndUpdate(
                        { _id: req.user.id },
                        { $set: userFields},
                        { new: true}
                      ).then(user=>res.json(user));
                    });
        
                } else {
                  // Create
          
                  // Check if regnumber exists
                  Profile.findOne({ regnumber: profileFields.regnumber }).then(profile => {
                    if (profile) {
                      errors.regnumber = "That registration number already exists";
                      res.status(400).json(errors);
                    }
                    
                    // Save Profile
                    new Profile(profileFields).save().then(profile => res.json(profile));
                  });
                }
              });

          }else{
            res.status(404).json({success:false,message:`${req.body.zonename} not found`});
          }
      });
    }
  );
  
//=================================
//          ADD OR EDIT ACADEMIC
//=================================

router.post("/add-edit-academic",passport.authenticate('client', { session: false }), (req, res) => {

    const { errors, isValid } = validateAcademicInput(req.body);

    // Validating academic fields
    if(!isValid){
        return res.status(400).json(errors);
    }

    Profile.findOne({ client: req.user.id }).then(profile => {

        if (profile.academic.length>0) {

            profile.academic[0].program = req.body.program;
            profile.academic[0].year = req.body.year;
            profile.academic[0].semester = req.body.semester;

            // Update Profile
            Profile.findOneAndUpdate(
                { client: req.user.id },
                { $set:profile },
                { new: true }
            ).then(profile => res.json(profile));

        }else{

            const newAcademic = {
                program: req.body.program,
                year: req.body.year,
                semester: req.body.semester
                };
    
            // Add to exp array
            profile.academic.unshift(newAcademic);
    
            profile.save().then(profile => res.json(profile));
        }

      });
});

module.exports = router;
