document.addEventListener("DOMContentLoaded", function() {
  // Example 1: Days of the week
  const day = new Date().getDay();
  switch (day) {
      case 0:
          console.log("Today is Sunday");
          break;
      case 1:
          console.log("Today is Monday");
          break;
      case 2:
          console.log("Today is Tuesday");
          break;
      case 3:
          console.log("Today is Wednesday");
          break;
      case 4:
          console.log("Today is Thursday");
          break;
      case 5:
          console.log("Today is Friday");
          break;
      case 6:
          console.log("Today is Saturday");
          break;
      default:
          console.log("Invalid day");
  }

  // Example 2: Fruit pricing
  const fruit = "apple";
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
      case "mango":
          console.log("Mangoes are $1.99 a pound.");
          break;
      default:
          console.log("Sorry, we are out of " + fruit + ".");
  }

  // Example 3: Grading system
  const score = 85;
  let grade;
  switch (true) {
      case score >= 90:
          grade = "A";
          break;
      case score >= 80:
          grade = "B";
          break;
      case score >= 70:
          grade = "C";
          break;
      case score >= 60:
          grade = "D";
          break;
      default:
          grade = "F";
  }
  console.log("Your grade is: " + grade);
});
