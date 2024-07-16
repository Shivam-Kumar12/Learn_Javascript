let str = "   hello world, world   ";
let str1 = "hello";
let str2 = "world";
let numStr = "5";

// 1. toUpperCase()
let upperCaseStr = str.toUpperCase();
console.log("toUpperCase:", upperCaseStr); // Output: "   HELLO WORLD, WORLD   "

// 2. toLowerCase()
let lowerCaseStr = upperCaseStr.toLowerCase();
console.log("toLowerCase:", lowerCaseStr); // Output: "   hello world, world   "

// 3. trim()
let trimmedStr = str.trim();
console.log("trim:", trimmedStr); // Output: "hello world, world"

// 4. trimStart()
let trimStartStr = str.trimStart();
console.log("trimStart:", trimStartStr); // Output: "hello world, world   "

// 5. trimEnd()
let trimEndStr = str.trimEnd();
console.log("trimEnd:", trimEndStr); // Output: "   hello world, world"

// 6. includes()
let includesStr = trimmedStr.includes("world");
console.log("includes 'world':", includesStr); // Output: true

// 7. indexOf()
let indexOfStr = trimmedStr.indexOf("world");
console.log("indexOf 'world':", indexOfStr); // Output: 6

// 8. replace()
let replacedStr = trimmedStr.replace("world", "everyone");
console.log("replace:", replacedStr); // Output: "hello everyone, world"

// 9. replaceAll()
let replaceAllStr = trimmedStr.replaceAll("world", "everyone");
console.log("replaceAll:", replaceAllStr); // Output: "hello everyone, everyone"

// 10. concat()
let concatenatedStr = str1.concat(" ", str2);
console.log("concat:", concatenatedStr); // Output: "hello world"

// 11. padStart()
let padStartStr = numStr.padStart(3, "0");
console.log("padStart:", padStartStr); // Output: "005"

// 12. padEnd()
let padEndStr = numStr.padEnd(3, "0");
console.log("padEnd:", padEndStr); // Output: "500"

// 13. charAt()
let charAtStr = trimmedStr.charAt(6);
console.log("charAt:", charAtStr); // Output: "w"

// 14. charCodeAt()
let charCodeAtStr = trimmedStr.charCodeAt(6);
console.log("charCodeAt:", charCodeAtStr); // Output: 119

// 15. split()
let splitStr = trimmedStr.split(" ");
console.log("split:", splitStr); // Output: ["hello", "world,", "world"]
