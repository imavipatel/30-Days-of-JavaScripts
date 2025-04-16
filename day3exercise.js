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

//7. Figure out the result of the following comparison expression first without using console.log()

console.log('compersion expression')
//Q. 8 to 18
console.log(4 > 3) 
console.log(4 >= 3) 
console.log(4 < 3)  
console.log(4 <= 3) 
console.log(4 == 4) 
console.log(4 === 4) 
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
console.log(4 !== '4')

//19. Find the length of the text 'python' and 'dragon' and make a falsy comparison statement.

console.log('python'.length !== 'dragon'.length)

//20. Figure out the result of the following expressions first without using console.log()

console.log('And operator and Or operator')

//Q. 21 to 30

console.log(4>3 && 10<12)
console.log(4>3 && 10>12)
console.log(4>3 || 10<12)
console.log(4>3 || 10>12)
console.log(!(4>3))
console.log(!(4<3))
console.log(!(false))
console.log(!(4>3 && 10<12))
console.log(!(4>3 && 10>12))
console.log(!(4 === '4'))

//31 There is no 'on' in both dragon and python
console.log('dragon'.includes('on') && 'python'.includes('on'))
//    There is 'on' in both dragon and python
console.log('dragon'.includes('on') || 'python'.includes('on'))

//32. Use the Date object to do the following activities

//33. What is the year today?

let date = new Date()
console.log(date.getFullYear())

//34. What is the month today as a number?
console.log(date.getMonth() + 1) // January is 0, December is 11

//35. What is the date today?
console.log(date.getDate())

//36. What is the day today as a number?
console.log(date.getDay()) // 0 is Sunday, 1 is Monday, ..., 6 is Saturday

//37. What is the hours now?
console.log(date.getHours())

//38. What is the minutes now?
console.log(date.getMinutes())
console.log(date.getSeconds())
console.log(date.getTime())

//39. Find out the numbers of seconds elapsed from January 1, 1970 to now.
let secondsElapsed = Math.floor(date.getTime() / 1000)
console.log(secondsElapsed)

//Exercise Level 2

//1. Write a script that prompts the user to enter base and height of a triangle and calculate the area. (area = 0.5 * base * height)
let base = prompt("Enter the base of the triangle:")
let height = prompt("Enter the height of the triangle:")
let area = 0.5 * base * height
console.log(`The area of the triangle is: ${area}`)

//2. Write a script that prompts the user to enter side a, side b, and side c of a triangle and calculate the perimeter of the triangle (perimeter = a + b + c)
let sideA = prompt("Enter side a of the triangle:")
let sideB = prompt("Enter side b of the triangle:")
let sideC = prompt("Enter side c of the triangle:")
let perimeter = parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC)
console.log(`The perimeter of the triangle is: ${perimeter}`)

//3. Get length and width of a rectangle using prompt and calculate its area and perimeter.
let length = prompt("Enter the length of the rectangle:")
let width = prompt("Enter the width of the rectangle:")
let rectangleArea = length * width
let rectanglePerimeter = 2 * (parseFloat(length) + parseFloat(width))
console.log(`The area of the rectangle is: ${rectangleArea}`)
console.log(`The perimeter of the rectangle is: ${rectanglePerimeter}`)

//4. Get radius using prompt and calculate area and circumference of a circle
let radius = prompt("Enter the radius of the circle:")
let circleArea = Math.PI * Math.pow(radius, 2)
let circleCircumference = 2 * Math.PI * radius
console.log(`The area of the circle is: ${circleArea}`)
console.log(`The circumference of the circle is: ${circleCircumference}`)

//5. Calculate the slope, x-intercept and y-intercept of y = 2x -2

//The slope of a linear equation in the form y = mx + b is the coefficient of x, which is m.

//The x-intercept is the value of x when y = 0, and the y-intercept is the value of y when x = 0. 
//For the equation y = 2x - 2:

//X-intercept: Set y = 0 and solve for x

// 0 = 2x - 2
// 2 = 2x
// x = 1


//Y-intercept: Set x = 0 and solve for y

// y = 2(0) - 2
// y = -2


//Slope: The coefficient of x is 2



let slope = 2
let xIntercept = -2 / slope
let yIntercept = -2
console.log(`Slope: ${slope}`)
console.log(`X-Intercept: ${xIntercept}`)
console.log(`Y-Intercept: ${yIntercept}`)

//5 Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2,2) and point(6,10)

let x1 = 2
let y1 = 2
let x2 = 6
let y2 = 10
let slopeBetweenPoints = (y2 - y1) / (x2 - x1)
console.log(`Slope between points (2,2) and (6,10): ${slopeBetweenPoints}`)

//6. Compare the slopes of above two questions 
// y = mx + b
let slope1 = 2
let slope2 = 2
if (slope1 === slope2) {
    console.log("The slopes are equal.")
}
else {
    console.log("The slopes are not equal.")
}

//7 Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

/*

let y=0
0=x^2 + 6x + 9
0 = (x+3)(x+3)
0 = (x + 3)² // take the square root of both side
x+3 = 0
x = -3
*/

y = -3*-3 + 6*-3 + 9
y=0
console.log(`The value of y when x = -3 is: ${y}`)

//8 Write a script that prompt a user to enter hours and rate per hours.
//calculate pay of the person.

let hours = prompt('Enter the hours')
let pricePerHours = prompt('What is the price per hours?')
let pay = hours * pricePerHours
console.log(pay)

//9 If the length of your name is greater than 7 say, your name is long else say your name is short.

let names = 'Ankit' 

if(names.length>7){
    console.log('Your name is long')
}else{
    console.log('your name is short')
}

//10 Compare your first name length and your family name length and you should get this output.

//Your first name, Asabeneh is longer than your family name, Yetayeh

let firstNames = 'Ankit'
let familyNames = 'Patel'

if(firstNames.length> familyNames.length){
    console.log(`Your first name, ${firstNames} is longer than your family name, ${familyNames}`)
}else{
    console.log(`Your first name, ${firstNames} is shorter than your family name, ${familyNames}`)  
}

//11. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250
let yourAge = 25

//12. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

let bornYear = prompt('Enter the years of date of birth')

const todaysDate = new Date();

let yearsOld = todaysDate.getFullYear()-bornYear

if(yearsOld>18){
    console.log(`You are ${yearsOld}. You are old enough to drive`)
}else{
    console.log(`You are ${yearsOld}. You will be allowed to drive after ${18-yearsOld} years.`)
}


//13 Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

let yearToLive = prompt('Enter the number of years you live:')

let secondsInAYear = 365*24*60*60

const numberOfSecondsToLive = yearToLive * secondsInAYear

console.log(`You lived ${numberOfSecondsToLive} seconds.`)

//14 Create a human readable time format using the Date time object

let currentYear = todaysDate.getFullYear()
let currentMonth = todaysDate.getMonth()+1
let currentDate = todaysDate.getDate();
let currentHour = todaysDate.getHours();
let currentMinute = todaysDate.getMinutes()

console.log(`${currentYear}-${currentMonth}-${currentDate} ${currentHour}:${currentMinute}`)
console.log(`${currentDate}-${currentMonth}-${currentYear} ${currentHour}:${currentMinute}`)
console.log(`${currentDate}/${currentMonth}/${currentYear} ${currentHour}:${currentMinute}`)

/*
Exercise : Level 3

1. Create a human readable time format using the Date time object. The hour and the minute
should be all the time two digits (7 hours should be 07 and 5 minutes should be 05)

*/

const dates = new  Date()
const getYears = dates.getFullYear()
const getMonth = (dates.getMonth()+1).toString().padStart(2,'0')
const getDate = (dates.getDate()).toString().padStart(2,'0')
const getHours = dates.getHours().toString().padStart(2,'0')
const getMinute = dates.getMinutes().toString().padStart(2,'0')

console.log(`${getYears}-${getMonth}-${getDate} ${getHours}:${getMinute}`)



