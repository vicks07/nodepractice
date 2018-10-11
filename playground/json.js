// var obj = {
// name:'Vikram'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof(stringObj));
// console.log(stringObj);

// var personString = '{"name":"Vikram","age":25}';
// var person = JSON.parse(personString);
// console.log(personString,person,typeof person,person.name,person.age);

const fs = require('fs');
var originalNote = {
    title:'Some title',
    body:'Some body'
};
//originalNoteString
originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof noteString);
console.log(note);