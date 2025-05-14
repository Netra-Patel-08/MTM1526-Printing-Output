// Excercise

// TASK 1

// Use the following template for each expression below:

// alert( "description of alerted_value: " + alerted_value );
/*
a + b
a - b
a * b
a / b
a % b
a += b
a -= b
a *= b
a /= b
a %= b
a == b
a != b
a > b
a < b
!a && !c 
!a || !c 
*/

// Declared Variables
let a = 3;
let b = 5;
let c;

let task1output = `
let a = 3;
let b = 5;
let c; 
--------------

a + b = ${a + b}
a - b = ${a - b}
a * b = ${a * b}
a / b = ${a / b}
a % b = ${a % b}
a += b = ${a += b}
a -= b = ${a -= b}
a *= b = ${a *= b}
a /= b = ${a /= b}
a %= b = ${a %= b}
a == b = ${a == b}
a != b = ${a != b}
a > b = ${a > b}
a < b = ${a < b}
!a && !c = ${!a && !c }
!a || !c = ${!a || !c}
`
console.log (task1output)

// TASK 2

let first_name = "Netra";
let last_name = "Patel";
let email = "pate1403@algonquinlive.com";
let output;

// INTERPOLATION
output = `My name is ${first_name} ${last_name}. You can contact me at ${email}.`

console.log(output);
