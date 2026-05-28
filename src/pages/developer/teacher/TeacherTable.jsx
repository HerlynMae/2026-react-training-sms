import React from "react";
import ResponsiveTable from "../../../components/ResponsiveTable";
import {
  FaArchive,
  FaEdit,
  FaTrash,
  FaTrashRestore,
  FaUser,
} from "react-icons/fa";
import { handleAction } from "./Teacher";
import { StoreContext } from "@/store/StoreContext";
import useQueryData from "@/functions/custom-hooks/useQueryData";
import { apiVersion } from "@/functions/functions-general";

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
        <div className="flex gap-2 mr-2">
          {teacher.teachers_is_active ? (
            <>
              <button
                className="cursor-pointer text-blue-600 hover:text-blue-800 tooltip-action"
                data-tooltip="Edit"
                onClick={() =>
                  handleAction(teacher.setIsAdd, teacher.setItemEdit, teacher)
                }
              >
                <FaEdit />
              </button>
              <button
                className="cursor-pointer text-orange-400 hover:text-orange-500 tooltip-action"
                data-tooltip="Archive"
                onClick={() =>
                  handleAction(
                    teacher.setIsArchive,
                    teacher.setItemEdit,
                    teacher,
                  )
                }
              >
                <FaArchive />
              </button>
            </>
          ) : (
            <>
              <button
                className="cursor-pointer text-orange-400 hover:text-orange-500 tip-action"
                data-tooltip="Restore"
                onClick={() => {
                  handleAction(
                    teacher.setIsRestore,
                    teacher.setItemEdit,
                    teacher,
                  );
                }}
              >
                <FaTrashRestore />
              </button>
              <button
                className="cursor-pointer text-red-600 hover:text-red-800 tooltip-action"
                data-tooltip="Delete"
                onClick={() => {
                  handleAction(
                    teacher.setIsDelete,
                    teacher.setItemEdit,
                    teacher,
                  );
                }}
              >
                <FaTrash />
              </button>
            </>
          )}
        </div>
      </>
    ),
    mobilePosition: "bottomRight",
  },
];

const TeacherTable = ({ setItemEdit, itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const {
    isLoading: isLoadingTeachers,
    isFetching: isFetchingTeachers,
    error: errorTeachers,
    data: dataTeachers,
  } = useQueryData(
    `${apiVersion}/controllers/developer/teachers/teachers.php`,
    "get",
    "teachers",
  );

  const teachersArray = dataTeachers?.data.map((item) => {
    return {
      ...item,
      id: item.teachers_aid,
      name: `${item.teachers_first_name} ${item.teachers_last_name}`,
      subject: `${item.teachers_subject}`,
      email: `${item.teachers_email}`,
      status: item.teachers_is_active ? "Active" : "Inactive",
    };
  });

  return (
    <>
      <ResponsiveTable data={teachers} columns={teachersColumns} />
    </>
  );
};

export default TeacherTable;
