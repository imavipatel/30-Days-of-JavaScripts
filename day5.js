/*

Array:

Arrays: In contrast to variables, an array can store multiple values. 
Each value in an array has an index, and each index has a reference in 
a memory address. Each value can be accessed by using their indexes. 
The index of an array starts from zero, and the index of the last 
element is less by one from the length of the array.

An array is a collection of different data types which are ordered and 
changeable(modifiable). An array allows storing duplicate elements and 
different data types. An array can be empty, or it may have different 
data type values.


How to create an empty array:

In JavaScript, we can create an array in different ways. 
Let us see different ways to create an array. 
It is very common to use const instead of let to declare 
an array variable. If you ar using const it means you 
do not use that variable name again.

*/

//Using Array constructor

const arr = Array()

//or

// let arr = new Array()

console.log(arr) //[]

//Using square brackets([])
// This is the most recommneded way to create an empty list

const array = []

console.log(array)

/*
How to create an array with values

Array with initial values. We use length property to find the length of an array.

*/

const numbers = [0, 3.14, 9.81, 37, 98.6, 100] //array of numbers

const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of string fruits

const vegetables = ['Tomato', 'Potato','Cabbage','Onion', 'Carrot'] //array of string, vegetables

const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of string , dairy products

const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] //array of web technologies

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] //array of strings, countries

//Print the array and its length

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)


//Array can have items of different data types

const arrayDataTypes = [
    'Ankit',
    250,
    true,
    {country:'Finland', city:'Helsinki'},
    {skills: ['HTML','CSS','JS','React','Python']}
]

console.log(arrayDataTypes)
console.log(arrayDataTypes.length)


// Creating an array using split

let js = 'Javascript'

const charsInJavaScript = js.split('') 

console.log(charsInJavaScript)
console.log(charsInJavaScript.length)

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

const companiess = companiesString.split(', ')

console.log(companiess)
console.log(companiess.length)

let txt = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

const words = txt.split(' ')

console.log(words)
console.log(words.length)

/*
Accessing array items using index

We access each element in an array using their index. 
An array index starts from 0.

*/

const fruitsArray =  ['banana', 'orange', 'mango', 'lemon']

let firstFruit = fruitsArray[0] //banana

let secondFruit = fruitsArray[1] //orange

let thirdFruit = fruitsArray[2] // mango

let lastIndex = fruitsArray.length-1

let lastFruit = fruitsArray[lastIndex]

console.log(lastFruit) //lemon

//Numbers

const numbersArray = [0,3,14,9.81,37,98.6,100] //set of numbers

console.log(numbersArray.length)
console.log(numbersArray)
console.log(numbersArray[0])
console.log(numbersArray[5])

let lastNumberIndex = numbersArray.length-1;

console.log(numbersArray[lastNumberIndex])

//Web technologies

const webTechsArray = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']

console.log(webTechsArray) 
console.log(webTechsArray.length)
console.log(webTechsArray[0])
console.log(webTechsArray[6])

let lastWebTechsArrayIndex = webTechsArray.length-1
console.log(webTechsArray[lastWebTechsArrayIndex])

//countries

const countriesArray = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']  //List of countries

console.log(countriesArray)
console.log(countriesArray[0])
console.log(countriesArray[10])

let countriesArrayLastIndex = countriesArray.length-1;

console.log(countriesArray[countriesArrayLastIndex])

//shoppingCart 

const shoppingCart = ['Milk', 'Mango', 'Tomato', 'Potato', 'Avocado', 'Meat', 'Eggs', 'Sugar'] //List of food products

console.log(shoppingCart);
console.log(shoppingCart[0]);
console.log(shoppingCart[7])

let shoppingCartLastIndex = shoppingCart.length-1;

console.log(shoppingCart[shoppingCartLastIndex])

/*
Modifying array element

An array is mutable(modifiable). Once an array is created, we can modify the contents of the array elements.

*/

const numbersArrays = [1,2,3,4,5]

numbersArrays[0] = 10  //changing 1 at index 0 to 10
numbersArrays[1] = 20  //changing 2 at index 1 to 20

console.log(numbersArrays) //[10,20,3,4,5]




const countriesArrays = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']  //List of countries

countriesArrays[0] = 'Afghanistan' //Replacing albania by Afghanistan

let countriesArraysLastIndex = countriesArrays.length -1

countriesArrays[countriesArraysLastIndex] = 'Korea' //Replacing kenya by korea

console.log(countriesArrays)


/*

Methods to manipulate array:

There are different methods to manipulate an array.

Array Methods:
1. Array
2. length
3. concat
4, indexOf,
5. slice,
6. splice,
7. join,
8. toString,
9. includes
10. lastIndexOf,
11. isArray
12. fill
13. push
14. pop
15. shift
16. unshift

*/

/*

Array Constructor

Array: To create an array.

*/

const arrayConstructor = Array() //creates an empty array

console.log(arrayConstructor);

const eightEmptyValues = Array(8) //it creates eight empty values

console.log(eightEmptyValues) // [] [ <8 empty items> ]

/*

Creating static values with fill

fill: Fill all the array elements with a static value

*/

const arrFill = Array() //create an empty array
console.log(arrFill)

const eightXValues = Array(8).fill('X') // it creates eight element values filled with 'X'

console.log(eightXValues)

const eight0Values = Array(8).fill(0) //it creates eight element values filled with '0

console.log(eight0Values)

const four4Values = Array(4).fill(4) //it creates 4 elements values filled with '4'

console.log(four4Values)

/*

Concatenating array using concat

concat: To concatenate two arrays.

*/

const fistList = [1,2,3]
const secondList = [4,5,6]
const thirdList = fistList.concat(secondList)

console.log(thirdList)

const firstFruits = ['banana', 'orange', 'mango', 'lemon'] // Array of fruits
const secondVegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] //array of vegetables

const fruitsAndVegetables = firstFruits.concat(secondVegetables)

console.log(fruitsAndVegetables)

/*
Getting array length

Length: To know the size of array

*/

const numberss = [1,2,3,4,5]
console.log(numberss.length)

/*

Getting index an element in arr array

indexOf: To check if an item exist in an array. If it exists it return the index else it returns -1.

*/

const numbersIndexOf = [1,2,3,4,5]

console.log(numbersIndexOf.indexOf(5))

console.log(numbersIndexOf.indexOf(0))
console.log(numbersIndexOf.indexOf(1))
console.log(numbersIndexOf.indexOf(6))

/*
Check and element if it exist in an array

Check item in a list
*/

//let us check if a banana exist in the array.

const fruitss = ['banana', 'orange', 'mango', 'lemon']

let index = fruits.indexOf('banana') //

if(index === -1){
    console.log('This fruit does not exist in the array')
}else{
    console.log('This fruit does exist in the array.')
}

//we can use also ternary here

index === -1 ? console.log('This fruit does not exist in the array') : console.log('This fruit does exist in the array.')

//let us check if an avocado exist in the array

let indexOfAvocado = fruits.indexOf('avocado') //-1, if the element not found index is -1

if(indexOfAvocado === -1){
    console.log('This fruit does not exist in the array.')
}else{
    console.log('This fruit does exist in the array')
}

/*

Getting last index of an element in array

lastIndexOf: It gives the position of the last  item in the array.
If it exist, it returns the index else it returns -1.

*/

const lastIndexNumber = [1,2,3,4,5,3,1,2]

console.log(lastIndexNumber.lastIndexOf(2))
console.log(lastIndexNumber.lastIndexOf(0))
console.log(lastIndexNumber.lastIndexOf(1))
console.log(lastIndexNumber.lastIndexOf(3))
console.log(lastIndexNumber.lastIndexOf(4))
console.log(lastIndexNumber.lastIndexOf(6))

/*

check an element in array if it exist

includes: To check if an item exist in an array. If it exist it return the true else it returns false

*/

const numbersInclude = [1,2,3,4,5]

console.log(numbersInclude.includes(5)) 
console.log(numbersInclude.includes(0))
console.log(numbersInclude.includes(1))
console.log(numbersInclude.includes(6))

const webTechsInclude = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'] // List of web technologies

console.log(webTechsInclude.includes('Node'))
console.log(webTechs.includes('C'))

/*

Checking array

Array.isArray: To check if the data type is an array

*/

const numbersss = [1,2,3,4,5]

console.log(Array.isArray(numbersss)) 

const number = 100
console.log(Array.isArray(numbersss))

/*

Converting array to string

toString: Converts array to string

*/

const numbersToString = [1,2,3,4,5]
console.log(numbersToString.toString())

const nameToString = ['Ankit', 'Hemant', 'Himanshu', 'Kuldeep']

console.log(nameToString.toString())

/*

Joining array elements

join: It is used to join the elements of the array, 
the argument we passed in the join method will be joined 
in the array and return as a string. By default, 
it joins with a comma, but we can pass different string 
parameter which can be joined between the items.

*/

const numberJoin = [1,2,3,4,5]
console.log(numberJoin.join())

const namesJoin = ['Ankit', 'Hemant', 'Himanshu', 'Kuldeep']

console.log(namesJoin.join())
console.log(namesJoin.join(''))
console.log(namesJoin.join(' '))
console.log(namesJoin.join(', '))
console.log(namesJoin.join(' # '))

const webTechsJoin = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'] // List of web technologies

console.log(webTechsJoin.join())
console.log(webTechsJoin.join(' # '))

/*

Slice array elelments

Slice: To cut out a multiple items in range. 
It takes two parameters:starting and ending position. 
It doesn't include the ending position.

*/

const numberSlice = [1,2,3,4,5]

console.log(numberSlice.slice())
console.log(numberSlice.slice(0))
console.log(numberSlice.slice(0,2))
console.log(numberSlice.slice(0, numberSlice.length))
console.log(numberSlice.slice(1,4))


/*
Splice method in array

Splice: It takes three parameters:
Starting position, 
number of item to be removed 
and number of items to be added.
*/

const numbersSplice = [1,2,3,4,5]

console.log(numbersSplice.splice())

numbersSplice.splice(0,1)

console.log(numbersSplice)

const numberSplice1 = [1,2,3,4,5,6]

numberSplice1.splice(3,3,7,8,9)

console.log(numberSplice1)

/*
Adding item to an array using push
Push: adding item in the end. To add item to the end 
of an existing array we use the push method.
*/

const arrPush = ['item1', 'item2', 'item3']

console.log(arrPush)

arrPush.push('item4')

console.log(arrPush)

const numberPush = [1,2,3,4,5]

numberPush.push(6)

console.log(numberPush)

const fruitsPush = ['banana', 'orange', 'mango', 'lemon']
fruitsPush.push('apple')
console.log(fruitsPush)

fruitsPush.push('lime')
console.log(fruitsPush)

/*
Removing the end element using pop

pop: Removing item in the end.

*/

const numbersPop = [1,2,3,4,5]
console.log(numbersPop)
numbersPop.pop() //remove one item from the end.
console.log(numbersPop)
numbersPop.pop()
console.log(numbersPop)

/*

Removing an element from the beginning

shift: Removing one array element in the biginning of the array.

*/

const numbersShift = [1,2,3,4,5]
numbersShift.shift()
console.log(numbersShift)
numbersShift.shift()
console.log(numbersShift)

/*

Add an element from the beginning

unshift: Adding array element in the beginning of the array

*/

const numbersUnshift = [1,2,3,4,5]

console.log(numbersUnshift)

numbersUnshift.unshift(0)

console.log(numbersUnshift)

/*

Reversing array order

reverse: reverse the order of an array.

*/

const numbersReverse = [1,2,3,4,5]

console.log(numbersReverse)

numbersReverse.reverse();

console.log(numbersReverse)

numbersReverse.reverse();

console.log(numbersReverse)

/*

Sorting elements in array

sort: arrange array elements in ascending order. 
Sort takes a call back function, we will see how we 
use sort with a call back function in the coming sections.

*/

const webTechsSort = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'] // List of web technologies

console.log(webTechsSort)

webTechsSort.sort()

console.log(webTechsSort)

webTechsSort.reverse()

console.log(webTechsSort)

/*
Array of arrays

Array can store different data types including an array itself.
Let us create an array of arrays

*/

const firstNums = [1,2,3]
const secondNums = [1,4,9]

const arrayOfArray = [[1,2,3], [1,2,3]]

console.log(arrayOfArray[0]) //[1,2,3]

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = [frontEnd, backEnd]

console.log(fullStack)

console.log(fullStack.length)

console.log(fullStack[0])
console.log(fullStack[1]) 