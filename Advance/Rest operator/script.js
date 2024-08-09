// Rest Parameter Example
function calculateSum(...numbers) {
  return numbers.reduce((acc, current) => acc + current, 0);
}

const result1 = calculateSum(1, 2, 3);
const result2 = calculateSum(10, 20, 30, 40, 50);

console.log('Sum of 1, 2, 3:', result1); // Output: Sum of 1, 2, 3: 6
console.log('Sum of 10, 20, 30, 40, 50:', result2); // Output: Sum of 10, 20, 30, 40, 50: 150
