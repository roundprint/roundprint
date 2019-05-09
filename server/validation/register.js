const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.phonenumber = !isEmpty(data.phonenumber) ? data.phonenumber : "";
  data.regnumber = !isEmpty(data.regnumber) ? data.regnumber : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (!Validator.isLength(data.lastname, { min: 2, max: 30 })) {
    errors.lastname = "Name must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.lastname)) {
    errors.lastname = "Last name field is required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.phonenumber)) {
    errors.phonenumber = "Phone number field is required";
  }

  if (!Validator.isLength(data.regnumber, { min: 8, max: 8 })) {
    errors.regnumber = "Reg number must be 8 characters";
  }

  if (Validator.isEmpty(data.regnumber)) {
    errors.regnumber = "Reg number field is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
