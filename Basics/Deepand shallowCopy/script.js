// Shallow Copy using Object.assign()
const originalObject = { a: 1, b: { c: 2 } };
const shallowCopy = Object.assign({}, originalObject);
console.log("Shallow Copy using Object.assign:", shallowCopy);

// Shallow Copy using spread operator
const originalArray = [1, [2, 3]];
const shallowArrayCopy = [...originalArray];
console.log("Shallow Copy using spread operator:", shallowArrayCopy);

// Deep Copy using JSON methods
const originalObject2 = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(originalObject2));
console.log("Deep Copy using JSON methods:", deepCopy);

// Shallow Copy Example
const shallowCopyExample = { x: 1, y: { z: 2 } };
const shallowCopyOfExample = { ...shallowCopyExample };

shallowCopyOfExample.y.z = 5;
console.log("Original object after shallow copy modification:", shallowCopyExample.y.z); // Output: 5

// Deep Copy Example
const deepCopyExample = { x: 1, y: { z: 2 } };
const deepCopyOfExample = JSON.parse(JSON.stringify(deepCopyExample));

deepCopyOfExample.y.z = 5;
console.log("Original object after deep copy modification:", deepCopyExample.y.z); // Output: 2
