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
    
# Difference Between `null` and "nullish" in JavaScript

1. `null`:
   - Definition: `null` is a special value in JavaScript that represents the intentional absence of any object value. It is one of the primitive types in JavaScript.
   - Use Case: It is often used to indicate that a variable has been explicitly set to have no value or no object.
   - Type: The type of `null` is `object` (this is considered a quirk of JavaScript).
   - Example:
     ```javascript
     let foo = null;
     console.log(foo); // null
     ```

2. Nullish:
   - Definition: "Nullish" refers to a group of two specific values: `null` and `undefined`. The term is used primarily in the context of the Nullish Coalescing Operator (`??`), which is designed to work with these two values.
   - Use Case: The Nullish Coalescing Operator is used to provide a default value when dealing with potentially `null` or `undefined` values. It is different from other operators like `||` because it only considers `null` and `undefined` as nullish values, while `||` considers any falsy value (e.g., `0`, `""`, `false`, etc.).
   - Example:
     ```javascript
     let foo = null ?? 'default';
     console.log(foo); // 'default'

     let bar = 0 ?? 'default';
     console.log(bar); // 0 (because 0 is not null or undefined)


# Difference Between `null` and `undefined` in JavaScript

1. `null`:
   - Definition: `null` is a special value in JavaScript that explicitly indicates the absence of any object value. It represents "nothing" or "no value."
   - Use Case: `null` is typically used to intentionally indicate that a variable should not have a value or that an object is absent.
   - Type: The type of `null` is `object`. This is considered a design error in JavaScript, but it's something to be aware of.
   - Example:
     ```javascript
     let foo = null;
     console.log(foo); // Output: null
     ```

2. `undefined`:
   - Definition: `undefined` is a primitive value automatically assigned to variables that have been declared but not yet assigned a value. It also represents the absence of a defined value.
   - Use Case: `undefined` is used to indicate that a variable has not been initialized, or a function does not return a value. It can also occur when accessing object properties that do not exist.
   - Type: The type of `undefined` is `undefined`.
   - Example:
     ```javascript
     let bar;
     console.log(bar); // Output: undefined

     let obj = {};
     console.log(obj.property); // Output: undefined (property does not exist)
     ```

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

.....*Important Notes*........

.Not Available in Arrow Functions

.Use Rest Parameters for Modern JavaScript

The arguments object is useful for handling functions with a variable number of arguments but is less common in modern JavaScript due to the flexibility provided by rest parameters.


