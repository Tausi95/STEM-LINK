// backend/middleware/validateUser.js
const { body } = require('express-validator');
const { User, Profile } = require("../models/");
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
 * Checks if a profile exists in the database by its primary key.
 * 
 * @param {number} value - The primary key value of the profile to check.
 * @param {string} [fieldName='Profile ID'] - The name of the field to include in the error message.
 * @returns {Promise<boolean>} Returns true if the profile exists.
 * @throws {Error} Throws an error if the profile does not exist.
 */
async function profileExists(value, fieldName = 'Profile ID') {
  const profile = await Profile.findByPk(value);
  if (profile) return true;
  throw new Error(`${fieldName} must exist in the users table`);
}

/**
 * Validates a user ID field.
 * 
 * @param {string} field - The name of the field to validate.
 * @param {boolean} [isRequired=true] - Whether the field is required.
 * @returns {Object} An express-validator object.
 */
function validateUser(field, isRequired = true, isUserProfile = false) {
  const fieldName = camelCaseToSentenceCase(field);
  const validator = isRequired 
    ? body(field).notEmpty().withMessage(`${fieldName} is required`) 
    : body(field).optional();

  return validator
    .isInt().withMessage(`${fieldName} must be an integer`)
    .custom((value) => isUserProfile
      ? profileExists(value, fieldName)
      : userExists(value, fieldName));
}

module.exports = {
  validateUser,
  userExists,
};