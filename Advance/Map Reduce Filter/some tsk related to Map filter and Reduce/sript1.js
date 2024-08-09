
  // Task1:related to  Map Filetr and Reduce
  
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

























// Filtered Students: An array of students with scores greater than 70.
const scoringguy=students.filter((student,index)=>{
 return student.score>70
})
console.log("scorinGuy:",scoringguy);

// Uppercase Names: An array of the names of the filtered students in uppercase.
const scoringguyname= scoringguy.map((studentname)=>studentname.name.toLocaleUpperCase())

console.log("ScoringGuyNAme",scoringguyname);

// Average Score: The average score of the filtered students.

const totalscore=scoringguy.reduce((accumulator,current)=>{
return accumulator+current.score
},0)

const averagescore=totalscore/scoringguy.length
console.log("totalscore",totalscore);
console.log("averagescore",averagescore);