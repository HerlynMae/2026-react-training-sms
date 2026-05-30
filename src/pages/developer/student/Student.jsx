import React from "react";
import Header from "../../../partials/Header";
import Layout from "../Layout";
import { FaEdit, FaPlus, FaTrash, FaUser } from "react-icons/fa";
import useDocumentTitle from "../../../functions/custom-hooks/useDocumentTitle";
import StudentTable from "./StudentTable";
import ModalAddStudents from "./ModalAddStudents";
import { StoreContext } from "../../../store/StoreContext";
import { setIsAdd } from "../../../store/StoreAction";
import useQueryData from "@/functions/custom-hooks/useQueryData";
import { apiVersion } from "@/functions/functions-general";

//Open modal and set selected student
export const handleAction = (setIsOpen, setItemEdit, item) => {
  console.log(setIsOpen);
  setIsOpen(true); //opens modal
  setItemEdit(item); //stores selected item
};

//this is the whole page
const Student = () => {
  useDocumentTitle("Students | School Management System"); //Changes browser tab title
  const { store, dispatch } = React.useContext(StoreContext); //store - global data, dispatch - update global data
  const [itemEdit, setItemEdit] = React.useState(null); //Stores selected student for editing

  const { data: dataStudents } = useQueryData(
    `${apiVersion}/controllers/developer/students/students.php`,
    "get",
    "students",
  );

  const totalStudents = dataStudents?.data?.length || 0;

  return (
    <>
      {/* layout - sidebar */}
      <Layout menu="students">
        {({ onToggle }) => (
          <>
            <Header
              title="Student Management"
              description="Manage all student records"
              onToggle={onToggle}
            />

            {/* add student button */}

            <div className="px-8 py-6">
              {/* add student button */}
              <div className="flex justify-end items-center mb-6">
                <button
                  className="bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
                  onClick={() =>
                    handleAction(
                      (val) => dispatch(setIsAdd(val)),
                      setItemEdit,
                      null,
                    )
                  }
                >
                  <FaPlus /> Add Student
                </button>
              </div>

              {/* student list */}
              <div>
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  <StudentTable itemEdit={itemEdit} setItemEdit={setItemEdit} />
                  <div className="px-6 py-4 bg-gray-50 border-t flex justify-between">
                    <span className="text-sm text-gray-600">
                      {totalStudents} students
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Layout>

      {store.isAdd && (
        <ModalAddStudents
          itemEdit={itemEdit}
          setIsOpen={(val) => dispatch(setIsAdd(val))}
        />
      )}
    </>
  );
};

export default Student;
