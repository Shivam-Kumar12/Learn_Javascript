document.addEventListener("DOMContentLoaded", function() {
  const age = 25;
  const hasLicense = true;

  if (age >= 18) {
      if (hasLicense) {
          console.log("You are eligible to drive.");
      } else {
          console.log("You need a driving license to drive.");
      }
  } else {
      if (hasLicense) {
          console.log("You have a license but are not old enough to drive.");
      } else {
          console.log("You are not old enough to drive and you don't have a license.");
      }
  }

  const score = 85;

  if (score >= 90) {
      console.log("Grade: A");
  } else {
      if (score >= 80) {
          console.log("Grade: B");
      } else {
          if (score >= 70) {
              console.log("Grade: C");
          } else {
              if (score >= 60) {
                  console.log("Grade: D");
              } else {
                  console.log("Grade: F");
              }
          }
      }
  }
});
