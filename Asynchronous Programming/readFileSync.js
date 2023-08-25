const fs = require('fs')

console.log('This is First Line')

let data  = fs.readFileSync('f1.txt')

console.log('The data is -> ' + data)


console.log('This is second line')