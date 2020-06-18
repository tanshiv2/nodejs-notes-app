const fs = require('fs')

fs.writeFileSync('notes.txt', 'This is tanshiv2');

fs.appendFile('notes.txt',' This text appended using the appendFile', (err) => {
    if (err) throw err;
    console.log('Hurray! it worked!');
});

try{
    fs.appendFileSync('notes.txt','Similarly, this one is appended using appendFileSync');
    console.log('Hurray it worked!');
}
catch (err){
    console.log('There is an error!');
}
