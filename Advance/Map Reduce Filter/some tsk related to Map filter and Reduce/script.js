// Write a map() function to extract the names from an array of objects:
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];
// Expected output: ['Alice', 'Bob', 'Charlie']
users.map((username,index)=>{
return username.name
})


// Write a filter() function to find all even numbers in an array:

const numbers = [1, 2, 3, 4, 5, 6];
// Expected output: [2, 4, 6]

numbers.filter((number)=>{
  return number=number%2==0})



  // Write a reduce() function to calculate the total price of items in a cart:
  const cart = [
    { item: 'Laptop', price: 1000 },
    { item: 'Phone', price: 500 },
    { item: 'Tablet', price: 300 }
  ];
  // Expected output: 1800
  
  const total = cart.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price;
  }, 0);
  
  console.log(total); 


  // Task related to  Map Filetr and Reduce
  
// Filtered Students: An array of students with scores greater than 70.
// Uppercase Names: An array of the names of the filtered students in uppercase.
// Average Score: The average score of the filtered students.



  const students = [
    { name: 'Alice', age: 20, score: 85 },
    { name: 'Bob', age: 22, score: 75 },
    { name: 'Charlie', age: 23, score: 65 },
    { name: 'David', age: 21, score: 90 },
    { name: 'Eve', age: 20, score: 72 }
  ];
  
  const scoringguy=students.filter((student,index)=>{
   return student.score>70
  })
  console.log("scorinGuy:",scoringguy);

 const scoringguyname= scoringguy.map((studentname)=>studentname.name.toLocaleUpperCase())

 console.log("ScoringGuyNAme",scoringguyname);

 const totalscore=scoringguy.reduce((accumulator,current)=>{
  return accumulator+current.score
 },0)

 const averagescore=totalscore/scoringguy.length
 console.log("totalscore",totalscore);
 console.log("averagescore",averagescore);