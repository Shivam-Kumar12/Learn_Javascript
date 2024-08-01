console.log("Special Operators Examples");

// Nullish Coalescing Operator (??)
let foo = null ?? 'default value';
console.log("null ?? 'default value':", foo); // 'default value'

foo = 0 ?? 'default value';
console.log("0 ?? 'default value':", foo); // 0 (because 0 is not null or undefined)

// Optional Chaining Operator (?.)
let user = { name: 'Alice', details: { age: 25 } };
let age = user?.details?.age;
console.log("user?.details?.age:", age); // 25

let address = user?.contact?.address;
console.log("user?.contact?.address:", address); // undefined

// Conditional (Ternary) Operator (?:)
let isAdult = age >= 18 ? 'Yes' : 'No';
console.log("age >= 18 ? 'Yes' : 'No':", isAdult); // Yes

// Typeof Operator (typeof)
let typeOfAge = typeof age;
console.log("typeof age:", typeOfAge); // 'number'

// Instanceof Operator (instanceof)
let isDate = new Date() instanceof Date;
console.log("new Date() instanceof Date:", isDate); // true

// In Operator (in)
let hasName = 'name' in user;
console.log("'name' in user:", hasName); // true

// Delete Operator (delete)
delete user.name;
console.log("user after delete name:", user); // { details: { age: 25 } }
