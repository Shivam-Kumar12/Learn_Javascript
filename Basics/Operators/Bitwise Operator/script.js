console.log("Bitwise Operators Examples");

// Bitwise AND (&)
let andResult = 5 & 1; // 0101 & 0001 = 0001 (1)
console.log("5 & 1:", andResult);

// Bitwise OR (|)
let orResult = 5 | 1; // 0101 | 0001 = 0101 (5)
console.log("5 | 1:", orResult);

// Bitwise XOR (^)
let xorResult = 5 ^ 1; // 0101 ^ 0001 = 0100 (4)
console.log("5 ^ 1:", xorResult);

// Bitwise NOT (~)
let notResult = ~5; // ~0101 = 1010 (inverting all bits)
console.log("~5:", notResult); // Output depends on the number of bits used to store the value

// Bitwise Left Shift (<<)
let leftShiftResult = 5 << 1; // 0101 << 1 = 1010 (10)
console.log("5 << 1:", leftShiftResult);

// Bitwise Right Shift (>>)
let rightShiftResult = 5 >> 1; // 0101 >> 1 = 0010 (2)
console.log("5 >> 1:", rightShiftResult);

// Bitwise Unsigned Right Shift (>>>)
let unsignedRightShiftResult = -5 >>> 1; // Treat -5 as a 32-bit unsigned integer and shift right
console.log("-5 >>> 1:", unsignedRightShiftResult);
