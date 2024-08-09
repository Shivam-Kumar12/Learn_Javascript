// Given an array of student objects, each with properties name, grades (an array of numbers), perform the following:

// Filter: Select students who have at least one grade below a passing threshold, e.g., 60.

// Map: Extract the students' names and their average grade.

// Reduce: Calculate the overall average grade of all students.

const students = [
  { name: 'Alice', grades: [80, 85, 90] },
  { name: 'Bob', grades: [70, 60, 50] },
  { name: 'Charlie', grades: [90, 95, 100] },
  { name: 'David', grades: [60, 70, 80] },
  { name: 'Eve', grades: [50, 55, 60] }
];
























const gradestudents = students.filter((student) => {
  return student.grades.some(grade => grade < 60)
})
console.log(gradestudents);

const studentdetail = students.map((student) =>
   { 
    const avveragegrades=student.grades.reduce((acc,grade)=>{
      return acc+grade/student.grades.length
    },0)
    return {name:student.name,avveragegrades} 

   })
   console.log(studentdetail);

   const totalAverageGrade = studentdetail.reduce((acc,student)=>
    {
  return acc+student.avveragegrades/studentdetail.length
   },0)
   console.log(totalAverageGrade);