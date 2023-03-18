const { check, param } = require("express-validator")
const validateResult = require("../utils/validate")

const createUserValidator = [
  check("username", "Error with username field")
    .exists()
    .withMessage("El username debe existir")
    .notEmpty()
    .withMessage("The username must exist")
    .isString()
    .withMessage("The username must be a string")
    .isLength({ min: 3, max: 25 })
    .withMessage("the user exceeds the maximum of 25 characters, must have a minimum of 3"),
  check("email", "Email error")
    .exists()
    .withMessage("No property found email")
    .notEmpty()
    .withMessage("No value found for email")
    .isString()
    .isLength({ min: 7, max: 50 })
    .withMessage("The email must have a length between 7 and 50 characters")
    .isEmail()
    .withMessage("The email does not have a correct format"),
  check("password", "Error con la contraseña")
    .exists()
    .notEmpty()
    .isString()
    .isLength({ min: 7 }),
  (req, res, next) => {
    validateResult(req, res, next)
  },
]

const updateUserValidator = [
  param("id").isInt().withMessage("which id?"),
  check("username")
    .isString()
    .exists()
    .withMessage("Are you sure that user exists?")
    .notEmpty()
    .withMessage("The username must be a string"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
]

module.exports = {
  createUserValidator,
  updateUserValidator,
}
