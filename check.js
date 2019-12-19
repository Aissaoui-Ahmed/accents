const remove = require('./remove');
function check(str) {
     return Boolean(str.localeCompare(remove(str),undefined, { sensitivity: 'accent' }) )
}
module.exports = check;