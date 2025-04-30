/*
Exercises : Day 6

Exercises: Level 1
*/

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// Q1. Iterate 0 to 10 using for loop, do the same using while and do while loop

console.log('This is for loop');

for(let i=0; i<=10; i++){
    console.log(i)
}

console.log('This is while loop');

let j=0

while(j<=10){
    console.log(j)
    j++
}

console.log('This is do while loop');

let k = 0
do {
    console.log(k);
    k++
}while(k<=10)


//Q2. Iterate 10 to 0 using for loop, do the same using while and do while loop

console.log('This is for loop decrement');

for (let i = 10; i>=0; i--){
    console.log(i)
}

console.log('This is while loop decrement');

let a = 10 

while(a>=0){
    console.log(a)
    a--
}

console.log('This is do while loop decrement');

let b = 10 


do{
    console.log(b)
    b-- 
}while(b>=0)

//Q3. Iterate 0 to n using for loop

console.log('Iterate using for loop');

let n = 20

for(let i=0; i<=n ; i++){
    console.log(i)
}

//Q4. Write a loop that makes the following pattern using console.log():
/*
    #
    ##
    ###
    ####
    #####
    ######
    ####### 
    
*/

console.log('Printing a pattern')

//Method 1

let pattern = "#";
for (let i = 0; i > 7; i++)
{
    console.log(pattern);
    pattern += "#";

}

//Method 2

for(let i=0; i<=7; i++){
    let str = ''
    for(let j=i; j>=0; j--){
        str = str+'#'
    }
console.log(str)
}

//Method 3

for(let i=0; i<=7; i++){
    let str = ''
    for(let j=0; j<=i; j++){
        str = str+'#'
    }
console.log(str)
}

/*

Q5. Use loop to print the following pattern:

0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100

*/

for(let i=0; i<=10; i++){
    console.log(i + ' x ' + i + ' = ',i*i)
}

/*

Q6. Using loop print the following pattern

 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000

 */


for(let i = 0; i<=10; i++){
    console.log(i+' '+ i*i+ ' '+ i*i*i)
}


//Q7. Use for loop to iterate from 0 to 100 and print only even numbers

for(let i=0; i<=100; i++){
    if(i%2===0){
        console.log(i)
    }
    
}


//Q8. Use for loop to iterate from 0 to 100 and print only odd numbers

for(let i=0; i<=100; i++){
    if(i%2 !== 0){
        console.log(i)
    }
}

//Q9. Use for loop to iterate from 0 to 100 and print only prime numbers

//Method 1=>

for(let i=2; i<=100; i++){
    let isPrime = true
    for(let j=2; j<i; j++){
        if(i%j===0){
            isPrime = false
            break;
        }
    }
    if(isPrime){
        console.log
    }
}

//Method 2

for(let i=2; i<=100; i++){
    let isPrime = true
    for(let j=2; j<=Math.sqrt(i); j++){
        if(i%j===0){
            isPrime = false
            break;
        }
    }
    if(isPrime){
        console.log
    }
}


//Q10 Use for loop to iterate from 0 to 100 and print the sum of all numbers.

let sum=0

for(let i=0; i<=100; i++){
    sum+=i
}
console.log(sum)

//Q11 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds

let evenSum = 0
let oddSum = 0

for(let i=0; i<=100; i++){
    if(i%2===0){
        evenSum+=i
    }else{
        oddSum+=i
    }
    
}
console.log(`The sum of all evens from 0 to 100 is ${evenSum}. And the sum of all odds from 0 to 100 is ${oddSum}.`)

//Q12 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds

let evenSums = 0
let oddSums = 0
let arrayOfEvenOddSum = []

for(let i=0; i<=100; i++){
    if(i%2===0){
        evenSums+=i
    }else{
        oddSums+=i
    }
}
console.log(`The sum of all evens from 0 to 100 is ${evenSums}. And the sum of all odds from 0 to 100 is ${oddSums}.`)

arrayOfEvenOddSum.push(evenSums, oddSums)

console.log(arrayOfEvenOddSum)


//Q13 Develop a small script which generate array of 5 random numbers

// const randomArrayNumber = Array(5).fill(Math.floor(Math.random()*100))
const randomArrayNumber = []

for(let i=0; i<=5; i++){
    randomArrayNumber.push(Math.floor(Math.random()*100))
}

console.log(randomArrayNumber)
   
//Q14 Develop a small script which generate array of 5 random numbers and the numbers must be unique

const randomArrayUniqueNumber = []

for(let i=0; i<=5; i++){
   const randomNumbers =  Math.floor(Math.random()*100)
    if(!randomArrayUniqueNumber.includes(randomNumbers)){
        randomArrayUniqueNumber.push(randomNumbers)
    }
    
}
console.log(randomArrayUniqueNumber)

//Q15 Develop a small script which generate a six characters random id:

let randomSixCharacters =''

const string = 'abcdefghijklmnopqrstuvwxyz123456789'

//Method 1

const testd = ()=>{
let code= ''
for(let i=0; i<=string.length-1; i++){ 
    if(code.length<=5){
        code=code+Math.floor(Math.random()*10)+string[Math.floor(Math.random()*10)]       
    }
}
return code;
}
console.log(testd())

//Method 2

for(let i=0; i<=5; i++){
    const randomIndex = Math.floor(Math.random()* string.length)
    randomSixCharacters+= string.charAt(randomIndex)

}

console.log(randomSixCharacters)


/*
Exercise: Level 2

Q1. Develop a small script which generate any number of characters random id:
*/



function generateRandomId (length){
    const characters = 'abcdefghijklmnopqrstuvwxyz123456789'
    let randomId = ''
    for(let i=0; i<=length; i++){
        const randomIndex = Math.floor(Math.random()* characters.length)

        randomId+= characters.charAt(randomIndex)
    }
    console.log(randomId)

}
console.log('This is n number of random id');
generateRandomId(15);


//Q2. Write a script which generates a random hexadecimal number.


function generateRandomHexadecimal(length){
    const hexCharacters = '0123456789ABCDEF'
    let hexNumber = '#'
    for(let i=0; i<=length; i++){
        const randomIndex = Math.floor(Math.random() * hexCharacters.length)
        hexNumber+= hexCharacters.charAt(randomIndex)
    }
    return hexNumber
}

const randomHex = generateRandomHexadecimal(6)

console.log(randomHex)

// Q3. Write a script which generates a random rgb color number.

function generateRandomRgbColor(){
    const r = Math.floor(Math.random()*256)
    const g = Math.floor(Math.random()*256)
    const b = Math.floor(Math.random()*256)

    return `rgb(${r},${g},${b})`
}

const randomRgbColor = generateRandomRgbColor()

console.log(randomRgbColor)

//Q4. Using the above countries array, create the following new array.

// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

//Method 1

const upperCaseCountry  = countries.map((item)=>{
    return item.toUpperCase()
})

console.log(upperCaseCountry)

//Method 2

let forLoopUpperCaseCountry = []

for(let i=0; i<= countries.length-1; i++){
    forLoopUpperCaseCountry.push(countries[i].toUpperCase())
}
console.log(forLoopUpperCaseCountry)

//Q5. Using the above countries array, create an array for countries length'.

//[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

let countriesLength = []

for(let i=0; i<= countries.length-1; i++){
    countriesLength.push(countries[i].length)
}

console.log(countriesLength)

/*
Q6. Use the countries array to create the following array of arrays:

  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]

*/

let countriesArray = []

for(let i=0; i<= countries.length-1; i++){

    countriesArray.push([countries[i], countries[i].slice(0,3).toUpperCase(), countries[i].length ])
}

console.log(countriesArray)


/*

Q7. In above countries array, check if there is a country or countries 
containing the word 'land'. If there are countries containing 'land', 
print it as array. If there is no country containing the word 'land', print 'All 
these countries are without land'.

['Finland','Ireland', 'Iceland']

*/

let countriesWithLand = []
let countriesWithoutLand = []

for(let i=0; i<= countries.length-1; i++){
    if(countries[i].toLowerCase().includes('land')){
        countriesWithLand.push(countries[i])
    }else{
        countriesWithoutLand.push(countries[i])
    }
}

console.log(countriesWithLand)
console.log(countriesWithoutLand)

/*

Q8. In above countries array, check if there is a country or countries end 
with a substring 'ia'. If there are countries end with, print it as array. 
If there is no country containing the word 'ia', print 
'These are countries ends without ia'.

['Albania', 'Bolivia','Ethiopia']
*/

let countriesEndWithIa = []
let countriesEndWithoutIa = []

for(let i=0; i<= countries.length-1; i++){
    if(countries[i].toLowerCase().endsWith('ia')){
        countriesEndWithIa.push(countries[i])
    }else{
        countriesEndWithoutIa.push(countries[i])
    }
}

console.log(countriesEndWithIa)
console.log('These are countries ends without ia', countriesEndWithoutIa)

/*
Q9. Using the above countries array, find the country containing the biggest number of characters.
Ethiopia
*/

let maximumCharCountry = countries[0]

for(let i=0; i<=countries.length-1; i++){
    if(countries[i].length > maximumCharCountry.length){
        maximumCharCountry = countries[i]
        
    }
    
}
console.log(maximumCharCountry)


/*
Q10. Using the above countries array, find the country containing only 5 characters.

['Japan', 'Kenya']
*/

let fiveCharCountry = []

for(let i=0; i<=countries.length-1; i++){
    if(countries[i].length===5){
        fiveCharCountry.push(countries[i])
    }
}
console.log(fiveCharCountry)

/*
Q11. Find the longest word in the webTechs array
*/

let longestWordInWebTech = webTechs[0]

for(let i=0; i<= webTechs.length-1; i++){
    if(webTechs[i].length > longestWordInWebTech.length){
        longestWordInWebTech = webTechs[i]
    }
}

console.log(longestWordInWebTech)


/*
Q12. Use the webTechs array to create the following array of arrays:

[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

*/


let webTechArraysOfArray = []

for(let i=0; i<= webTechs.length-1; i++){
  
    webTechArraysOfArray.push([webTechs[i].toUpperCase(), webTechs[i].length])
    
}

console.log(webTechArraysOfArray)


/*

Q13. An application created using MongoDB, Express, 
React and Node is called a MERN stack app.
Create the acronym MERN by using the array mernStack

*/

let mernAcronym = ''

for(let i=0; i<= mernStack.length-1; i++){
    mernAcronym+= mernStack[i].slice(0,1)
}

console.log(mernAcronym)

/*
Q14. Iterate through the array, 
["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] 
using a for loop or for of loop and print out the items.
*/

for(let i=0; i<= webTechs.length-1; i++){
    console.log(webTechs[i])
}

console.log('For of loop')

for (const item of webTechs) {
    console.log(item)
}

/*
Q15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] 
reverse the order using loop without using a reverse method.
*/

const fruitArray = ['banana', 'orange', 'mango', 'lemon']

const reverseFruitArray = []

for(let i = fruitArray.length-1; i>=0; i-- ){
     reverseFruitArray.push(fruitArray[i])
}

console.log(reverseFruitArray)

/*
Q16. Print all the elements of array as shown below.

 const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  Below log
  HTML
  CSS
  JS
  REACT
  NODE
  EXPRESS
  MONGODB

*/
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

for(let i=0; i< fullStack.length; i++){
    for(let j=0; j< fullStack[i].length; j++){
        console.log(fullStack[i][j].toUpperCase())
    }
}

/*

Exercises: Level 3

Q1. Copy countries array(Avoid mutation)
*/

//Method 1

let countriesArrayCopy = []

for(let i=0; i<countries.length; i++){
    countriesArrayCopy.push(countries[i])
}
console.log(countriesArrayCopy)

//Method 2

countriesArrayCopy = countries.slice()

console.log(countriesArrayCopy)

//Method 3

countriesArrayCopy = [...countries]

console.log(countriesArrayCopy)

/*
Q2. Arrays are mutable. Create a copy of array which does not modify the original. 
Sort the copied array and store in a variable sortedCountries

[
    'Albania',  'Bolivia',
    'Canada',   'Denmark',
    'Ethiopia', 'Finland',
    'Germany',  'Hungary',
    'Ireland',  'Japan',
    'Kenya'
]
*/


let copiedCountries  = countries.slice()

let sortedCountries = []

for(let i=0; i< copiedCountries.length; i++){
    for(let j= i+1; j< copiedCountries.length; j++){
        if(copiedCountries[i]> copiedCountries[j]){
            temp = copiedCountries[i]
            copiedCountries[i] = copiedCountries[j]
            copiedCountries[j] = temp

        }
    }
}

sortedCountries = copiedCountries

console.log('This is my copied countries', copiedCountries)
console.log('This is my sorted companies', sortedCountries)

/*
Q3. Sort the webTechs array and mernStack array
*/

let copiedWebTechs = [...webTechs]

for(let i=0; i<copiedWebTechs.length; i++){
    for(let j=i+1; j< copiedWebTechs.length; j++ ){
        if(copiedWebTechs[i]> copiedWebTechs[j]){
            temp = copiedWebTechs[i]
            copiedWebTechs[i] = copiedWebTechs[j]
            copiedWebTechs[j] = temp
        }
    }
}

console.log('This is unsorted webtechs', webTechs)
console.log('This is sorted webtechs', copiedWebTechs)

let copiedMernStack = [...mernStack]

for(let i=0; i < copiedMernStack.length; i++){
    for(let j = i+1; j< copiedMernStack.length; j++){
        if(copiedMernStack[i]> copiedMernStack[j]){
            let temp = copiedMernStack[i]
            copiedMernStack[i] = copiedMernStack[j]
            copiedMernStack[j] = temp
        }
    }
}

console.log('This is my unsorted mern stack', mernStack)
console.log('This is my sorted mern stack', copiedMernStack)

/*
Q4. Extract all the countries contain the word 'land' from the countries array and print it as array

*/

let countriesWithLandWord = []

for(let i=0; i < countries.length; i++){
    if(countries[i].toLowerCase().includes('land')){
        countriesWithLandWord.push(countries[i])
    }
}

console.log(countriesWithLandWord)

/*
Q5. Find the country containing the hightest number of characters in the countries array
*/

let maxCharCountry = countries[0]

for(let i=0; i<countries.length; i++){
    if(countries[i].length> maxCharCountry.length){
        maxCharCountry = countries[i]
    }
}

console.log(maxCharCountry)

/*
Q7. Extract all the countries containing only four characters from the countries array and print it as array
*/

let fourCharCountry = []

for(let i=0; i < countries.length; i++){
    if(countries[i].length === 4){
        fourCharCountry.push(countries[i])
    }
}

console.log('This is four char country', fourCharCountry)

/*
Q8. Reverse the countries array and capitalize each country and stored it as an array
*/

let capCountries = []

for(let i=countries.length-1; i>=0; i--){
    capCountries.push(countries[i]?.toUpperCase())
}

console.log(capCountries)
