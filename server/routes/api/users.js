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
const Profile = require("../../models/profile");


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
  if(((req.body.role === " ") || (req.body.role === "client")) && !isValid){
    return res.status(400).json({errors});
  }


  User.findOne({ email: req.body.email }).then(user => {

     if(user){
        errors.email = "Email already exits";
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
        const payload = { id: client.id, name: client.name,lastname: client.lastname,email: client.email }; // Create JWT Payload
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
//             ALL USER PROFILES
//=================================

router.get("/all-clients", passport.authenticate(['admin', 'manager'], { session: false }),
(req, res) => {
  const errors = {};

  User.find()
    .then(user => {
      if (!user) {
        errors.noclientprofile = "There are no clients profile";
        return res.status(404).json(errors);
      }

      user.filter(r=>r.role.includes('client'))
      .map(user=>res.json(user))
      .catch(err=>res.status(404).json({ profile: "There are no registered clients" }));;

      
    })
    .catch(err =>
      res.status(404).json({ profile: "There are no registered clients" })
    );
});


//=================================
//             DELETE USER(s)
//=================================

router.post(
  "/remove-client",
  passport.authenticate(['admin'], { session: false }),
  (req, res) => {

    Profile.findOneAndRemove({ client: req.body.id }).then(() => {
      User.findOneAndRemove({ _id: req.body.id, role:'client'}).then((client) =>
        {
          if(!isEmpty(client) && client.role === 'client'){
              res.json({ success: true });
          }else{
            return res.status(401).json({success: false, error: 'This is not a client'})
          }
        }
      ).catch(err=>res.status(404).json({success:false,error:'There is no such a client'}));
    });
  }
);


//=================================
//             ALL MANAGERS
//=================================

router.get("/all-managers", passport.authenticate(['admin'], { session: false }),
(req, res) => {
  const errors = {};

  User.find()
    .then(user => {
      if (!user) {
        errors.noclientprofile = "There are no managers profile";
        return res.status(404).json(errors);
      }

      user.filter(r=>r.role.includes('manager'))
      .map(user=>res.json(user))
      .catch(err=>res.status(404).json({ profile: "There are no registered managers" }));

    })
    .catch(err =>
      res.status(404).json({ profile: "There are no registered managers" })
    );
});

//=================================
//             DELETE MANAGER
//=================================

router.post(
  "/remove-manager",
  passport.authenticate('admin', { session: false }),
  (req, res) => {
    User.findOneAndRemove({ _id: req.body.id, role:'manager' }).then((manager) => {

        if(!isEmpty(manager) && (manager.role === 'manager')){
          res.json({ success: true });
        }else{
          return res.status(404).json({success: false, error: 'This is not a manager'})
        }
    }).catch(err=>res.status(404).json({success:false,error:'There is not a manager'}));
  }
);

module.exports = router;
