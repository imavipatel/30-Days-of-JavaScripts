/* Boolean, Operators, Date*/

/*
Booleans

A boolean data type represents one of the two values:true or false. 
Boolean value is either true or false. The use of these data types 
will be clear when you start the comparison operator. 
Any comparisons return a boolean value which is either true or false.

Example: Boolean Values
*/

let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let trueValue = 4>3 //true
let falseValue = 4<3 //false

/*
Truthy Value:

1. All number(positive and negative) are truthy except zero(0)
2. All string are truthy except an empty string('')
3. The boolean true

Falsey Values:

1. 0, 0n, null, undefined, NaN, the boolean false, "",'', ``, empty string


Undefined:
If we declare a variable and if we do not assign a value, the value will be undefined.
In addition to this, if a function is not returning the value it will be undefined.

*/

let firstName;
console.log(firstName) //not defined

// Null

let empty = null
console.log(empty) // null, means no value

/*

Operators

Assignment operators

An equal sign in Javascript is an assignment operator. it uses to assign a variable.

*/

let firstNames = 'Ankit'
let country = 'India'

// Assignment Operators

/*

Operator    Example      Same As       Description

=            x=y           x=y          y is stored in x
+=           x+=y          x=x+y        x+y result is stored in x
-=           x-=y          x=x-y        x-y result is stored in x
*=           x*=y          x=x*y        x*y result is stored in x
/=           x/=y          x=x/y        x/y result is stored in x
%=           x%=y          x=x%y        x%y result is stored in x
**=          x**=y         x=x**y       x**y result is stored in x

Arithmetic Operators

Arithmetic operators are mathematical operators.

1. Addition(+): a+b
2. Subtraction(-): a-b
3. Multiplication(*): a*b
4. Division(/): a/b
4. Modulus(%): a%b
5. Exponential(**): a**b

*/

let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne/numTwo
let reminder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(sum, diff, mult, div, reminder, powerOf)

const PI = 3.14

let radius = 100  //length in meter

const areaOfCicle = PI * radius * radius

console.log(areaOfCicle) 

const gravity = 9.81   // in m/s2

let mass  = 72

//let us caculate weight of an object

const weight = mass * gravity

console.log(weight)

const boilingPoint = 100 //temperature in oC, boiling point of water

const bodyTemp = 37  // body temperature in oC

//Concatenating string with numbers using string interploation

/*

The boiling point of water is 100 oC.
Human body temperature is 37 oC
The gravity of earth is 9.81 m/s2

*/

console.log(`The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC. \nThe gravity of earth is ${gravity} m/s2. `)


/*
Comparsion Operator:

In programming we compare values, we use comparsion operators to compare two values.
We check if a value is greater or less or equal to other value

Operator                Name                        Example
==              Equal in value only                  x==y
===            Equal in value and data type          x===y
!=              Not equal                            x!=y
>               greater than                         x>y
<                less than                           x<y
>=               greater than or equal to            x>=y
<=               less than or equal to               x<=y

Example: Comparsion Operators.

*/

console.log(3>2)
console.log(3>=2)
console.log(3<2)
console.log(2<3)
console.log(2<=3)
console.log(3==2)
console.log(3!=2)
console.log(3=='3')
console.log(3==='3')
console.log(3!= '3')
console.log(3!== '3')
console.log(3!=3)
console.log(3!==3)
console.log(0 == false) 
console.log(0 === false)
console.log(0 == '') 
console.log(0 == '0') 
console.log(0 === '') 
console.log(1 == true) 
console.log(1 === true) 
console.log(1 == '1') 
console.log(1 === '1')
console.log(undefined==null) 
console.log(undefined===null)
console.log(NaN==NaN) 
console.log(NaN===NaN)
console.log(NaN==undefined)
console.log(NaN===undefined)
console.log(NaN==null)
console.log(typeof NaN)

console.log('mango'.length == 'avocado'.length) 
console.log('mango'.length != 'avocado'.length) 
console.log('mango'.length < 'avocado'.length)
console.log('milk'.length == 'meat'.length)
console.log('milk'.length != 'meat'.length)
console.log('tomato'.length == 'potato'.length)
console.log('python'.length > 'jargon'.length)
console.log('python'.length != 'jargon'.length)
console.log('python'.length == 'jargon'.length)

/*
As rule to thumb, if a value is not true with == it will not be equal with ===
Using === is safer than using ==. 
*/

/*

Logical Operators:
The following symbols are the common logical operators: 
&&(ampersand) , ||(pipe) and !(negation). The && operator gets true 
only if the two operands are true. The || operator gets true either 
of the operand is true. The ! operator negates true to false and 
false to true.
*/

// && ampersand operator example

const check = 4 > 3 && 10 > 5  
const check2 = 4 > 3 && 10 < 5
const check3 =  4 < 3 && 10 < 5

// || pipe operator example

const check4 = 4 > 3 || 10 > 5  
const check5 = 4 > 3 || 10 < 5
const check6 =  4 < 3 || 10 < 5

//Negation Examples

let check7 = 4 > 3
let check8 = !(4 > 3)
let isLightOns = true
let isLightOff = !isLightOns
let isMarrieds = !false

console.log(check, check2, check3, check4, check5, check6, check7, check8, isLightOff, isMarrieds)

/*
Increment and Decrement Operators:

Increment Operator: ++

In JavaScript we use the increment operator to increase a value stored 
in a variable. The increment could be pre or post increment. 
Let us see each of them:

1. Pre-increment: ++x
*/
let count = 0
console.log(++count) 
console.log(count) 

/*
2. Post-increment: x++
*/
let counts = 0
console.log(counts++)
console.log(counts)

/*
Decrement Operator: --
In JavaScript we use the decrement operator to decrease a 
value stored in a variable. The decrement could be pre or post decrement. 
Let us see each of them:

1. Pre-decrement: --x
*/
let counts1 = 0
console.log(--counts1)
console.log(counts1)

/*
2. Post-decrement: x--
*/
let counts2 = 0
console.log(counts2--)
console.log(counts2)

/*
Ternary Operator: Ternary operator is a conditional operator.
It is the only operator that takes three operands.
The operator can have one of two values based on a condition.
The syntax is:
condition ? value if true : value if false

*/
let isRaining1 = true
isRaining1
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

let isRaining2 = false
isRaining2
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')


let number = 5
let isEven = number % 2 === 0 ? `${number} is even` : `${number} is odd`
console.log(isEven)

number>0 ? console.log(`${number} is a positive number`) : console.log(`${number} is a negative number`)

let number1 = -5

number1>0 ? console.log(`${number1} is a positive number`) : console.log(`${number1} is a negative number`)

/*

Operator Precedence:  operator precedence is a rule that
defines the order in which the operators should be executed.
Operators with higher precedence are executed first.

*/

console.log(4 + 5 * 3) 
console.log((4 + 5) * 3) 
console.log(4 * 3 ** 2)
console.log(( c = d = 5)) 

console.log(3 + 10 * 2); // 23
console.log(3 + (10 * 2)); // 23, because parentheses here are superfluous
console.log((3 + 10) * 2); // 26, because the parentheses change the order

/*

Operator Associativity: Operator associativity is the rule that
defines the order in which the operators of the same precedence executed.

*/
const a = 4 ** 3 ** 2; // Same as 4 ** (3 ** 2); evaluates to 262144
const b = 4 / 3 / 2; // Same as (4 / 3) / 2; evaluates to 0.6666...


console.log(1 + 2 ** 3 * 4 / 5)

/*

Exponentiation (**): Highest precedence.
Multiplication (*) and Division (/): Same precedence, evaluated left-to-right (associativity is left-to-right).
Addition (+): Lower precedence than *, /, and **.

Operator Precedence:

Exponentiation (**) is evaluated first.
Multiplication (*) and Division (/) are evaluated next, left-to-right.
Addition (+) is evaluated last.
Associativity:

Exponentiation (**) is right-to-left associative.
Multiplication (*), Division (/), and Addition (+) are left-to-right associative.
*/

/*
Window Methods:
The window object represents an open window in a browser.
If a document contain frames, the browser creates a window object for each frame.
The window object is supported by all browsers. It represents the browser's window.
All global JavaScript objects, functions, and variables automatically become members of the window object.

Window alert() Method:
The alert() method displays an alert box with a specified message and an OK button.

alert(message)
*/  

// alert('Welcome to 30DaysOfJavaScript')

/*
Window prompt() Method: The prompt() method displays a dialog box that prompts the visitor for input.
A prompt box is often used if you want the user to input a value before entering a page.

The prompt( method takes two parameters:)
1. label: A string that you want to display as a message to the user.
2. default: A string that you want to display in the text box. It is an optional parameter.
The prompt() method returns the input value if the user clicks "OK". If the user clicks "cancel" the method returns null.
*/

// prompt('required text', 'optional text')

// let numbers = prompt('Enter number', 'number goes here')
// console.log(numbers)

/*
Window confirm() Method: The confirm() method displays a dialog box with a 
specified message, along with an OK and a Cancel button.
A confirm box is often used if you want the user to verify or accept something.
The confirm() method returns true if the user clicks "OK", and false otherwise.
*/

// const agree = confirm('Are you sure you want to delete?')
// console.log(agree) //true if OK is clicked and false if cancel is clicked


/*
Date Object: The Date object is a data type built into the JavaScript language.
Date objects are created with the new Date() constructor.

The object we create using Date object provides methods that allow us to work with dates and times.
Date objects are static. The computer time is ticking, but date objects are not.
Date objects are based on a time value that is the number of milliseconds since 1 January 1970 UTC.
The methods we use to get date and time information from a date object 
values are started with a word get because it provide the information. 
getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes, 
getSeconds(), getMilliseconds(), getTime(), getDay()


There are four ways of instantiating a date:   

*/

// 1. Current date and time
const now = new Date();
console.log(now);

// 2. From milliseconds since Unix Epoch
const epoch = new Date(0);
console.log(epoch);

// 3. From a date string
const dateFromString = new Date('2025-03-27');
console.log(dateFromString);

// 4. From specific date and time components
const specificDate = new Date(2025, 2, 27, 10, 30, 0); // March 27, 2025
console.log(specificDate);

/*
Creating a time object with the new Date() constructor.
*/
const nows = new Date();
console.log(nows);

/*
We have created a time object and we can access any date time 
information from the object using the get methods we have mentioned
on the table.
*/

//getting full year

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());

/*
Getting time

The getTime() method returns the number of milliseconds since January 1, 1970:
It is also known as Unix time or Epoch time. 
We can get the unix time in two ways:
*/

//Using getTime() method

console.log(now.getTime());
// 1743079796337, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

//Using Date.now() method

console.log(Date.now());
// 1743079796337, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

console.log(new Date().getTime() == Date.now());

const allSeconds = Date.now() //
console.log(allSeconds) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

const timeInSeconds = new Date().getTime()
console.log(timeInSeconds) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41
console.log(allSeconds == timeInSeconds) // true

/*
Let us format these values to human readable date time.
*/

const date = new Date()
const year = date.getFullYear()
const month = date.getMonth() + 1
const day = date.getDate()
const hours = date.getHours()
const minutes = date.getMinutes()
const seconds = date.getSeconds()

console.log(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`)
console.log(`${day}-${month}-${year} ${hours}:${minutes}:${seconds}`)
console.log(`${day}/${month}/${year} ${hours}:${minutes}:${seconds}`)
console.log(`${day}.${month}.${year} ${hours}:${minutes}:${seconds}`)
console.log(`${day} ${month} ${year} ${hours}:${minutes}:${seconds}`)
