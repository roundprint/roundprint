const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");


require('dotenv').config();

//=================================
//            VALIDATIONS
//=================================

const isEmpty = require("../validation/is-empty");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRETKEY;

module.exports = passport => {

  passport.use(
    "client",
    new JwtStrategy(opts, (jwt_payload, done) => {
      console.log(jwt_payload);
        User.findById(jwt_payload.auth._id)
        .then(client => {
          if (!isEmpty(client) && client.role === 'client') {
            return done(null, client);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );

  passport.use(
    "manager",
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.auth._id)
        .then(manager => {
          if (!isEmpty(manager) && manager.role === 'manager') {
            return done(null, manager);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );

  passport.use(
    "admin",
    new JwtStrategy(opts, (jwt_payload, done) => {
        User.findById(jwt_payload.auth._id)
        .then(admin => {
          if (!isEmpty(admin) && admin.role === 'admin') {
            return done(null, admin);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
