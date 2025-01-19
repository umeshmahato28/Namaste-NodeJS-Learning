const fs = require("fs"); 
const https = require("https"); 

console.log("hello world");

var a = 232112; 
var b = 2323;

https.get("https://dummyjson.com/products/1", (res) => {
      console.log("Fetched Data Successfully");
});

setTimeout(() => {
      console.log("Timeout Completed");
},3000);

fs.readFileSync("./file.txt", "utf8");

fs.readFile("./file.txt", "utf8", (err, data) => {
      console.log("FIle data : ", data);
});

function multiplyfn(a, b) {
      const result = a * b;
      return result;
} 

var c = multiplyfn(a, b);

console.log("Multiplication of a and b is : ", c);
