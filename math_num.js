// Creating a Number object with the value 25
const age = new Number(25);

// Convert the Number object to a string and log it
// console.log(age.toString());

// Log the type of the 'age' variable, which will be 'object' because 'age' is a Number object
// console.log(typeof age);

// Log the Math object, which contains various mathematical constants and functions
// console.log(Math);

// Log the value of PI (π), approximately 3.14159
// console.log(Math.PI);

// Log the absolute value of -10, which is 10
// console.log(Math.abs(-10));

// Log the smallest integer greater than or equal to 10.1, which is 11
// console.log(Math.ceil(10.1));

// Log the largest integer less than or equal to 10.9, which is 10
// console.log(Math.floor(10.9));

// Log the value of 10.5 rounded to the nearest integer, which is 11
// console.log(Math.round(10.5));

// Log the maximum value among the given numbers, which is 50
// console.log(Math.max(10, 20, 30, 40, 50));

// Log a random number between 0 (inclusive) and 1 (exclusive)
// console.log(Math.random());

// Log a random integer between 1 and 10 (inclusive)
// console.log(Math.floor(Math.random() * 10 + 1));

// Define the minimum and maximum values for the random number range
const min = 10;
const max = 20;

// Log a random integer between 'min' and 'max' (inclusive)
console.log(Math.floor(Math.random() * (max - min + 1) + min));