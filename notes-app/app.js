const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')


yargs.version('1.0.1')

//add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption:true,
            type: 'string'
        },
        body: {
            describe: 'Body',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title,argv.body)
    }
})

//remove command
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title)  
    }
})

//List of titles
yargs.command({
    command: 'list',
    describe: 'Lists the notes',
    handler() {
        notes.listNotes()
    }
})

//read a single note
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)  
    }
})

//read all notes
yargs.command({
    command: 'readall',
    describe: 'reads all notes',
    handler() {
        notes.readNotes()
    }
})
// console.log(yargs.argv)
yargs.parse()
