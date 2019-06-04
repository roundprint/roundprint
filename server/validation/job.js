const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateJobInput(data) {
  let errors = {};

  data.job_document = !isEmpty(data.job_document) ? data.job_document : "";
  data.price = !isEmpty(data.price) ? data.price : "";
  

  if (!Validator.isEmpty(data.job_document, { min: 2, max: 30 })) {
    errors.job_document = "Document field is required";
  }

  if (Validator.isEmpty(data.price)) {
    errors.price = "Number of pages field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
