const numbers = [102, 91, 3, -6, 203, 8, 33, 21, 150, 77, 61, 3, 91, 21, 8];

// Exercise 1: Calculate the sum of all numbers of the numbers array by using the reduce-function
const total = numbers.reduce((acc, value) => acc + value, 0);

console.log(total);