/*

Exercises: Level 1

1. Get user input using prompt(“Enter your age:”). 
If user is 18 or older , give feedback:'You are old enough to drive' 
but if not 18 give another feedback stating to wait for the number 
of years he needs to turn 18.

*/

let age = prompt('Enter your age.')

switch(true){
    case age>=18:
        console.log('You are old enough to drive')
        break;
    case age<18:
        console.log(`You are left with ${18-age} years to drive.`)
        break;
    default:
        console.log('Please enter correct age.')
}

/*
2. Compare the values of myAge and yourAge using if … else. 
Based on the comparison and log the result to console stating 
who is older (me or you). Use prompt(“Enter your age:”) 
to get the age as input.

Enter your age: 30
You are 5 years older than me.
*/


let yourAge = prompt('Enter your age.')
let myAge = 28

if(yourAge===myAge){
    console.log('Your age is equal to mine age')
}else if(yourAge > myAge){
    console.log(`You are ${yourAge-myAge} years older than me.`)
}else if(yourAge< myAge){
    console.log(`You are ${myAge-yourAge} years younger than me.`)
}else{
    console.log('Please enter the correct age.')
}

/*

3. If a is greater than b return 'a is greater than b' else 'a is less than b'.
Try to implement it in to ways

using if else
ternary operator.

*/

let a = 4
let b = 3

if(a>b){
    console.log(`${a} is greater than ${b}`)
}else{
    console.log(`${a} is less than ${b}`)
}

a>b?console.log(`${a} is greater than ${b}`): console.log(`${a} is less than ${b}`)

/*

4. Even numbers are divisible by 2 and the remainder is zero. 
How do you check, if a number is even or not using JavaScript?

*/

let number = prompt('Enter a number to check even or odd.')

if(number/2===0){
    console.log(`${number} is an even number`)
}else{
    console.log(`${number} is an odd number`)
}

/*

Exercises: Level 2

1. Write a code which can give grades to students according to theirs scores:

80-100, A
70-89, B
60-69, C
50-59, D
0-49, F

*/

let scores = prompt('Enter your scores.')

if(scores>=80 && scores<=100){
    console.log('You scored an A.')
}else if(scores>=70 && scores <=89){
    console.log('You scored a B.')
}else if(scores>=60 && scores <=69){
    console.log('You scored a C.')
}else if(scores>=50 && scores <=59){
    console.log('You scored a D.')
}else if(scores>=0 && scores <=49){
    console.log('You scored an F.')
}else{
    console.log('Invalid score. Please enter a number between 0 and 100.')
}

/*

2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer

*/

let month = prompt('Enter the month').toLowerCase();

switch(month){
    case 'september':
    case 'october':
    case 'november':
        console.log('Season is Autumn.')
        break;
    case 'december':
    case 'january':
    case 'february':
        console.log('Season is Winter.')
        break;
    case 'march':
    case 'april':
    case 'may':
        console.log('Season is Spring')
        break;
    case 'june':
    case 'july':
    case 'august':
        console.log('Season is Summer.')
        break;
    default:
        console.log('Please enter correct month name')
}

/*

3. Check if a day is weekend day or a working day. Your script will take day as an input.

*/

let day = prompt('What is the day today?').toLowerCase()

switch(day){
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log(`${day.charAt(0).toUpperCase()+day.slice(1)} is a working day.`)
        break;
    case 'saturday':
    case 'sunday':
        console.log(`${day.charAt(0).toUpperCase()+ day.slice(1)} is a weekend.`)
        break;
    default:
        console.log('Please enter correct name of the day')

}


/*

Exercises: Level 3

1. Write a program which tells the number of days in a month.

*/

let months = prompt('Enter a  month').toLowerCase()

switch(months){
    case 'feburary':
        console.log(`${months.charAt(0).toUpperCase()+months.slice(1)} has 28 days.`)
        break;
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        console.log(`${months.charAt(0).toUpperCase()+months.slice(1)} has 31 days.`)
        break;
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        console.log(`${months.charAt(0).toUpperCase()+months.slice(1)} has 30 days.`)
        break;
    default:
        console.log('Please enter correct month.')
}

/*

2. Write a program which tells the number of days in a month, now consider leap year.

A year is a leap year if it satisfies the following conditions:

The year is divisible by 4.
If the year is divisible by 100, it must also be divisible by 400.
*/

let monthss = prompt('Enter a  month').toLowerCase()
let year = prompt('Enter a year')

const isLeapYear = (year)=>{
    return  (year % 4 ===0 && year % 100 !==0 ) || (year % 400===0)
}

switch(monthss){
    case 'feburary':
        if(isLeapYear(year)){
            console.log(`${monthss.charAt(0).toUpperCase()+monthss.slice(1)} has 29 days.`)
        }else{
            console.log(`${monthss.charAt(0).toUpperCase()+monthss.slice(1)} has 28 days.`)
        }
        break;
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        console.log(`${monthss.charAt(0).toUpperCase()+monthss.slice(1)} has 31 days.`)
        break;
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        console.log(`${monthss.charAt(0).toUpperCase()+monthss.slice(1)} has 30 days.`)
        break;
    default:
        console.log('Please enter correct month.')
}

 

