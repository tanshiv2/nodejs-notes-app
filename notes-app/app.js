const validator = require('validator')

const mynotes = require('./notes.js');
const message = mynotes();

console.log(message);
console.log(validator.isEmail('shivangi.tanwar4@gmail.com'))

console.log(validator.isURL('https://isthisvalid.com'));
