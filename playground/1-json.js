const fs = require('fs')

// const book = {
//     title: 'Delirium',
//     author: 'Lauren Oliver'
// }

// const bookJSON = JSON.stringify(book)

// fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
data.name = 'Shivangi'
data.age = 22

//converting back to JSON and sending to file
const Data = JSON.stringify(data)
fs.writeFileSync('1-json.json', Data)