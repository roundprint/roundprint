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
  if (file.mimetype === 'doc/pdf') {
    cb(null, true);
  } else {
    cb(null, false);
  }
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
  const job = new Job({
    category: req.body.category,
    price: req.body.price,
    instructions: req.body.instructions,
    job_document: req.file.path,
    user:req.body.user,
    deliveryzone:req.body.deliveryzone
  });

  job
    .save()
    .then(result => {
      console.log(result);
      return res.json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});


module.exports = router;