import { students } from "./students";
import { teachers } from "./teachers";

export const classes = [
  {
    grade: "Grade 7",
    section: "Section A",
    gradeSection: "Grade 7 - Section A",
    name: teachers.find((teacher) => teacher.id === 1)?.name,
    value: students.filter((student) => student.gradeSection === "Grade 7 - A")
      .length,
  },
  {
    grade: "Grade 9",
    section: "Section B",
    gradeSection: "Grade 9 - Section B",
    name: teachers.find((teacher) => teacher.id === 3)?.name,
    value: students.filter((student) => student.gradeSection === "Grade 9 - B")
      .length,
  },
  {
    grade: "Grade 10",
    section: "Section A",
    gradeSection: "Grade 10 - Section A",
    name: teachers.find((teacher) => teacher.id === 2)?.name,
    value: students.filter((student) => student.gradeSection === "Grade 10 - A")
      .length,
  },
];
