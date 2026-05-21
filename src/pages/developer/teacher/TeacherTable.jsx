import React from "react";
import ResponsiveTable from "../../../components/ResponsiveTable";
import { FaUser } from "react-icons/fa";

const teachersColumns = [
  {
    key: "name",
    header: "Name",
    render: (teacher) => (
      <div className="flex items-center gap-3">
        <div className="size-8 bg-blue-100 rounded-full flex items-center justify-center">
          <FaUser className="text-blue-600 text-sm" />
        </div>
        <p className="font-medium">{teacher.name}</p>
      </div>
    ),
    mobileLabel: null,
  },
  {
    key: "id",
    header: "Teacher ID"
  }
];

const TeacherTable = ({ teachers }) => {
  return (
    <>
      <ResponsiveTable data={teachers} columns={teachersColumns} />
    </>
  );
};

export default TeacherTable;
