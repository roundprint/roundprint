const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const path = require('path');


//=================================
//         API ROUTES
//=================================

const user = require("./routes/api/users");
const zone = require("./routes/api/zones");
const profile = require("./routes/api/profile");
const job = require("./routes/api/jobs");
const order = require("./routes/api/orders")



//=================================
//         APP INITIALISATION
//=================================

const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

mongoose
  .connect(process.env.MONGODB_URI)//process.env.MONGODB_URI || process.env.mongodb_uri
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

//=================================
//         PARSERS
//=================================
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//=================================
//         SERVE UP STATIC ASSEST
//=================================
if(process.env.MODE_ENV === 'production'){
  app.use(express.static(path.resolve(__dirname+"/../client/build")));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname+"../client/build"));
  });
}

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
app.use("/api/order/", order);


//=================================
//       APP LISTENING
//=================================

const port = process.env.PORT || 106;

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
});
