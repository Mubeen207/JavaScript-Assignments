let students = [
  { name: "Ali", age: 20, marks: 80, city: "Karachi" },
  { name: "Sara", age: 22, marks: 95, city: "Lahore" },
  { name: "Mubeen", age: 19, marks: 45, city: "Karachi" },
  { name: "Hina", age: 21, marks: 60, city: "Islamabad" },
];
//--------------------------------------------------------------------------------------
let processedStudents = students.map((student) => {
  const { name, marks, ...rest } = student;
  const passed = marks >= 50;
  console.log("Mapping student:", name, "Passed?", passed);
  return { name, marks, passed, ...rest };
});
//--------------------------------------------------------------------------------------
let passedStudents = processedStudents.filter((s) => {
  console.log("Filtering student:", s.name, "Passed?", s.passed);
  return s.passed;
});
//--------------------------------------------------------------------------------------
let averageMarks = passedStudents.reduce((acc, s, i, arr) => {
  console.log(`Reducing student ${s.name}: acc = ${acc}`);
  return acc + s.marks / arr.length;
}, 0);
console.log("Average Marks of Passed Students:", averageMarks);
//--------------------------------------------------------------------------------------
function gradeEvaluator(passingMark) {
  return function (marks) {
    console.log("Closure checking marks:", marks, "Passing mark:", passingMark);
    return marks >= passingMark ? "Pass" : "Fail";
  };
}
//--------------------------------------------------------------------------------------
const evaluate = gradeEvaluator(50);
processedStudents.forEach((s) => {
  console.log(s.name, "Grade:", evaluate(s.marks));
});
