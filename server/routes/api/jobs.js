const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

//=================================
//              MODELS
//=================================

const Job = require('../../models/jobs');


//=================================
//            VALIDATIONS
//=================================



//=================================
//         USER CREATE A PRINT JOB
//=================================

router.post('/', (req, res) => {
    const newPost = new Post({
      upload: req.body.text,
      deliveryzone: req.body.text,
      deliverytime: req.body.text,
      instructiont: req.body.text,
      timestamp: new Date().getTime()
    });
    try {
      const post = await newPost.save();
      return res.status(201).json(post);
    } catch (err) {
      return res.status(400).send(err);
    }
  });







