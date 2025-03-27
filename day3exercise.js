/*
Day 3: Exercises
1. Declare fist name, last name, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
*/

let firstName = 'Ankit'
let lastName = 'Patel'
let country = 'India'
let city = 'Jaipur'
let age = 28
let isMarried = false
let year = 2025

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age) 
console.log(typeof isMarried) 
console.log(typeof year)

//2. Check if type of '10' is equal to 10

console.log(typeof '10' == 10)

console.log(typeof '10' == typeof 10)

//3. Check if parseInt('9.8') is equal to 10

console.log(typeof parseInt('9.8') == typeof 10) 

//4. Boolean value is either true or false.

console.log(true, false)

//5 Write three JavaScript statement which provide truthy value.

console.log(10 > 9)
console.log(10 == 10)
console.log(10 < 11)

//6 Write three JavaScript statement which provide falsy value.

console.log(10 < 9)
console.log(10 != 10)
console.log(10 > 11)
