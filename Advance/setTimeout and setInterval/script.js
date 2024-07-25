// Example of setInterval with multiple intervals

function logMessageOne() {
  console.log('Message every 1 second');
}

function logMessageTwo() {
  console.log('Message every 2 seconds');
}

function logMessageThree() {
  console.log('Message every 3 seconds');
}

// Set intervals and save their IDs
const intervalIDOne = setInterval(logMessageOne, 1000);
const intervalIDTwo = setInterval(logMessageTwo, 2000);
const intervalIDThree = setInterval(logMessageThree, 3000);

// Clear the intervals after 10 seconds
setTimeout(() => {
  clearInterval(intervalIDOne);
  clearInterval(intervalIDTwo);
  clearInterval(intervalIDThree);
  console.log('All intervals cleared after 10 seconds');
}, 10000);

// Example of setTimeout

function logTimeoutMessage() {
  console.log('This message is displayed after a 5-second delay');
}

// Set timeout and save its ID
const timeoutID = setTimeout(logTimeoutMessage, 5000);

// Clear the timeout before it executes
clearTimeout(timeoutID);
console.log('Timeout cleared before execution');
