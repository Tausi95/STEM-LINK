/**
 * Converts a camelCase string to Sentence case.
 *
 * @param {string} str - The camelCase string to convert.
 * @returns {string} - The converted Sentence case string.
 */
function camelCaseToSentenceCase(str) {
  if (!str) return str;
  const result = str.replace(/([A-Z])/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
}

module.exports = { 
  camelCaseToSentenceCase 
};