const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')
const { demandOption } = require('yargs')
// console.log(process.argv)

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
    handler: function (argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

//remove command
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    // builder:{
    //     title: {
    //         describe: 'Note title',
    //         demandOption:true,
    //         type: 'string'
    //     }
    // }
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
// console.log(yargs.argv)
yargs.parse()
