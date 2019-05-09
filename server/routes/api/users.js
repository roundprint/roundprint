const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

require('dotenv').config();

//=================================
//            VALIDATIONS
//=================================

const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const isEmpty = require("../../validation/is-empty");


//=================================
//              MODELS
//=================================

const User = require("../../models/users");


//=================================
//              AUTH
//=================================

router.get('/auth',passport.authenticate(['admin', 'manager','client'], { session: false }), (req,res)=>{

    let isAdmin;

    if(req.user.role === 'admin'){
        isAdmin = req.user.role;
    }else if(req.user.role === 'manager'){
        isAdmin = req.user.role;
    }else{
        isAdmin = req.user.role;
    }

    res.status(200).json({
        isAdmin: isAdmin,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        phoneNumber: req.user.phonenumber,
        regNumber: req.user.regnumber,
        role: req.user.role,
        deliveryZone: req.user.deliveryzone
    })
})

//=================================
//          REGISTRATION
//=================================

router.post("/register", (req, res) => {

  const { errors, isValid } = validateRegisterInput(req.body);

  // Validating all body fields
  if(req.body.role !== 'admin' || req.body.role !=='manager' && !isValid){
    return res.status(400).json(errors);
  }

  User.findOne({ regnumber:req.body.regnumber }).then(user => {

    if (!isEmpty(user) && (user.regnumber === req.body.regnumber) && (user.email === req.body.email)) {

      errors.email = "Email already exits";
      errors.regnumber = "Registration number already exits";

      return res.status(400).json(errors);

    }else if(!isEmpty(user) && (user.regnumber === req.body.regnumber)){

        errors.regnumber = "Registration number already exits";
        return res.status(400).json(errors);

    
    }else if(!isEmpty(user) && (user.email === req.body.email)){

        errors.email = "Email number already exits";
        return res.status(400).json(errors);

    }else {
      const newUser = new User(req.body)

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(client => res.json(client))
            .catch(err => console.log(err));
        });
      });
    }
  }).catch(err => res.status(404).json(err));
});

//=================================
//              LOGIN
//=================================

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Validating all body fields
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  //Find User by email
  User.findOne({ email }).then(client => {
    //Check for User
    if (!client) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    //Check Password
    bcrypt.compare(password, client.password).then(isMatch => {
      if (isMatch) {
        //User Matched
        const payload = { id: client.id, name: client.name }; // Create JWT Payload
        //Sign Token
        jwt.sign(
          payload,
          process.env.SECRETKEY,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Password Incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});


//=================================
//          CLIENT PROFILE
//=================================

router.get(
  "/profile",
  passport.authenticate("client", { session: false }),
  (req, res) => {
    const errors = {};

    User.findOne({ _id: req.user.id })
      .then(client => {
        if (!client) {
          errors.noclientprofile = "There is no profile for this client";
          return res.status(404).json(errors);
        }
        res.json(client);
      })
      .catch(err => res.status(404).json(err));
  }
);

//=================================
//             ALL USER PROFILES
//=================================

router.get("/profile/all", passport.authenticate(['admin', 'manager'], { session: false }),
(req, res) => {
  const errors = {};

  User.find()
    .then(user => {
      if (!user) {
        errors.noclientprofile = "There are no clients profile";
        return res.status(404).json(errors);
      }

      user.filter(r=>r.role.includes('client')).map(user=>res.json(user));

      
    })
    .catch(err =>
      res.status(404).json({ profile: "There are no clients profile" })
    );
});

//=================================
//         USER UPDATE PROFILE
//=================================

router.post(
  "/edit-profile",
  passport.authenticate("client", { session: false }),
  (req, res) => {
    //   TODO: Fields validation

    // Get fields
    const profileFields = {};
    if (req.body.name) {
      profileFields.name = req.body.name;
    } else {
      profileFields.name = req.user.name;
    }
    if (req.body.lastname) {
      profileFields.lastname = req.body.lastname;
    } else {
      profileFields.lastname = req.user.lastname;
    }
    if (req.body.email) {
      profileFields.email = req.body.email;
    } else {
      profileFields.email = req.user.email;
    }
    if (req.body.picture) {
      profileFields.regnumber = req.body.regnumber;
    } else {
      profileFields.regnumber = req.user.regnumber;
    }
    if (req.body.password) {
      profileFields.password = req.body.password;
    } else {
      profileFields.password = req.user.password;
    }
    if (req.body.phonenumber) {
      profileFields.phonenumber = req.body.phonenumber;
    } else {
      profileFields.phonenumber = req.user.phonenumber;
    }
    if (req.body.deliverytime) {
      profileFields.deliverytime = req.body.deliverytime;
    } else {
      profileFields.deliverytime = req.user.deliverytime;
    }
    if (req.body.deliveryzone) {
      profileFields.deliveryzone = req.body.deliveryzone;
    } else {
      profileFields.deliveryzone = req.user.deliveryzone;
    }

    User.findOne({ _id: req.user.id }).then(client => {
      if (client) {

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(profileFields.password, salt, (err, hash) => {
              if (err) throw err;
                profileFields.password = hash;

                // Update
                User.findOneAndUpdate(
                    { _id: req.user.id },
                    { $set: profileFields },
                    { new: true }
                ).then(client => res.json(client));
            });
          });
      } else {
        // Save Profile
        newProfile = new User(profileFields);

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newProfile.password, salt, (err, hash) => {
              if (err) throw err;
              newProfile.password = hash;
              newProfile
                .save()
                .then(profile => res.json(profile))
                .catch(err => console.log(err));
            });
          });
      }
    });
  }
);

//=================================
//             DELETE USER(s)
//=================================

router.delete(
  "/remove/:id",
  passport.authenticate(['admin','client'], { session: false }),
  (req, res) => {
    User.findOneAndRemove({ _id: req.user.id }).then(() => {
      res.json({ success: true });
    });
  }
);

module.exports = router;
