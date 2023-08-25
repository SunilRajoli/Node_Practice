const fs = require('fs')

console.log('This is First Line')

fs.readFile('f1.txt', d1)

function d1(err, data) {
    if(err) {
        console.log(err)
    }
    console.log('F1 data -> ' + data)
    fs.readFile('f2.txt', d2)
    
}



function d2(err, data) {
    if(err) {
        console.log(err)
    }
    console.log('F2 data -> ' + data)
    fs.readFile('f3.txt', d3)
}



function d3(err, data) {
    if(err) {
        console.log(err)
    }
    console.log('F3 data -> ' + data)
}

console.log('This is Last Line')