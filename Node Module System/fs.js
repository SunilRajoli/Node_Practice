//files

const fs = require('fs');

/*
//Reading a file

let fileContent = fs.readFileSync('f1.txt')
console.log(' ' + fileContent)

//Writing a file

fs.writeFileSync('f2.txt', 'This is updated f2')
console.log('File udpated')

//Append a file

fs.appendFileSync('f3.txt', ' This also updated')
console.log('File appended')

//Deleting a file
fs.unlinkSync('f2.txt')
console.log('File deleted')
*/

//Creating Directories

fs.mkdirSync('myDirectory')

//check content inside of directory

let folderPath = 'E:\\Node_new\\NPM\\myDirectory';
let folderContent = fs.readdirSync(folderPath);
console.log('' + folderContent)

//check whether directory exists or not

let doesExist = fs.existsSync('cp.js')
console.log(doesExist)

//remove Directory

fs.rmdirSync('myDirectory')
console.log('Directory Removed')