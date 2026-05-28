import {
  FaArchive,
  FaEdit,
  FaTrash,
  FaTrashRestore,
  FaUser,
} from "react-icons/fa";
import ResponsiveTable from "../../../components/ResponsiveTable";
import useQueryData from "../../../functions/custom-hooks/useQueryData";
import { apiVersion } from "../../../functions/functions-general";
import { handleAction } from "./Student";
import { StoreContext } from "../../../store/StoreContext";
import React from "react";
import {
  setIsAdd,
  setIsArchive,
  setIsDelete,
  setIsRestore,
} from "../../../store/StoreAction";

const studentColumns = [
  {
    key: "name",
    header: "Name",
    render: (student) => (
      <>
        <div className="">
          <div className="flex items-center gap-3">
            <p className="hidden xl:block">{student.id}</p>
            <div className="size-8 bg-blue-100 rounded-full flex items-center justify-center">
              <FaUser className="text-blue-600 text-sm" />
            </div>
            <div>
              <p className="font-medium">{student.name}</p>
              <p className="text-xs text-gray-500 xl:hidden">
                {student.studentId}
              </p>
            </div>
          </div>
        </div>
      </>
    ),
    mobileLabel: null,
  },
  {
    key: "studentId",
    header: "Student ID",
    render: (student) => <p>{student.studentId}</p>,
    mobileLabel: "Student ID",
  },
  {
    key: "gradeSection",
    header: "Grade & Section",
    render: (student) => (
      <>
        <div className="hidden xl:block">
          <p className="px-2 py-1 text-xs font-semibold rounded-lg bg-blue-100 text-blue-700 inline ">
            {student.gradeSection}
          </p>
        </div>
        <p className="font-medium xl:hidden">{student.gradeSection}</p>
      </>
    ),
    mobileLabel: "Grade & Section",
  },
  {
    key: "status",
    header: "Status",
    render: (student) => (
      <p className={`statusBadge status${student.status}`}>{student.status}</p>
    ),
    mobilePosition: "topRight",
  },
  {
    key: "actions",
    header: "Actions",
    render: (student) => {
      return (
        <div className="flex gap-2 mr-2">
          {student.students_is_active ? (
            <>
              <button
                className="cursor-pointer text-blue-600 hover:text-blue-800 tooltip-action"
                data-tooltip="Edit"
                onClick={() =>
                  handleAction(student.setIsAdd, student.setItemEdit, student)
                }
              >
                <FaEdit />
              </button>

              <button
                className="cursor-pointer text-orange-400 hover:text-orange-500 tooltip-action"
                data-tooltip="Archive"
                onClick={() =>
                  handleAction(
                    student.setIsArchive,
                    student.setItemEdit,
                    student,
                  )
                }
              >
                <FaArchive />
              </button>
            </>
          ) : (
            <>
              <button
                className="cursor-pointer text-orange-400 hover:text-orange-500 tooltip-action"
                data-tooltip="Restore"
                onClick={() =>
                  handleAction(
                    student.setIsRestore,
                    student.setItemEdit,
                    student,
                  )
                }
              >
                <FaTrashRestore />
              </button>
              <button
                className="cursor-pointer text-red-600 hover:text-red-800 tooltip-action"
                data-tooltip="Delete"
                onClick={() =>
                  handleAction(
                    student.setIsDelete,
                    student.setItemEdit,
                    student,
                  )
                }
              >
                <FaTrash />
              </button>
            </>
          )}
        </div>
      );
    },
    mobilePosition: "bottomRight",
  },
];

const StudentTable = ({ setItemEdit, itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const {
    isLoading: isLoadingStudents,
    isFetching: isFetchingStudents,
    error: errorStudents,
    data: dataStudents,
  } = useQueryData(
    `${apiVersion}/controllers/developer/students/students.php`, // api path
    "get", //method
    "students", //key
  );

  console.log("isLoadingStudents", isLoadingStudents);

  const studentArray =
    dataStudents?.data.map((item) => {
      return {
        ...item,
        id: item.students_aid,
        name: `${item.students_first_name} ${item.students_last_name}`,
        studentId: item.students_id,
        gradeSection: `${item.students_grade} - ${item.students_section}`,
        status: item.students_is_active ? "Active" : "Inactive",

        setIsAdd: (val) => dispatch(setIsAdd(val)),
        setIsArchive: (val) => dispatch(setIsArchive(val)),
        setIsRestore: (val) => dispatch(setIsRestore(val)),
        setIsDelete: (val) => dispatch(setIsDelete(val)),
        setItemEdit,
      };
    }) ?? [];

  return (
    <ResponsiveTable
      isLoading={isLoadingStudents}
      isFetching={isFetchingStudents}
      error={errorStudents}
      // data={students}
      data={studentArray}
      columns={studentColumns}
      dataItem={itemEdit}
      // queryKey="students" //for one record refetching
      queryKey={["students"]} // for one record refetching
      pathUrl={`/controllers/developer/students`} //this is for archive, restore, delete, path api
    />
  );
};

export default StudentTable;
