const { check, validationResult } = require("express-validator")
const validateResult = require("../utils/validate")

const todosValidator = [
  check("title", "Error with title field")
    .exists()
    .withMessage("El title debe existir")
    .notEmpty()
    .withMessage("The title must exist")
    .isString()
    .withMessage("The title must be a string")
    .isLength({ min: 3, max: 50 })
    .withMessage("the user exceeds the maximum of 50 characters, must have a minimum of 3"),
  check("description", "description error")
    .exists()
    .withMessage("No property found description")
    .notEmpty()
    .withMessage("No value found for description")
    .isString()
    .withMessage("The description must be a string"),
  (req, res, next) => {
    validateResult(req, res, next)
  },
]


module.exports = {
  todosValidator
}
