/*

Day 6 : Loops

Most of the activities we do in life are full of repetitions. 
Imagine if I ask you to print out from 0 to 100 using console.
log(). To implement this simple task it may take you 2 to 5 
minutes, such kind of tedious and repetitive task can be 
carried out using loop

*/

/*

for loop

for loop is used to iterate over a block of code a number of times.
The for loop has three expressions:
1. Initialization: This is the first expression which is executed once.
2. Condition: This is the second expression which is evaluated before each iteration.
3. Increment/decrement: This is the third expression which is executed after each iteration.

The for loop is used when we know the number of iterations.
Example:

for(initialization; condition; increment/decrement){
     //code to be executed
}
*/

for(let i = 0; i<=5; i++){
    console.log(i)
}


for(let i = 5; i>=0; i--){
    console.log(i)
}

for(let i=0; i<=5; i++){
    console.log(`${i} * ${i} = ${i*i}`)
}

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const countriesInCap  = []

for(let i=0; i < countries.length; i++){
    countriesInCap.push(countries[i].toUpperCase())
}

console.log(countriesInCap)


//Adding all the elements in array

const numbers = [1,2,3,4,5]

let sum = 0

for(let i=0; i<numbers.length; i++){
    sum = sum + numbers[i]
}

console.log(sum)

//creating a new array based on existing array

const newArray = []

for(let i=0; i<numbers.length; i++){
  newArray.push(numbers[i]**2)
}

console.log(newArray)

/*

While loop

*/

let i = 0

while (i<=5) {
    console.log(i)
    i++
}

//Sum of numbers from 1 to 10

console.log('Sum of numbers from 1 to 10')

let sums = 0
let sumi = 1
while(sumi <= 10 ){
    sums = sums + sumi
    console.log(sumi)
    sumi++
   
}

console.log(sums)


//revers countdown

let count = 5

while(count>=0){
    console.log(count)
    count--
}


/*

Do while loop

*/





