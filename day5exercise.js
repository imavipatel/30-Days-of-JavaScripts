/*

Exercise: Level 1

*/

const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']

const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']

//1. Declare an empty array

const myArray = Array()
const myArray1 = []
console.log(myArray)
console.log(myArray1)

//2. Declare an array with more than 5 number of elements

const numberArray = [1,2,3,4,5,6,7]
console.log(numberArray)

//3. Find the length of array

console.log(numberArray.length)

//4. Get the first item middle item and last item of the array.

console.log(numberArray[0]) //first item

const middleIndex = numberArray.length/2
console.log(numberArray[Math.floor(middleIndex)]) //middle item

console.log(numberArray[numberArray.length-1]) // last item


//5. Declare an array called mixedDataTypes, put different data 
// types in the array and find the length of the array.
// The array size should be greater than 5

const mixedDataTypes = [1, 'one', true, undefined, null, 1.5, {num:1}, [1,2,3]]

console.log(mixedDataTypes.length)

//6. Declare an array variable name itCompanies and assign initial 
// values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']


//7. Print the array using console.log()

console.log(itCompanies)

//8. Print the number of companies in the array

console.log(itCompanies.length)

//9. Print the first company, middle and last company

console.log(itCompanies[0])

console.log(itCompanies[Math.floor(itCompanies.length/2)])

console.log(itCompanies[itCompanies.length-1])

//10. Print out each company

console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])
console.log(itCompanies[7])

//11. Change each company name to uppercase one by one and print them out

console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())



//12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

console.log(`${itCompanies.join(', ')} are big IT companies`)

//13. Check if a certain company exists in the itCompanies array. 
// If it exist return the company else return a company is not found

if(itCompanies.includes('Amazon')){
    console.log('Amazon is exist')
}else{
    console.log('Amazon not exist')
}

if(itCompanies.includes('TCS')){
    console.log('Company is found')
}else{
    console.log('Company is not found.')
}

//14. Filter out companies which have more than one 'o' without the filter method
const companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

const moreThannOneO = []

companies.map((item)=>{
    const find1 = item.lastIndexOf('o')
    const find2 = item.indexOf('o')

    if(find1!==find2){
       moreThannOneO.push(item)
    }
})
console.log(moreThannOneO)

const itCompaniess = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
const ContaineCompany = []
for(let i=0; i<itCompaniess.length; i++){
    if(itCompanies[i].includes('o')){
        const zeroCount = itCompaniess[i];
        let count = 0
        for(let j=0; j< zeroCount.length; j++){
            if( zeroCount[j] === 'o'){
                count += 1
            }
        }
        if(count>1){
            ContaineCompany.push(itCompaniess[i])
        }
    }
}
console.log(ContaineCompany)


//15. Sort the array using sort() method

console.log(itCompanies)

itCompanies.sort()

console.log(itCompanies)

//16. Reverse the array using reverse() method

console.log(itCompanies)

itCompanies.reverse()

console.log(itCompanies)


//17. Slice out the first 3 companies from the array

console.log(itCompanies)

const sliceFirst3Company = itCompanies.slice(0,3)

console.log(sliceFirst3Company)

//18. Slice out the last 3 companies from the array

console.log(itCompanies)

const sliceLast3Company = itCompanies.slice(itCompanies.length-3,itCompanies.length)

console.log(sliceLast3Company)

//19. Slice out the middle IT company or companies from the array

console.log(itCompanies)

const sliceMiddleCompany = itCompanies.slice(Math.floor(itCompanies.length/2), Math.floor(itCompanies.length/2)+1)

console.log(sliceMiddleCompany)

//20. Remove the first IT company from the array

console.log(itCompanies)

const removeFirstCompany = itCompanies.shift()

console.log(itCompanies)

//21. Remove the middle IT company or companies from the array

console.log(itCompanies)

const removeMiddleCompany = itCompanies.splice(Math.floor(itCompanies.length/2),1)

console.log(removeMiddleCompany)

console.log(itCompanies)

//22. Remove the last IT company from the array
console.log(itCompanies)

const companiesPop = itCompanies.pop()

console.log(companiesPop, itCompanies)


//23. Remove all IT companies

console.log(itCompanies)

const spliceCompanies = itCompanies.splice(0, itCompanies.length)

//alternative method

itCompanies.length = 0

console.log(itCompanies )

/*
Exercise: Level 2
*/

//1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file



//2. First remove all the punctuations and change the string to array and count the number of words in the array

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

const words = text.replace(/[.,]/g, '').split(' ')

console.log(words)
console.log(words.length)

//3. In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

//add

shoppingCart.push('Sugar') //add

console.log(shoppingCart)

shoppingCart.pop('Sugar') //remove

console.log(shoppingCart)

shoppingCart.splice(0,1,'Curd') //edit

console.log(shoppingCart)

//4. add 'Meat' in the beginning of your shopping cart if it has not been already added

if(!shoppingCart.includes('Meat')){
    shoppingCart.unshift('Meat')
}else{
    console.log('Meat is already added')
}

console.log(shoppingCart)

//5. add Sugar at the end of you shopping cart if it has not been already added

if(!shoppingCart.includes('Sugar')){
    shoppingCart.push('Sugar')
}else{
    console.log('Sugar is already added')
}

console.log(shoppingCart)

//6. remove 'Honey' if you are allergic to honey

const indexOfHoney = shoppingCart.indexOf('Honey')

console.log(indexOfHoney)

shoppingCart.splice(indexOfHoney,1)

console.log(shoppingCart)

//7. modify Tea to 'Green Tea'

const indexOfTea = shoppingCart.indexOf('Tea')

console.log(indexOfTea)

shoppingCart.splice(indexOfTea,1, 'Green Tea')

console.log(shoppingCart)

//8. In countries array check if 'Ethiopia' exists in the array 
// if it  exists print 'ETHIOPIA'. If it does not exist add to 
// the countries list.


const countriesArray = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']

if(countriesArray.includes('Ethiopia')){
    console.log('ETHIOPIA')
}else{
   countriesArray.push('Ethiopia')
}

console.log(countriesArray)

//9. In the webTechs array check if Sass exists in the array and 
// if it exists print 'Sass is a CSS preprocess'. 
// If it does not exist add Sass to the array and print the array.

const webTechsArray = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']

if(webTechsArray.includes('Sass')){
    console.log('Sass is a CSS preprocess')
}else{
   webTechsArray.push('Sass')
}

console.log(webTechsArray)

//10. Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)

/*
Exercise: Level 3

1. The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

*/

//Sort the array and find the min and max age

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort()

console.log(ages)

const minAge = ages[0]
const maxAge = ages[ages.length-1]

console.log(`This is min age ${minAge} and max age ${maxAge}`)


//Find the median age(one middle item or two middle items divided by two)

const middleIndexAge = Math.floor(ages.length/2)

const middleAge = ages[middleIndexAge]

const twoMiddleAge = ages.slice(middleIndexAge, middleIndexAge+2)

console.log('This is my middle age', middleAge)
console.log('This is two middle age', twoMiddleAge)

//Find the average age(sum of all items divided by number of items)
const sumOfAges = ages.reduce((acc, curr) => acc + curr, 0)
console.log('This is sum of age', sumOfAges)
const averageAge = sumOfAges / ages.length
console.log('This is average age', averageAge)

// Second Method

let ageSum = 0
for(let i=0; i<ages.length; i++){
    ageSum = ageSum + ages[i]   
}
console.log(ageSum)
const ageAverage = ageSum / ages.length
console.log('This is age average', ageAverage)

//Find the range of the ages(max minus min)
const rangeOfAges = maxAge - minAge
console.log('This is range of ages', rangeOfAges)

//Compare the value of (min - average) and (max - average),
// use abs() method and console.log the result

const minAverage = Math.abs(minAge - averageAge)
const maxAverage = Math.abs(maxAge - averageAge)
console.log('This is min average', minAverage)
console.log('This is max average', maxAverage)
console.log('This is min average and max average', minAverage, maxAverage)

// Slice the first ten countries from the countries array

const countriesArrayOne = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']

const sliceCountries = countriesArrayOne.slice(0,10)

console.log(sliceCountries)


//Find the middle country(ies) in the countries array
const middleIndexCountries = Math.floor(countriesArrayOne.length/2)
const middleCountry = countriesArrayOne[middleIndexCountries]
const twoMiddleCountries = countriesArrayOne.slice(middleIndexCountries, middleIndexCountries+2)
console.log('This is middle country', middleCountry)
console.log('This is two middle countries', twoMiddleCountries)

// Divide the countries into two equal arrays if it is even 
// If countries is odd, one more country for the first half.
const countriesArrayTwo = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']
const middleIndexCountriesTwo = Math.floor(countriesArrayTwo.length/2)
const firstHalf = countriesArrayTwo.slice(0, middleIndexCountriesTwo)
const secondHalf = countriesArrayTwo.slice(middleIndexCountriesTwo)
console.log('This is first half', firstHalf)
console.log('This is second half', secondHalf)

firstHalf.push('India')

console.log('Updated first half', firstHalf)
console.log('This is second half', secondHalf)