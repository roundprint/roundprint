const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.regnumber = !isEmpty(data.regnumber) ? data.regnumber : "";
  data.zonename = !isEmpty(data.zonename) ? data.zonename : "";
  data.zonetime = !isEmpty(data.zonetime) ? data.zonetime : "";

  if (Validator.isEmpty(data.regnumber)) {
    errors.regnumber = "Registration number field is required";
  }
  if (Validator.isEmpty(data.zonename)) {
    errors.zonename = "Zone name field is required";
  }


  return {
    errors,
    isValid: isEmpty(errors)
  };
};
