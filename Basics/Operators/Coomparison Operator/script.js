console.log("Comparison Operators Examples");

// Equal to (==)
let isEqual = 5 == '5'; // true, because == does type conversion
console.log("5 == '5':", isEqual);

// Strict equal to (===)
let isStrictEqual = 5 === '5'; // false, because === checks type and value
console.log("5 === '5':", isStrictEqual);

// Not equal to (!=)
let isNotEqual = 5 != '5'; // false, because != does type conversion
console.log("5 != '5':", isNotEqual);

// Strict not equal to (!==)
let isStrictNotEqual = 5 !== '5'; // true, because !== checks type and value
console.log("5 !== '5':", isStrictNotEqual);

// Greater than (>)
let isGreaterThan = 10 > 5; // true
console.log("10 > 5:", isGreaterThan);

// Greater than or equal to (>=)
let isGreaterThanOrEqual = 10 >= 10; // true
console.log("10 >= 10:", isGreaterThanOrEqual);

// Less than (<)
let isLessThan = 5 < 10; // true
console.log("5 < 10:", isLessThan);

// Less than or equal to (<=)
let isLessThanOrEqual = 5 <= 5; // true
console.log("5 <= 5:", isLessThanOrEqual);
