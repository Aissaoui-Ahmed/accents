import letters from '../letters.json';

/**
 *
 * @function hasAccent
 * @param {String} string
 * @returns {Boolean} Boolean.
 * @description Check accent on string (true || false).
 */
const hasAccent = (string) => {
  const letter = string.split('');
  const result = letter.some((x) => {
    let state = false;
    for (let i = 0; i < Object.keys(letters).length; i += 1) {
      const accent = Object.keys(letters)[i];
      const letterCode = x.charCodeAt().toString();
      if (accent === letterCode) {
        state = true;
        break;
      }
    }
    return state;
  });
  console.log(result);
  return result;
};

export default hasAccent;
