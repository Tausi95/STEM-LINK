// backend/middleware/validateUser.js
const { body } = require('express-validator');
const { handleValidationErrors } = require('./errorMiddleware');
const { User } = require("../models/");
const { camelCaseToSentenceCase } = require('../utils/strs');


/**
 * Checks if a user exists in the database by their primary key.
 *
 * @param {number} value - The primary key value of the user to check.
 * @param {string} [fieldName='User ID'] - The name of the field to include in the error message.
 * @returns {Promise<boolean>} Returns true if the user exists.
 * @throws {Error} Throws an error if the user does not exist.
 */
async function userExists(value, fieldName = 'User ID') {
  const user = await User.findByPk(value);
  if (user) return true;
  throw new Error(`${fieldName} must exist in the users table`);
}

/**
 * Validates a user ID field.
 * 
 * @param {string} field - The name of the field to validate.
 * @param {boolean} [isRequired=true] - Whether the field is required.
 * @returns {Object} An express-validator object.
 */
function validateUser(field, isRequired = true) {
  const fieldName = camelCaseToSentenceCase(field);
  const validator = isRequired 
    ? body(field).notEmpty().withMessage(`${fieldName} is required`) 
    : body(field).optional();

  return validator
    .isInt().withMessage(`${fieldName} must be an integer`)
    .custom((value) => userExists(value, fieldName));
}

module.exports = {
  validateUser,
  userExists,
};