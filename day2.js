/*  Data Types

Data types= describes the characterstics of data
data type are of two different types
primitive and non primitive data types

primitive data type=>
Number, null, boolean, string, undefined,symbol

primitive data types are immutable(non-modifiable)



non primitive data type =>
Objects, Array

*/

//primitive data types

let word = 'Javascript'

word[0] = 'Y'

console.log(word);

// let numOne = 3
let numOne = '3'
let numTwo = 3

console.log(numOne == numTwo) //true
console.log(numOne === numTwo) //false

let js = 'Javascript'
let py = 'python'

console.log(js==py) // false

let lightOn = true
let lightOff = false

console.log(lightOn==lightOff) //false

//Non primitive data types

// non primitive data types are modifiable or mutable.

//Array

let nums = [1,2,3]

console.log(nums)

nums[0] = 10;

console.log(nums)

//non primitive data type can not be compare my values.

let num = [1,2,3]
let numbers = [1,2,3]

console.log(num==numbers)
console.log(num===numbers)

//rule of thumb = we do not compare non primitive data types
//do not compare array objects,functions
//non primitive data types are reffered to as reference types because they comapared by refrence instead of value.
// two objects are only strictly equal if they refer the same refrence same underlying object

let numss  = [1,2,3]
let number = numss

console.log(numss===number)

let userOne  = {
    name: 'Ankit Patel',
    role: 'Software engineer',
    country: 'India'
}

let userTwo = userOne

console.log(userOne==userTwo)

//Numbers => Numbers are integer and decimal values which can do all the arithmetic operations

//Declaring Number Data Types

let age = 35
const gravity = 9.81 //use const for constant
let mass = 72
const PI = 3.14

const boilingPoint = 100
const bodyTemp = 37

console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)

//Math Object

//In javascript the math object provides a lots of methods to work with numbers

const PIinMath = Math.PI

console.log(PIinMath)

//Rounding to the closest number
//if above .5 up if less 0.5 down rounding

console.log(Math.round(3.14))
console.log(Math.round(3.54))

console.log(Math.floor(1.94))
console.log(Math.floor(1.44))
console.log(Math.ceil(4.97))
console.log(Math.ceil(3.01))

console.log(Math.min(-5,3,20,4,5,10))
console.log(Math.max(-5,3,20,4,5,10))

const randNum = Math.random() //create random number between 0 to 0.999999

console.log(randNum)

//let us create randum number between 0 to 10

const numRandom = Math.floor(Math.random()* 11)

console.log('random number between 0 to 10 =>',numRandom)

console.log(Math.abs(-18)) //absolute value

console.log(Math.sqrt(15))


console.log(3.8729 * 3.8729)

console.log(Math.pow(2,0))

console.log(Math.pow(2,3))

console.log(Math.E) // eulers number //base of natual algorithm. 2.718

//Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2)) //0.6931471805599453

console.log(Math.log(10)) //2.302585092994046

//Return the natural logarithm of 2 and 10 respictively

console.log(Math.LN2)
console.log(Math.LN10)

//Trigonometry

console.log(Math.sin(0))
console.log(Math.sin(60))

console.log(Math.cos(0))
console.log(Math.cos(60))


//Random number generator

//random method generate number btw 0 and 0.999999999

let randomNum = Math.random()

let numBtwZeroAndTen = randomNum * 10

let randomNumberToFloor = Math.floor(numBtwZeroAndTen)

console.log('this random first',randomNumberToFloor)

//let us create a random number between 0 to 10
console.log('this random second', Math.floor(Math.random() * 11))


//Strings
//String are texts which are under single, double, back-tick quote

let space = ' '
let firstName = 'Ankit'
let lastName = 'Patel'
let country = 'India'
let city = 'Jaipur'
let language = 'Javascript'
let job = 'teacher'
let quote = "The saying, 'Seeing is believing' is not correct in 2020"
let quoteWithBackTick = `The saying, 'Seeing is believing' is not correct in 2020`

//string concatenation

//Connecting two or more strings together is called concatenation

let fullName = firstName + space + lastName

console.log(fullName)

let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country;

console.log(personInfoOne)

//Long literal Strings

//If the string length does not fit in one line. We can use the backlash character (\) at the end of each line to indicate that the string will continue on the next line.

const paragraph = "My name is Ankit Patel. I live in India, Jaipur \
i am a software developer and i love developing application. i develop mobile application\
and currently learning 30 days of javascript \
Learning 30 days of javascript is fun."

console.log(paragraph)

//Escape Sequence in Strings

//In Javascript and other programming languages \ followed by some characters is an escape sequence.

/*
/n : new line
/t : Tab, means 8 spaces
\\: Back slash
\': Single quote (')
\": Double quote (")
*/

console.log('I hope everyone is enjoying the 30 days of javscript challenge.\nDo you ? ')
console.log('Days\tTopics\tExercises')
console.log('Days    Topics  Exercises')
console.log('Day1\t3\t5')
console.log('Day1    3       5')
console.log('Day2\t3\t5')
console.log('Day3\t3\t5')
console.log('Day4\t3\t5')
console.log('Day5\t3\t5')

console.log('This is a backslash symbol (\\)')
console.log('In every programming language it starts with \"Hello World!\"')
console.log('In every programming language it starts with \'Hello World!\'')
console.log('The saying \'Seeing is believing\' isn\'t correct in 2020' )

// Template Literals (Template Strings)

//To create a template strings, we use two back-ticks. 
//We can inject data use ${data}

/*
`String literal text`
`string literal text ${expression}`
*/

//Example:1

console.log(`The sum of 2 and 3 is 5`)

let a = 2
let b = 3

console.log(`The sum of ${a} and ${b} is ${a+b}`)

//Example:2

let firstNames = 'Ankit'
let lastNames = 'Patel'
let countrys = 'India'
let citys = 'Jaipur'
let languages = 'Javascript'
let jobs = 'Software engineer'
let ages = 26
let fullNames = firstNames + ' '+ lastNames

let personInfoTwo = `I am ${fullNames}. I am ${age}. I live in ${country}` //ES6 - String interpolation method.

let personInfoThree = `I am ${fullNames}. I live in ${citys}, ${country}. I am a ${jobs}.`

console.log(personInfoTwo);
console.log(personInfoThree);


//Using string interpolation we can add expressions

let aa = 2
let bb = 3

console.log(`${a} is greater than ${b} : ${a>b}`)

//String Methods

/* 
Everything in javascript is an object.

1. length: The string method returns the number of characters in a string included empty space.

*/
// Example: 

//Length

let jsa  = 'Javascript'
console.log(jsa.length) //10

let firstNamess = 'Asabeneh'

console.log(firstNamess.length) //8

//Accessing characters in a string:
//We can access each character in a string using its index.

let string = 'JavsScript'

let firstLetter = string[0]

console.log(firstLetter)

let secondLetter = string[1]

let thirdLetter = string[2]

console.log(thirdLetter)
// console.log(lastLetter)

lastLetter = string[string.length-1]

console.log(lastLetter)

//toUpperCase(): this method changes the string to uppercase letters

let strings = 'Javascript'

console.log(strings.toUpperCase())

//toLowerCase(): this method changes the string to lowercase

console.log(strings.toLowerCase())

//substr(): it takes two arguments, the starting index and number of character to slice.

console.log(strings.substr(4,6))
 
//substring() : It takes two arguments the starting index and the stopping index but it doesnt include the character at the stopping index.

console.log(strings.substring(4,6))

//split() : The split method splits a string at a specified place.

let JsString = '30 days Of Javascript'

console.log(JsString.split())
console.log(JsString.split(' '))

let JsString1 = 'Ankit'

console.log(JsString1.split(''))

const countries = 'Finland, Sweden, Norway, Denmark, and IceLand'

console.log(countries.split(','))
console.log(countries.split(', '))


//trim() : Removes trailing space in the beginning or the end of a string.
 let stringTrim = '    30 days of string   '

 console.log(stringTrim.trim(), stringTrim.trimStart(), stringTrim.trimEnd(), stringTrim.trim(' '))

//includes() : It takes a substring argument and it checks if substring argument exists in the string. includes() return a boolean. If substring exist then it returns true or else it return flase.


let stringIncludes = '30 Days of JavaScript'

console.log(stringIncludes.includes('Days')) 
console.log(stringIncludes.includes('days')) 
console.log(stringIncludes.includes('Script'))
console.log(stringIncludes.includes('Java'))

//replace() : takes as a parameter the old substring and a new substring.

let stringReplace = '30 Days of JavaScript'

console.log(stringReplace.replace('JavaScript', 'Python'))

let countryReplace = 'Finland'

console.log(countryReplace.replaceAll('Fin', 'Nomad'))

//charAt() : Takes index and it return the value at the index


let stringcharAt = '30 days of Javascript'

console.log(stringcharAt.charAt(0))
console.log(stringcharAt.charAt(stringcharAt.length-1))


//charCodeAt() : Takes index and it returns char code (ASCII number) of the value at that index

let stringCharCodeAt = '30 days of Javascript'

console.log(stringCharCodeAt.charCodeAt(3)) 

console.log(stringCharCodeAt.charCodeAt(stringCharCodeAt.length-1))

//indexOf() : Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it return -1


let stringIndexOf = '30 days of JavaScript'

console.log(stringIndexOf.indexOf('D'))
console.log(stringIndexOf.indexOf('Days'))
console.log(stringIndexOf.indexOf('days'))
console.log(stringIndexOf.indexOf('a'))
console.log(stringIndexOf.indexOf('JavaScript'))
console.log(stringIndexOf.indexOf('Script'))


// lastIndexOf() : Takes a substring and if the substring exists in a string it return the last position of the substring if it does not exist it return -1

let stringLastIndexOf = '30 days of Javascript 30 days of Javascript'

console.log(stringLastIndexOf.lastIndexOf('30'))
console.log(stringLastIndexOf.lastIndexOf('days'))
console.log(stringLastIndexOf.lastIndexOf('Javascript'))
console.log(stringLastIndexOf.lastIndexOf('JavaScript'))


//concat(): it takes many substring and joins them

let stringConcat = '30'

console.log(stringConcat.concat('Days', 'of', 'Javascript'))

console.log(stringConcat)

//startWith() : it takes a substring as an argument and it checks if the string starts with that specified substring. it returns a boolean (true of false)

let stringStartsWith = 'Love is the best feeling in the world.'

console.log(stringStartsWith.startsWith('Love'))
console.log(stringStartsWith.startsWith('L'))
console.log(stringStartsWith.startsWith('ove'))
console.log(stringStartsWith.startsWith('best'))
console.log(stringStartsWith.startsWith('world'))

//endsWith() : it takes a substring as an argument and it checks if the string ends with that specified substring. it returns a boolean (true of false)

let stringEndsWith = 'Love is the best feeling in the world.'

console.log(stringEndsWith.endsWith('Love'))
console.log(stringEndsWith.endsWith('L'))
console.log(stringEndsWith.endsWith('ove'))
console.log(stringEndsWith.endsWith('best'))
console.log(stringEndsWith.endsWith('world'))
console.log(stringEndsWith.endsWith('world.'))

// search() : it takes a substring as an argument and it returns the index of first match the searcgh value can be string or a regular expression pattern. if not found then return -1.

let stringSearch = 'I love javascript. If you do not love javascript what else can you love.'

console.log(stringSearch.search('Love'))
console.log(stringSearch.search('love'))
console.log(stringSearch.search('If'))

console.log(stringSearch.search(/javascript/gi))

//match() : It takes a substring or regular expression pattern as an argument and it return an array if there is match if not it returns null. It starts with / sign and ends with / sign.

let stringMatchs = 'love'

let patternOne  = /love/ //without any flag

let patternTwo = /love/gi // g-means to search in the whole text, i - case insensitive

//Match syntax

//string.match(substring)

let stringMatch = 'I love javascript. If you do not love javascript what else can you love.'

console.log(stringMatch.match(/love/gi))
console.log(stringMatch.match(/lovE/g))
console.log(stringMatch.match(/lovE/gi))

//let us extract numbers from text using a regular expression.

let txt = 'In 2019, I ran 30 days of Python. Now, in 2025 I am super exited to start this challenge.'

let regEx = /\d+/

// d with escape character means d not a normal d instead acts a digit.
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere

console.log(txt.match(regEx))
console.log(txt.match(/\d+/g))

// repeat() : it takes a number as argument and it returns the repeated version of the string.

let stringRepeat = 'Love'

console.log(stringRepeat.repeat(10))


//Checking data types and casting

// To check data types of a certain variable we use typeof operator

let firstNamesss = 'Ankit'
let lastNamesss = 'Patel'
let countryss = 'India'
let cityss = 'Jaipur'
let languagess = 'Javascript'
let agess = 26
let jobss
let isMarried = true

console.log(typeof firstNamesss)
console.log(typeof lastNamesss)
console.log(typeof countryss)
console.log(typeof cityss)
console.log(typeof languagess)
console.log(typeof agess)
console.log(typeof jobss)
console.log(typeof isMarried)
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof NaN)
console.log(typeof Infinity)
console.log(typeof Symbol)

//Changing data types (Type casting)

//Type casting is when you change data from one type to another.
//There are two types of casting
//Implicit casting
//Explicit casting
// Implicit casting is done by javascript automatically
// Explicit casting is done by developers
//converting one data type to another data type we use parseInt(), parseFloat(), Number(), String(), Boolean() +sign, str()
//when wr do arithmetic operation on string number it should we converted to number first. if not it returns an error

//String to Int

//We can convert string to integer using parseInt() function. But we can also use Number() function to convert string to integer.
// We can use + sign to convert string to number.

let numsss ='10'
let numInt = parseInt(numsss)
let numNumber = Number(numsss)
let numSign = +numsss
console.log(numsss)
console.log(numInt)
console.log(numNumber)
console.log(numSign)

//String to Float

//We can convert string float number to a float number. Any float number inside a quote is a string float number. 
// An example of a string float number: '9.81', '3.14', '1.44', etc. We can convert string float to number using the following methods:

//parseFloat()
//Number()
// Plus sign(+)

let floatNumber = '9.81'
let floatNumberParse = parseFloat(floatNumber)
let floatNumberNumber = Number(floatNumber)
let floatNumberSign = +floatNumber

console.log(floatNumber)
console.log(floatNumberParse)
console.log(floatNumberNumber)
console.log(floatNumberSign)

//Float to Int
// We can convert float to integer using parseInt() function. But we can also use Math.floor(), Math.ceil(), Math.round() functions to convert float to integer.

let floatNum = 9.81
let floatNumParse = parseInt(floatNum) //round down
let floatNumFloor = Math.floor(floatNum) //round down
let floatNumCeil = Math.ceil(floatNum) //round up
let floatNumRound = Math.round(floatNum)   //round to the nearest integer

console.log(floatNum)
console.log(floatNumParse)
console.log(floatNumFloor)
console.log(floatNumCeil)
console.log(floatNumRound)
