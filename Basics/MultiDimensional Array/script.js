// Creating a 2D array (matrix)
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Accessing elements in a multidimensional array
console.log("Accessing Elements:");
console.log(matrix[0][0]); // Output: 1
console.log(matrix[1][2]); // Output: 6
console.log(matrix[2][1]); // Output: 8

// Iterating over a multidimensional array
console.log("Iterating Over Elements:");
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(`Element at [${i}][${j}]:`, matrix[i][j]);
  }
}

// Modifying elements in a multidimensional array
matrix[0][0] = 10;
matrix[1][2] = 20;

console.log("Modified Matrix:");
console.log(matrix);
// Output: 
// [
//   [10, 2, 3],
//   [4, 5, 20],
//   [7, 8, 9]
// ]


//TAsk is to create a tic tac toe using X,O,And spaceefor Null


const tictactoe=[
  ['X',null,null],
  [null,null,'O'],
  ['O',null,'X']
]
console.log(tictactoe);