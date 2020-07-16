import letters from '../letters.js';

/**
 *
 * @function remove
 * @param {String} string
 * @returns {String} string.
 * @description Remove accent on string.
 */
const remove = async (string) => {
  string.split('');
  let result = '';
  for (let i = 0; i < string.length; i += 1) {
    result += letters[string[i].charCodeAt().toString()] || string[i];
  }
  console.log(result);
};

export default remove;
