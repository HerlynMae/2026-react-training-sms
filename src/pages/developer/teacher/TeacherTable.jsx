import React from "react";
import ResponsiveTable from "../../../components/ResponsiveTable";
import { FaEdit, FaTrash, FaUser } from "react-icons/fa";

const teachersColumns = [
  // {
  //   key: "teacherId",
  //   header: "",
  //   render: (teacher) => <p>{teacher.id}</p>,
  //   mobileLabel: null,
  // },
  {
    key: "name",
    header: "Name",
    render: (teacher) => (
      <>
        <div className="">
          <div className="flex items-center gap-3">
            <p className="hidden xl:block">{teacher.id}.</p>
            <div className="size-8 bg-blue-100 rounded-full flex items-center justify-center">
              <FaUser className="text-blue-600 text-sm" />
            </div>
            <div>
              <p className="font-medium">{teacher.name}</p>
              <p className="text-xs text-gray-500 block xl:hidden">
                {teacher.subject}
              </p>
            </div>
          </div>
        </div>
      </>
    ),
    mobileLabel: null,
  },

  {
    key: "subject",
    header: "Subject",
    render: (teacher) => <p>{teacher.subject}</p>,
    mobileLabel: null,
  },
  {
    key: "email",
    header: "Email",
    render: (teacher) => <p>{teacher.email}</p>,
    mobileLabel: "Email",
  },
  {
    key: "status",
    header: "Status",
    render: (teacher) => (
      <p className={`statusBadge status${teacher.status}`}>{teacher.status}</p>
    ),
    mobilePosition: "topRight",
  },
  {
    key: "actions",
    header: "Actions",
    render: (teacher) => (
      <>
        <div className="flex gap-2">
          <button className="cursor-pointer text-blue-600 hover:text-blue-800">
            <FaEdit />
          </button>
          <button className="cursor-pointer text-red-600 hover:text-red-800">
            <FaTrash />
          </button>
        </div>
      </>
    ),
    mobilePosition: "bottomRight",
  },
];

const TeacherTable = ({ teachers }) => {
  return (
    <>
      <ResponsiveTable data={teachers} columns={teachersColumns} />
    </>
  );
};

export default TeacherTable;
