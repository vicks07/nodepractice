console.log('Starting notes.js')

var addNote = (title,body)=>{
    console.log('Adding Note',title,body);
};
var getAll = ()=>{
    console.log('Getting All notes');
};
var getNote = (title)=>{
    console.log('Getting Note: ',title);
}
var removeNote = (title)=>{
    console.log('Removing Note: ',title);
}
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