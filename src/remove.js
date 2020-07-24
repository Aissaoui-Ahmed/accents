import letters from '../letters.json';

/**
 *
 * @function remove
 * @param {String} string
 * @returns {String} string.
 * @description Remove accent on string.
 */
const remove = (string) => {
  const letter = string.split('');
  let result = '';
  for (let i = 0; i < letter.length; i += 1) {
    result += letters[letter[i].charCodeAt().toString()] || letter[i];
  }
  console.log(result);
  return result;
};

export default remove;
