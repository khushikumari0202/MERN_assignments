// Task 1: Declare variables
let age = 25;
let isAdult = age >= 18;

// Task 2: Perform operations
let x = 10;
let y = 5;
let addition = x + y;
let multiplication = x * y;
let modulus = x % y;

// Task 3: Check if a number is even or odd
let n = 7; // Example number
let isEven = n % 2 === 0 ? "Even" : "Odd";

// Task 4: Store numbers from 1 to 5 in an array
let numbers = [];
for (let i = 1; i <= 5; i++) {
    numbers.push(i);
}

// Task 5: Function to return the square of a number
function square(num) {
    return num * num;
}

// Output results to the console
console.log("Is Adult:", isAdult);
console.log("Addition:", addition);
console.log("Multiplication:", multiplication);
console.log("Modulus:", modulus);
console.log("Number is:", isEven);
console.log("Numbers array:", numbers);
console.log("Square of 4:", square(4));
