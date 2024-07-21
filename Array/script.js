const username = 'Anurag Singh'

const fruitsCollection = ['Apple', 'Banana', 'Grapes', 'Dates']

const newObject = {}
const newArray = []
// Creating arrays using array literals
const numbers = [1, 2, 3, 4, 5];
console.log("Original array:", numbers);

// Using push() to add elements to the end of an array
numbers.push(6);
console.log("After push(6):", numbers);

// Using pop() to remove the last element from an array
const lastElement = numbers.pop();
console.log("After pop():", numbers);
console.log("Popped element:", lastElement);

// Using shift() to remove the first element from an array
const firstElement = numbers.shift();
console.log("After shift():", numbers);
console.log("Shifted element:", firstElement);

// Using unshift() to add elements to the beginning of an array
numbers.unshift(0);
console.log("After unshift(0):", numbers);

// Using concat() to merge two arrays
const moreNumbers = [6, 7, 8];
const combinedArray = numbers.concat(moreNumbers);
console.log("After concat([6, 7, 8]):", combinedArray);

// Using slice() to return a portion of an array
const slicedArray = combinedArray.slice(2, 5);
console.log("After slice(2, 5):", slicedArray);

// Using splice() to add/remove elements from an array
const removedElements = combinedArray.splice(2, 2, 'a', 'b');
console.log("After splice(2, 2, 'a', 'b'):", combinedArray);
console.log("Removed elements:", removedElements);

// Using forEach() to execute a function on each array element
combinedArray.forEach(element => console.log("forEach element:", element));

// Using map() to create a new array with modified elements
const doubledArray = combinedArray.map(element => (typeof element === 'number' ? element * 2 : element));
console.log("After map(element * 2):", doubledArray);

// Using filter() to create a new array with elements that pass a test
const filteredArray = combinedArray.filter(element => typeof element === 'number');
console.log("After filter(number elements):", filteredArray);

// Using reduce() to accumulate array values into a single value
const sum = filteredArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("After reduce(sum):", sum);
