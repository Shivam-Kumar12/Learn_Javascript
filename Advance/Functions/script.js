// Example 1: Function Declaration and Invocation
function add(a, b) {
  return a + b;
}

let sum = add(2, 3);
console.log(`Sum is: ${sum}`); // Output: Sum is: 5

// Example 2: Arrow Function
const subtract = (a, b) => {
  return a - b;
};

let difference = subtract(10, 4);
console.log(`Difference is: ${difference}`); // Output: Difference is: 6

// Function with Three Arguments
function calculateAverage(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

// Call the function with three arguments
let average = calculateAverage(4, 8, 12);
console.log(`The average is: ${average}`); // Output: The average is: 8
