/*
Exercises: Level 1

*/

// Q1. Declare a function fullName and it print out your full name.

function fullName() {
  console.log("Ankit Patel");
}

fullName();

// Q2. Declare a function fullName and it print out your full name.
// Now it should take firstName, lastName as a parameter and it should return your full - name.

function fullNameWithParams(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

console.log(fullNameWithParams("Ankit", "Patel"));

// Q3. Declare a function addNumbers and it takes two parameters and it returns sum.

function addNumbers(a, b) {
  return a + b;
}

console.log(addNumbers(5, 10));

// Q4. Declare a function areaOfRectangle and it takes two parameters, width and height, and it returns the area of the rectangle.

function areaOfRectangle(length, width) {
  return length * width;
}

console.log(areaOfRectangle(5, 10));

// Q5. Declare a function perimeterOfRectangle and it takes two parameters, width and height, and it returns the perimeter of the rectangle.

function perimeterOfRectangle(length, width) {
  return 2 * (length + width);
}

console.log(perimeterOfRectangle(5, 10));

//Q6. A Volume of a rectangular prism is calculated as follows: volume = length * width * height.
// Write a function that calculates volumeOfRectPrism. It takes three parameters, length, width, and height, and it returns the volume of the rectangular prism.

function volumeOfRectPrism(length, width, height) {
  return length * width * height;
}

console.log(volumeOfRectPrism(5, 10, 2));

//Q7. Area of a circle is calculated as follows: area = π * r^2.
// Write a function that calculates areaOfCircle. It takes radius as a parameter and it returns the area of a circle.

function areaOfCircle(radius) {
  const pi = Math.PI;
  return pi * radius * radius;
}

console.log(areaOfCircle(5));

//Q8. Circumference of a circle is calculated as follows: circumference = 2πr.
// Write a function that calculates circumOfCircle. It takes radius as a parameter and it returns the circumference of a circle.

function circumOfCircle(radius) {
  const pi = Math.PI;
  return 2 * pi * radius;
}

console.log(circumOfCircle(5));

//Q9. Density of a substance is calculated as follows: density = mass / volume.
// Write a function that calculates density. It takes mass and volume as parameters and it returns the density of the substance.

function calculateDensity(mass, volume) {
  return mass / volume;
}

console.log(calculateDensity(10, 2));

//Q10. Speed is calculated by dividing the distance traveled by the time taken.
// Write a function that calculates speed. It takes distance and time as parameters and it returns the speed.

function calculateSpeed(distance, time) {
  return distance / time;
}

console.log(calculateSpeed(100, 2));

//Q11. Weight of a substance is calculated as follows: weight = mass * gravity.
// Write a function that calculates weight. It takes mass as a parameter and returns the weight of the substance. Assume gravity = 9.81 m/s^2.

function calculateWeight(mass) {
  const gravity = 9.81;
  return mass * gravity;
}

console.log(calculateWeight(10));

//Q12. Temperature in Celsius can be converted to Fahrenheit using the formula: F = C * 9/5 + 32.
// Write a function that converts celsius to fahrenheit. It takes celsius as a parameter and returns the temperature in Fahrenheit.

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(celsiusToFahrenheit(25));

//Q13. Body Mass Index (BMI) is calculated as follows: BMI = weight / (height * height).
// Write a function that calculates bmi. It takes weight and height as parameters and returns the BMI.

function calculateBMI(weight, height) {
  const BMI = weight / (height * height);
  if (BMI < 18.5) {
    return "Underweight";
  } else if (BMI >= 18.5 && BMI < 24.9) {
    return "Normal weight";
  } else if (BMI >= 25 && BMI < 29.9) {
    return "Overweight";
  } else {
    return "Obesity";
  }
}

console.log(calculateBMI(70, 1.75));

//Q14. Write a function called checkSeason, it takes a month parameter and returns the season: Autumn, Winter, Spring or Summer.

function checkSeason(month) {
  const winter = ["December", "January", "February"];
  const spring = ["March", "April", "May"];
  const summer = ["June", "July", "August"];
  const autumn = ["September", "October", "November"];

  if (winter.includes(month)) {
    return "Winter";
  } else if (spring.includes(month)) {
    return "Spring";
  } else if (summer.includes(month)) {
    return "Summer";
  } else if (autumn.includes(month)) {
    return "Autumn";
  } else {
    return "Invalid month";
  }
}

console.log(checkSeason("January"));

//Q15. Write a function called findMax, it takes an array of numbers and returns the maximum number in the array.

function findMax(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log(num1);
  } else if (num2 > num1 && num2 > num3) {
    console.log(num2);
  } else {
    console.log(num3);
  }
}
findMax(0, 10, 5);
findMax(0, -10, -2);

/*

Exercises: Level 2

*/

//Q1.Linear equation is calculated as follows: ax +by +c = 0.
// Write a function which calculates value of a linear equation, solveLinEquation

function solveLinEquation(a, b, c, x, y) {
  return a * x + b * y + c;
}
console.log(solveLinEquation(2, 3, -5, 1, 1)); // Example usage

//Q2. Quadratic equation is calculated as follows: ax^2 + bx + c = 0.
// Write a function which calculates value of a quadratic equation, solveQuadEquation

//Where a,b,c are coefficients of the equation and x is the variable.
//Where a,b and c are real numbers and a is not equal to 0.
// The function should return the roots of the equation.
// The roots can be real or complex numbers.

function solveQuadEquation(a = 1, b = 0, c = 0) {
  const discriminant = b * b - 4 * a * c;
  if (discriminant > 0) {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [root1, root2];
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    return [root];
  } else {
    const realPart = (-b / (2 * a)).toFixed(2);
    const imaginaryPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
    return [
      `${realPart} + ${imaginaryPart}i`,
      `${realPart} - ${imaginaryPart}i`,
    ];
  }
}
console.log(solveQuadEquation(1, -3, 2)); // [ 2, 1 ]
console.log(solveQuadEquation(1, 4, 4)); // [-2]
console.log(solveQuadEquation(1, -1, -2)); // [2, -1]
console.log(solveQuadEquation(1, 7, 12)); // [-3, -4]
console.log(solveQuadEquation(1, 0, -4)); // [2, -2]
console.log(solveQuadEquation(1, -1, 0)); // [1, 0]
console.log(solveQuadEquation(1, 2, 5)); // ["-1.00 + 2.00i", "-1.00 - 2.00i"]

//Q3. Write a function called printArray, it takes an array as a parameter and prints each element of the array.
function printArray(arr) {
  arr.forEach((element) => console.log(element));
}

const sampleArray = [1, 2, 3, 4, 5];
printArray(sampleArray);

//Q4. Write a function name showDateTime which shows time in this format: 14/03/2023 13:30:55
// using the Date object.
function showDateTime() {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

console.log(showDateTime());
