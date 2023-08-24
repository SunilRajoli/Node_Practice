const calculator = require('./calculator');

console.log('Scalar is awesome');

function sayHello() {
    console.log("Hello to all");
}

sayHello();

let name = 'sunil';
console.log(global.name);

calculator.addition(3, 6)