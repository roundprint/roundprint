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

// const storage = multer.diskStorage({
//   destination: './public/uploads/',
//   filename: function(req, file, cb){
//     cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//   }
// });

// SET DOCUMENT EXT TYPE

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


router.post("/", upload.single('job_document'), (req, res, next) => {
  const job = new Job({
    _id: new mongoose.Types.ObjectId(),
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
      res.status(201).json({
        message: "You have submited your doc for a print",
        createdJob: {
          category: req.body.category,
          price: req.body.price,
          instructions: req.body.instructions,
          job_document: req.file.path,
          user:req.body.user,
          deliveryzone:req.body.deliveryzone,
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});


// DONT MIND THIS CODE FROM HERE-> I AM USING IT AS BASIS



router.get("/", (req, res, next) => {
  Product.find()
    .select("category price _id job_document")
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        products: docs.map(doc => {
          return {
            name: doc.name,
            price: doc.price,
            job_document: doc.job_document,
            _id: doc._id,
        
          };
        })
      };
      //   if (docs.length >= 0) {
      res.status(200).json(response);
      //   } else {
      //       res.status(404).json({
      //           message: 'No entries found'
      //       });
      //   }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  Product.findById(id)
    .select('name price _id productImage')
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
            product: doc,
            request: {
                type: 'GET',
                url: 'http://localhost:3000/products'
            }
        });
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.patch("/:productId", (req, res, next) => {
  const id = req.params.productId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Product.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'Product updated',
          request: {
              type: 'GET',
              url: 'http://localhost:3000/products/' + id
          }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.delete("/:productId", (req, res, next) => {
  const id = req.params.productId;
  Product.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'Product deleted',
          request: {
              type: 'POST',
              url: 'http://localhost:3000/products',
              body: { name: 'String', price: 'Number' }
          }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;