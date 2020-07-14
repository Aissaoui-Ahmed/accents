import letters from '../letters.js';

/**
 *
 * @function check
 * @param {String} string
 * @returns {Object} Object.
 * @returns {String} result.letter letter has accent.
 * @returns {Number} result.position position of letter.
 * @description Check accent on string.
 */
const check = async (string) => {
  string.split('');
  const result = {};
  for (let i = 0; i < string.length; i += 1) {
    const letter = string[i];
    if (letters[letter]) {
      result.letter = letter;
      result.position = i;
      console.log(result);
    }
  }
};

export default check;
