const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')
console.log(process.argv)
console.log(yargs.argv)
yargs.version('1.0.1')
//add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note!')
    }
})

//remove command
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    handler: function () {
        console.log('Removing a note!')
    }
})


yargs.command({
    command: 'list',
    describe: 'Lists the notes',
    handler: function () {
        console.log('Listing out notes!')
    }
})

yargs.command({
    command: 'read',
    describe: 'reads the notes',
    handler: function () {
        console.log('Reading the notes!')
    }
})
.parse()

