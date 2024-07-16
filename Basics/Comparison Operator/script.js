// Example comparison operations
let a = 10;
let b = '10';
let c = 15;
let nanValue = NaN;
let obj1 = { name: 'John' };
let obj2 = { name: 'John' };
let obj3 = obj1;

// Equality and Inequality
console.log(a == b);               // true
console.log(a === b);              // false
console.log(a != b);               // false
console.log(a !== b);              // true

// Relational Operators
console.log(a > c);                // false
console.log(a >= c);               // false
console.log(a < c);                // true
console.log(a <= c);               // true

// NaN comparisons
console.log(nanValue == NaN);      // false
console.log(nanValue === NaN);     // false
console.log(Object.is(nanValue, NaN)); // true

// Object comparisons
console.log(obj1 == obj2);         // false
console.log(obj1 === obj2);        // false
console.log(obj1 == obj3);         // true
console.log(obj1 === obj3);        // true

// Additional Examples
console.log(false == 0);           // true
console.log(false === 0);          // false
console.log(null == undefined);    // true
console.log(null === undefined);   // false
console.log([] == 0);              // true
// console.log([] === 0);             // false
