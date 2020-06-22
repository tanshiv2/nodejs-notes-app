# nodejs-notes-app
This is notes app made while learning node js. It provides the following functionality:

1. add: adds a new note
2. remove: removes an existing note
3. list: lists the title in notes in console
4. read : prints a single note in console
5. read: prints all notes in console

Make sure you have Nodejs, npm and Visual Studio Code installed.

To clone the repository:
```
git clone https://github.com/tanshiv2/nodejs-notes-app.git
```

Go to the directory in VScode:
```
cd nodejs-notes-app/notes-app
```

To install required dependencies and get the node-modules:
```
npm install
```

Use the application!

```
node app.js add --title "abc" --body "abc"

node app.js remove --title "abc"

node app.js list

node app.js read --title "abc"

node app.js readall
```
