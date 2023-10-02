const { body } = require("express-validator");

// Validation rules for creating a new user
const createUserValidation = [
  body("EmailAddress")
    .isEmail()
    .withMessage("Invalid email address")
    .normalizeEmail(),

  body("PhoneNum")
    .isString()
    .withMessage("Invalid Phone Number")
    .matches(/^[0-9]{7,15}$/),
];

module.exports = {
  createUserValidation,
};
