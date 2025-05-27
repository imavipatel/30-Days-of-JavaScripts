/*
Day 7

Functions:

*/

/*

A function is a reusable block of code or programming statements designed 
to perform a certain task. 
A function is declared by a function key word followed by a name, followed by
parentheses (). 
A parentheses can take a parameter.
If a function take a parameter it will be called with argument.
A function can also take a default parameter.
To store a data to a function, a function has to return certain data types.
To get the value we call or invoke a function.

Function makes code.
Clean and easy to read.
reusable
easy to test.

A function can be declared or created in couple of ways.

Declaratioin function
Expression function
Anonymous function
Arrow function

*/

/*

Function Declaration

*/

function functionName(){
    //code goes here
}

functionName() //calling function by its name with parentheses

/*

Function without a parameter and return

Function can be declared without a parameter

Example:

*/

//function without parameter, a function which makes a number square

function square(){
    let num = 2
    let sq = num * num
    console.log(sq)
}

square() //4

//function without parameter

function addTwoNumbers() {
    let numOne  = 10;
    let numTwo  = 20
    let sum = numOne+ numTwo

    console.log(sum);
}

addTwoNumbers()

function printFullName(){
    let firstName = 'Ankit'
    let secondName = 'Patel'
    let space = ' '

    let fullName = firstName + space + secondName

    console.log(fullName)
}

printFullName()

/*
Function returning value

Function can also return values. if a function does not return values
the value of a function is undefined.

*/

function printFullNameOne(){
    let firstName = 'Ankit'
    let secondName = 'Patel'
    let space = ' ';
    let fullName = firstName + space + secondName
    return fullName;
}

console.log(printFullNameOne())

function addTwoNumbersOne(){
    let numOne = 2
    let numTwo = 3
    let total  = numOne + numTwo
    return total
}

console.log(addTwoNumbersOne())

/*
Function with a parameter

In a function we can pass different data types (number, string, boolean,
object, function) as a parameter.

*/

//function with one parameter



function functionNameOne(param1){
    //code goes her
}

// functionName(param1) // during calling or invoking one argument needed.



function areaOfCircle(r){
    let area = Math.PI * r * r
    return area
}

console.log(areaOfCircle(10))

function squareOne(number){
    return number * number
}

console.log(squareOne(10))

/*

Function with two parameters

function functionName(param1, param2){
    //code goes here
}
functionName(param1, param2)

*/

function sumTwoNumbers(numOne, numTwo){
    let sum = numOne + numTwo
    return sum;
}

console.log(sumTwoNumbers(10, 20))

function printFullNameTwo(firstName, lastName){
    return `${firstName} ${lastName}`
}

console.log(printFullNameTwo('Ankit', 'Patel'))


//Function with many parameters

/*

function functionName(param1, param2, param3, ...){
    //code goes here
}

functionName(param1, param2, param3, ...)  // during calling or invoking three arguments needed
 
*/


function sumArrayValues(arr){
    let sum= 0
    for (let value of arr) {
        sum += value;
    }
    return sum
}

const numbers = [1,2,3,4,5]

console.log(sumArrayValues(numbers))


const areaOfCircles = (radius) =>{
    const area = Math.PI * radius * radius
    return area;
}

console.log(areaOfCircles(10))

/*

Function with unlimited number of parameters

Sometimes we do not know how many arguments the user going to pass. 
Therefore, we should know how to write a function which can take unlimited 
number of arguments. The way we do it has a significant difference between 
a function declaration(regular function) and arrow function. 
Let us see examples both in function declaration and arrow function.


Unlimited number of parameters in regular function  ==>

A function declaration provides a function scoped arguments array 
like object. Any thing we passed as argument in the function can 
be accessed from arguments object inside the functions. Let see

// Let us access the arguments object

function sumAllNums(){
console.log(arguments)
}

sumAllNums(1,2,3,4)

*/

//function declaration

function sumAllNums(){
    let sum = 0
    console.log('arguments', arguments) //[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
    for( let val of arguments){
        sum = sum + val
    }
    return sum
}

console.log(sumAllNums(1,2,3,4,5))
console.log(sumAllNums(10,20,13,40,10))
console.log(sumAllNums(15,20,30,25,10,33,40))

/*

Unlimited number of parameters in arrow function

Arrow function does not have the function scoped arguments object. 
To implement a function which takes unlimited number of arguments 
in an arrow function we use spread operator followed by any parameter 
name. Any thing we passed as argument in the function can be accessed 
as array in the arrow function. Let us see an example

*/

const sumAllNumss = (...args)=>{
    let sum = 0
    for(let val of args){
        sum = sum + val
    }
    console.log(sum)
}

sumAllNumss(1,2,3,4,5,6,7)
sumAllNumss(10,20,13,40,10)
sumAllNumss(15,20,30,25,10,33,40)

/*

Anonymous Function

Anonymous function or without name

*/

const anonymousFunction = function(){
console.log('I am an anonymous function and my value is stored in anonymousFun')
}


anonymousFunction()

/*
Expression Function

Expression functions are anonymous functions. After we create a function without a name
and we assign it to a variable. To return a value from the function we should call the variable.

*/

const squareTwo = function(n){
    return n*n
}

console.log(squareTwo(4))


/*

Self Invoking functions

Self invoking functions are anonymous functions which do not need to be 
called to return a value.

*/

// (function(n){
//     console.log(n*n)
// })(3)  //but instead of just printing if we want to return and store the data, we do as shown below

const squareNum = (function(n){
    return n*n
})(5)

console.log(squareNum)

/*

Arrow Function

Arrow function is an alternative to write a function, however 

*/