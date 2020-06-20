const fs = require('fs')
const chalk = require('chalk')


const addNotes = (title,body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)

    if(duplicateNotes){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    }
    else{
        console.log('Note title exists!')
    }    
}

const removeNotes = (title) => {
    const notes = loadNotes()
    const keepNotes = notes.filter((note) => note.title !== title)

    if(notes.length === keepNotes.length)
    {
        console.log(chalk.bgRed('No note found!'))
    }
    else{
        console.log(chalk.bgGreen(title + ' note removed!'))
        saveNotes(keepNotes);
    }

}

const listNotes = () => {
    const showList = loadNotes()
    showList.forEach((note) => console.log(note.title))
}

const readNotes = function() {
    const readingNotes = loadNotes()
    readingNotes.forEach((note) => {
        console.log(chalk.bgBlue(note.title))
        console.log(chalk.blue(note.body))
    })
}

const readNote = (title) => {
    const readingNote = loadNotes()
    const showNote = readingNote.find((note) => note.title === title)

    if(!showNote)
    {
        console.log(chalk.bgRed('No note found!'))
    }
    else{
        console.log(chalk.bgBlue(showNote.title))
        console.log(chalk.blue(showNote.body))
    }
}

const saveNotes = (notes) => {
    const saveNote = JSON.stringify(notes)
    fs.writeFileSync('notes.json',saveNote)
}

const loadNotes = () => {
    try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    
    return JSON.parse(dataJSON)

    } catch (e){
        return []
    }
}

module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes,
    readNote: readNote
}