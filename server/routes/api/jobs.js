const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const multer = require('multer');
const path = require('path');

//=================================
//              MODELS
//=================================

const Job = require('../../models/jobs');
const Profile = require('../../models/profile');
const Order = require('../../models/orders');


//=================================
//            VALIDATIONS
//=================================



//=================================
//  USER CREATE A PRINT JOB
//=================================



// SET STORAGE PATH FOR PDF UPLOADS

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  var ext = path.extname(file.originalname);
  if(ext !== '.pdf') {
      return cb(new Error('Only PDF(s) are allowed'))
  }
  
  cb(null, true);

};

// SET DOCUMENT SIZE
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});


router.post("/", passport.authenticate('client', { session: false }), upload.single('job_document'), (req, res, next) => {

  Profile.findOne({ client: req.user.id }).then(profile => {
    if (profile) {
        // Create Job
        const job = new Job({
          category: req.body.category,
          price: req.body.price,
          instructions: req.body.instructions,
          job_document: req.file.path,
          deliveryzone:profile.deliveryzone
        });
      
        job
          .save()
          .then(result => {
            
            if(result){
              const newOrder = new Order({
                job_id: result._id,
                profile_id: profile._id
              });

              newOrder.save().then(order=>res.json(order));
            }
            

          })
          .catch(err => {
            console.log(err);
            res.status(500).json({
              error: err
            });
          });

    }
  });
});


module.exports = router;