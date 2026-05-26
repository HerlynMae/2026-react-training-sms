import { FaEdit, FaTrash, FaUser } from "react-icons/fa";
import ResponsiveTable from "../../../components/ResponsiveTable";
import useQueryData from "../../../functions/custom-hooks/useQueryData";
import { apiVersion } from "../../../functions/functions-general";

const studentColumns = [
  {
    key: "name",
    header: "Name",
    render: (student) => (
      <>
        <div className="">
          <div className="flex items-center gap-3">
            <p className="hidden xl:block">{student.id}.</p>
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
    render: (student) => (
      <div className="flex gap-2">
        <button className="cursor-pointer text-blue-600 hover:text-blue-800">
          <FaEdit />
        </button>
        <button className="cursor-pointer text-red-600 hover:text-red-800">
          <FaTrash />
        </button>
      </div>
    ),
    mobilePosition: "bottomRight",
  },
];

const StudentTable = ({ students }) => {
  const {
    isLoading: isLoadingStudents,
    isFetching: isFetchingStudents,
    error: errorStudents,
    data: dataStudents,
  } = useQueryData(`${apiVersion}/controllers/developer/students/students.php`);
  ("get", "students");
  return (
    <ResponsiveTable
      isLoading={isLoadingStudents}
      isFetching={isFetchingStudents}
      error={errorStudents}
      data={students}
      columns={studentColumns}
    />
  );
};

export default StudentTable;
