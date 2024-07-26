# Learn_Javascript
Zer0 to Advance Js

# BASICS
<h1>Truthy and Falsy Values</h1>
    <h2>Falsy Values</h2>
    <ul>
      <li>0</li>
      <li>-0</li>
      <li>NaN</li>
      <li>''</li>
      <li>undefined</li>
      <li>null</li>
    </ul>


# Diffrence between Function and method

In JavaScript, the terms "function" and "method" are often used, but they have distinct meanings and uses:

Function
Definition: A function is a block of code designed to perform a particular task. It is a standalone piece of code that can be defined once and executed any number of times.
Usage: Functions are invoked using their names.
function functionName(parameters) {
  // function body
}

// Example
function add(a, b) {
  return a + b;
}

let sum = add(5, 3); // sum is 8

Method
Definition: A method is a function that is associated with an object. Methods are essentially functions that are properties of an object.
Usage: Methods are invoked using the object's name followed by a dot and the method name.
let objectName = {
  methodName: function(parameters) {
    // method body
  }
};

// Example
let calculator = {
  add: function(a, b) {
    return a + b;
  }
};

let sum = calculator.add(5, 3); // sum is 8

# ADVANCE

Call Stack in JavaScript
The call stack is a mechanism JavaScript uses to keep track of function calls. It works like a stack of plates, where the last plate placed on the top is the first one to be removed. Here's how it works in simple terms:

# Function Call:                                                                                                                     
When a function is called, it's added to the call stack.
Execute Function:

The function at the top of the stack is executed.
Function Completes:

When the function finishes executing, it's removed from the stack.
Resume Execution:

The program then continues executing the next function in the stack.

# Arguments
The arguments object in JavaScript is an array-like object that represents the arguments passed to a function. It is available within all non-arrow functions and contains all the arguments that were passed to the function, regardless of how many or what type they are.

function exampleFunction ()
{
  console.log(arguments);
}
# Important Notes
.Not Available in Arrow Functions

.Use Rest Parameters for Modern JavaScript

The arguments object is useful for handling functions with a variable number of arguments but is less common in modern JavaScript due to the flexibility provided by rest parameters.


