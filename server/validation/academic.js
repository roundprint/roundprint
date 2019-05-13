const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateAcademicInput(data) {
  let errors = {};

  data.program = !isEmpty(data.program) ? data.program : "";
  data.year = !isEmpty(data.year) ? data.year : "";
  data.semester = !isEmpty(data.semester) ? data.semester : "";


  if (Validator.isEmpty(data.program)) {
    errors.program = "Program name field is required";
  }

  if (Validator.isEmpty(data.year)) {
    errors.year = "Year field is required";
  }

  if (Validator.isEmpty(data.semester)) {
    errors.semester = "Semester field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
