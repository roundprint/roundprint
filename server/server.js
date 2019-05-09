const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

///////////////////////////////////////
//          INITILIAZE APP          //
/////////////////////////////////////

const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5001;

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
});
