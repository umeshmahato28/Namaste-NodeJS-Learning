// const {x, calculateSum} = require('./calculate/sum.js');
// const {calculateMultiply} = require('./calculate/multiply.js');
   
const util = require("node:util");
 
const { calculateMultiply, calculateSum } = require("./calculate");

const data = require("./data.json");

console.log(data);

var name = "Node JS";

var a = 20;
var b = 30;

console.log(name);
console.log(a + b);

calculateSum(a, b);
calculateMultiply(a, b);
console.log(x);

// console.log(globalThis===global);
