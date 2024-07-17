// Example of if statement
let x = 10;
if (x > 5) {
    console.log("x is greater than 5");
}

// Example of if-else statement
let y = 3;
if (y > 5) {
    console.log("y is greater than 5");
} else {
    console.log("y is not greater than 5");
}

// Example of if-else if-else statement
let z = 7;
if (z > 10) {
    console.log("z is greater than 10");
} else if (z > 5) {
    console.log("z is greater than 5 but less than or equal to 10");
} else {
    console.log("z is 5 or less");
}

// Example of switch statement
let fruit = "apple";
switch (fruit) {
    case "banana":
        console.log("Bananas are $0.99 a pound.");
        break;
    case "apple":
        console.log("Apples are $1.29 a pound.");
        break;
    case "orange":
        console.log("Oranges are $0.79 a pound.");
        break;
    default:
        console.log("Sorry, we are out of " + fruit + ".");
}

// Example of ternary operator (shorthand for if-else)
let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote);
