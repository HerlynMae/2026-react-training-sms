import { FaSchool, FaUserGraduate } from "react-icons/fa";
import { FaChalkboardUser } from "react-icons/fa6";
import { students } from "./students";
import { teachers } from "./teachers";
import { classes } from "./classes";

const totalStudents = students.length;
const totalTeachers = teachers.length;
const totalClasses = classes.length;

export const stats = [
  {
    title: "Total Students",
    value: `${totalStudents}`,
    trend: true,
    trendLabel: "+12% from last month",
    icon: <FaUserGraduate />,
    color: "blue",
  },
  {
    title: "Total Teachers",
    value: `${totalTeachers}`,
    trend: true,
    trendLabel: "2% new this year",
    icon: <FaChalkboardUser />,
    color: "green",
  },
  {
    title: "Total Classes",
    value: `${totalClasses}`,
    trend: false,
    trendLabel: "Grade 7 to Grade 12",
    icon: <FaSchool />,
    color: "purple",
  },
];
