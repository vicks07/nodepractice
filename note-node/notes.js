console.log('Starting notes.js')
const fs = require('fs');

var fetchNotes = ()=>{
    try{
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
        }
        catch(e){
           return []; 
        }
};

var saveNotes = (notes)=>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};


var addNote = (title,body)=>{
    var notes = fetchNotes();
    var note ={
        title,
        body
    }
    
    var duplicateNotes = notes.filter((note) => note.title === title);
    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
    
    //console.log('Adding Note',title,body);
};
var getAll = ()=>{
    console.log('Getting All notes');
};
var getNote = (title)=>{
    console.log('Getting Note: ',title);
};
var removeNote = (title)=>{
    var notes = fetchNotes();
    var notes = notes.filter((note) => note.title !== title); 
    saveNotes(notes);
    //console.log('Removing Note: ',title);
};
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};
//module.exports.age = 25
/*module.exports.addNote =  ()=>{
    return 'New Note'
}; 
module.exports.addVal = (val1,val2)=>{
    return val1+val2;
}; */