console.log("Logical Operators Examples");

// Logical AND (&&)
let andExample = (5 > 3) && (10 > 5); // true, both conditions are true
console.log("(5 > 3) && (10 > 5):", andExample);

andExample = (5 > 3) && (5 > 10); // false, second condition is false
console.log("(5 > 3) && (5 > 10):", andExample);

// Logical OR (||)
let orExample = (5 > 3) || (5 > 10); // true, one condition is true
console.log("(5 > 3) || (5 > 10):", orExample);

orExample = (5 < 3) || (5 > 10); // false, both conditions are false
console.log("(5 < 3) || (5 > 10):", orExample);

// Logical NOT (!)
let notExample = !(5 > 3); // false, because 5 > 3 is true
console.log("!(5 > 3):", notExample);

notExample = !(5 < 3); // true, because 5 < 3 is false
console.log("!(5 < 3):", notExample);
