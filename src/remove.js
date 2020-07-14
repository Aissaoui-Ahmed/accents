/* eslint-disable no-console */
import letters from '../letters.js';

/**
 *
 * @function remove
 * @param {String} string
 * @returns {String} string.
 * @description Remove accent on string.
 */
const remove = async (string) => {
  const result = string.replace(/[^A-Za-z0-9\[\] ]/g, (x) => letters[x] || x);
  console.log(result);
};

export default remove;
