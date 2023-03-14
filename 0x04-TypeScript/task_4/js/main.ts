/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/React.ts" />
/// <reference path="subjects/Java.ts" />


const cTeacher: Subjects.Teacher = {
  firstName: "Val",
  lastName: "Maduagwu",
  experienceTeachingC: 10
}

const cpp = new Subjects.Cpp(cTeacher);
const react = new Subjects.React(cTeacher);
const java = new Subjects.Java(cTeacher);

console.log("C++")
console.log(cpp.getRequirements(), "\n", cpp.getAvailableTeacher())

console.log("Java")
console.log(java.getRequirements(), "\n", java.getAvailableTeacher())

console.log("React")
console.log(react.getRequirements(), "\n", react.getAvailableTeacher())
