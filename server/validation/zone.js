const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateZoneInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";

  if (!Validator.isLength(data.name, { min: 2, max: 40 })) {
    errors.name = "Name must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Zone name field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
