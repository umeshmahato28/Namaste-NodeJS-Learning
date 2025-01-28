const crypto = require("crypto");

console.log("Strat"); 

var a = 1078698;
var b = 20986;



crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512");
console.log("First Key is Generated");

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("Second Key is Generated"); 
});

function multiplyFn(x, y) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is : ", c);
