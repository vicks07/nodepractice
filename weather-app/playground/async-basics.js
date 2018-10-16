console.log('Starting App');
setTimeout(()=>{
    console.log('Inside of callback');
},2000);

setTimeout(()=>{
    console.log('Hello');    
},0);

console.log('Finishing Up');