/*
Conditionals :

Conditional statements are used for make decisions based on 
different conditions. By default , statements in JavaScript 
script executed sequentially from top to bottom. If the processing 
logic require so, the sequential flow of execution can be altered 
in two ways:

Conditional execution: a block of one or more statements will be executed
if a certain expression is true

Repetitive execution: a block of one or more statements will be repetitively 
executed as long as a certain expression is true. In this section, 
we will cover if, else , else if statements. The comparison and 
logical operators we learned in the previous sections will be useful in here.

Conditions can be implementing using the following ways

1. if , if else, if else if else, switch, ternary operator

*/

/*

If

In JavaScript and other programming languages the key word if is to used 
check if a condition is true and to execute the block code. 
To create an if condition, we need if keyword, condition inside a parenthesis 
and block of code inside a curly bracket({}).

//syntax

if(condition){
    //this part of code runs for truthy condition
}

Example:
*/

let num=3

if(num>0){
    console.log(`${num} is a postive number`)
}

let isRaining = true

if(isRaining){
    console.log('Remember to take your rain coat.')
}

/*

If Else : If condition is true the first block will be executed, if not the else condition will be executed.

*/

//Syntax

// if(conditon){
//     //this part of code runs for truthy condition
// }else{
//     //this part of code runs for false condition
// }

let nums = 3

if(nums>0){
    console.log(`${nums} is a positive number`)
}else{
    console.log(`${nums} is a negative number`)
}

let number = -3

if(number>0){
    console.log(`${nums} is a positive number`)
}else{
    console.log(`${nums} is a negative number`)
}

let isRainings = true

if(isRainings){
    console.log('You need a rain coat.')
}else{
    console.log('No need for a rain coat.')
}

let isLighOn = false

if(isLighOn){
    console.log('Yes light is on')
}else{
    console.log('Yes light is off')
}

/*

if Else if Else:
On our daily life, we make decisions on daily basis. We make decisions not 
by checking one or two conditions instead we make decisions based on 
multiple conditions. As similar to our daily life, programming is also 
full of conditions. We use else if when we have multiple conditions.

*/

//syntax

// if(conditon){
//     //code
// }else if(coditon){
//     //code
// }else{
//     //code
// }

let a = 0

if(a>0){
    console.log(`${a} is a postive number`)
}else if(a<0){
    console.log(`${a} is a negative number`)
}else if(a==0){
    console.log(`${a} is zero`)
}else{
    console.log(`${a} is not a number`)
}

let weather = 'sunny'

if(weather==='rainey'){
    console.log('You need a rain coat.')
}else if(weather==='cloudy'){
    console.log('It might be cold, you need a jacket.')
}else if(weather==='sunny'){
    console.log('Go out freely')
}else{
    console.log('No need for rain coat.')
}

/*

Switch:
Switch is an alternative for if else if else. The switch statment starts with a
switch keyword followed by a parenthesis and code block. Inside the code block we 
will have different cases. Case block runs if the value in the switch statement 
parenthesis matches with the case value. The break statement is to terminate 
execution so the code execution does not go down after the condition is satisfied. 
The default block runs if all the cases don't satisfy the condition.

*/

// switch(caseValue){
//     case 1:
//         //code
//         break;
//     case 2:
//         //
//         break;
//     case 3:
//         //
//         break;
//     default:
//         //
// }

let weathers = 'cloudy'

switch(weathers){
    case 'rainy':
        console.log('You need a rain coat')
        break;
    case 'cloudy':
        console.log('It might be cold. You need a jacket')
        break;
    case 'sunny':
        console.log('Go out freely.')
        break;
    default:
        console.log('No need for rain coat.')
}

let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase();

switch(day){
    case 'monday':
        console.log('Today is monday.')
        break;
    case 'tuesday':
        console.log('Today is tuesday.')
        break;
    case 'wednesday':
        console.log('Today is wednesday.')
        break;
    case 'thursday':
        console.log('Today is thursday.')
        break;
    case 'friday':
        console.log('Today is friday.')
        break;
    case 'saturday':
        console.log('Today is saturday.')
        break;
    case 'sunday':
        console.log('Today is sunday.')
        break;
    default:
        console.log('It is not a week day.')
}

//Example to use conditions in the cases

let numbers = prompt('Enter the number');

switch(true){
    case numbers>0:
        console.log('Number is positive');
        break;
    case numbers<0:
        console.log('Number is negative');
        break;
    case numbers===0:
        console.log('Number is zero.')
        break
    default:
        console.log('Entered value is not a number.')
}

/*
Ternary Operators

Another way to write conditionals is using ternary operators. 

*/

let isRainingss = true

isRainingss ? console.log('You need a rain coat'): console.log('No need for a rain coat.')





