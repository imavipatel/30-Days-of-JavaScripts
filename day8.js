/*

Day 8 : Scope

Variable is the fundamental part in programming. We declare variable to store different data types. 
To declare a variable we use the key word var, let and const. A variable can be declared at different scope. 
In this section, we will see the scope variables, scope of variables when we use var or let. 
Variables scopes can be:

Global

Local

Variable can be declared globally or locally scope. We will see both global and local scope. 
Anything declared without let, var or const is scoped at global level.

Let us imagine that we have a scope.js file.

Window Global Object

Without using console.log() open your browser and check, you will see the value of a and b 
if you write a or b on the browser. That means a and b are already available in the window.
*/

//Scope.js

a = "JavaScript"; // declaring a variable without let or const make it available in window object and this found anywhere
b = 10; // // this is a global scope variable and found in the window object

function letsLearnScope() {
  console.log(a, b);
  if (true) {
    console.log(a, b);
  }
}
console.log(a, b); // accessible

/*
Global Scope

A globally declared variable can be accessed every where in the same file. 
But the term global is relative. It can be global to the file or 
it can be global relative to some block of codes.

*/

//Scope.js

//scope.js
let a = "JavaScript"; // is a global scope it will be found anywhere in this file
let b = 10; // is a global scope it will be found anywhere in this file
function letsLearnScope() {
  console.log(a, b); // JavaScript 10, accessible
  if (true) {
    let a = "Python";
    let b = 100;
    console.log(a, b); // Python 100
  }
  console.log(a, b);
}
letsLearnScope();
console.log(a, b); // JavaScript 10, accessible

/*

Local Scope

A variable declared as local can be accessed only in certain block code.

Block Scope
Function Scope

*/

//scope.js
let a1 = "JavaScript"; // is a global scope it will be found anywhere in this file
let b1 = 10; // is a global scope it will be found anywhere in this file
// Function scope
function letsLearnScope() {
  console.log(a1, b1); // JavaScript 10, accessible
  let value = false;
  // block scope
  if (true) {
    // we can access from the function and outside the function but
    // variables declared inside the if will not be accessed outside the if block
    let a1 = "Python";
    let b1 = 20;
    let c1 = 30;
    let d1 = 40;
    value = !value;
    console.log(a1, b1, c1, value); // Python 20 30 true
  }
  // we can not access c because c's scope is only the if block
  console.log(a1, b1, value); // JavaScript 10 true
}
letsLearnScope();
console.log(a1, b1); // JavaScript 10, accessible
