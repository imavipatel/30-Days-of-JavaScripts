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

console.log('This is do while loop')

let j = 0
do{
    console.log(j)
    j++
}while(j<=5)


console.log('This is for of loop')
/*

for of loop

We use for of loop for arrays. It is very hand way to iterate through
an array if we are not interested in the index of each element in the array.

for(const element of arr){
   //code goes here
}

*/

const numberss = [1,2,3,4,5]

for(const num of numberss){
    console.log(num)
}

for(const num of numberss){
    console.log(num * num)
}

//adding all the numbers in the array

let sumss = 0

for(const num of numbers){
    sumss = sumss + num
    //sums+= num
}

console.log(sumss)

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

for( const tech of webTechs){
    console.log(tech.toUpperCase())
}

for(const tech of webTechs){
    console.log(tech[0])
}


const countriess = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']

const countriessUppercase = []

for(const country of countriess){
    countriessUppercase.push(country.toUpperCase())
}

console.log(countriessUppercase)

/*

break

Break is used to interrupt a loop

*/

for(let i = 0; i<=5; i++){
    if(i==3){
        break
    }
    console.log(i)
}

/*

continue

We use the keyword continue to skip a certain iterations 

*/

for(let i=0; i<=5; i++){
    if(i==3){
        continue
    }
    console.log(i)
}



