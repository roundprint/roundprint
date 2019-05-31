const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');


//=================================
//         API ROUTES
//=================================

const user = require("./routes/api/users");
const zone = require("./routes/api/zones");
const profile = require("./routes/api/profile");
const job = require("./routes/api/jobs");



//=================================
//         APP INITIALISATION
//=================================

const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


//=================================
//         PARSERS
//=================================
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//=================================
//       PAASPORT MIDDLEWARE
//=================================

app.use(passport.initialize());
require("./middleware/passport")(passport);


//=================================
//       USE API ROUTES
//=================================

app.use("/api/users/", user);
app.use("/api/zones/", zone);
app.use("/api/profiles/", profile);
app.use("/api/create-job/", job);


//=================================
//       APP LISTENING
//=================================

const port = process.env.PORT || 5001;

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
});
