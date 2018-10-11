console.log('Starting app.js')

const fs = require('fs');
const os = require('os');
const _ = require('lodash'); 
const yargs = require('yargs');

const notes = require('./notes');

var command = process.argv[2];
const argv = yargs.argv;
//console.log(argv);
//console.log(process.argv);

if (command === 'add'){
    //console.log("Arguements ",argv.title,argv.body);
    notes.addNote(argv.title,argv.body);
    //console.log('Adding New Note');
}

else if(command ==='list'){
    notes.getAll();
    //console.log('Listing Notes');
}
else if(command ==='remove'){
    notes.removeNote(argv.title);
    //console.log('Removing Notes');
}
else if(command ==='get'){
    notes.getNote(argv.title);
}
else{
    console.log('Command Not Recognized');
}
//notes.TestNote();

//var filteredArrary = _.uniq(['Vikram',1,'Vikram',2,3,4]);
/*var filteredArrary = _.uniq(['Vikram']);
console.log(filteredArrary);
*/
///console.log(_.isString(true));
//console.log(_.isString('Vikram'));

/*var user = os.userInfo();
var res = notes.addVal(5,4);
console.log(res);*/
//console.log(user);
/*
fs.appendFile('greetings.txt',`Hello ${user.username} !, You are ${notes.age}`,function(err){
    if (err){
        console.log('Unable to write the file');
    }
});*/
