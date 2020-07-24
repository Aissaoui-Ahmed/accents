import letters from '../letters.json';

/**
 *
 * @function check
 * @param {String} string
 * @returns {Array} Array.
 * @returns {String} result.letter letter has accent.
 * @returns {Number} result.position position of letter.
 * @description Check accent on string.
 */
const check = (string) => {
  const letter = string.split('');
  const result = [];
  for (let i = 0; i < letter.length; i += 1) {
    const letterCode = string[i].charCodeAt().toString();
    if (letters[letterCode]) {
      result.push({
        letter: String.fromCharCode(letterCode),
        position: i,
      });
    }
  }
  console.log(result);
  return result;
};

export default check;
