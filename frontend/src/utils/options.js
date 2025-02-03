/**
 * Converts an array of strings into an array of option objects.
 *
 * @param {Array} arr - The array of strings to be converted.
 * @returns {Array} An array of objects, each containing a `value` and `label` property.
 */
export function mapToOptions(arr) {
  return arr.map((item) => ({ value: item, label: item }));
}