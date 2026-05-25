import React from "react";
import Header from "../../../partials/Header";
import Layout from "../Layout";
import { FaEdit, FaPlus, FaTrash, FaUser } from "react-icons/fa";
import useDocumentTitle from "../../../functions/custom-hooks/useDocumentTitle";
import { students } from "../../json/students";
// import StudentDataTable from "../../../components/StudentDataTable";
import StudentTable from "./StudentTable";
import ModalAddStudents from "./ModalAddStudents";

const Student = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    setItemEdit(null);
    setIsOpen(true);
  };

  useDocumentTitle("Students | School Management System");

  const totalStudents = students.length;

  return (
    <>
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
                  onClick={handleAdd}
                >
                  <FaPlus /> Add Student
                </button>
              </div>

              {/* student list */}
              <div>
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  <StudentTable students={students} />
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

      {isOpen && <ModalAddStudents itemEdit={itemEdit} setIsOpen={setIsOpen} />}
    </>
  );
};

export default Student;
