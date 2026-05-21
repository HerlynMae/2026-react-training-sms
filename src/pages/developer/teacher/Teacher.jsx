import React from "react";
import Header from "../../../partials/Header";
import { teachers } from "../../json/teachers";
// import TeacherDataTable from "../../../components/TeacherDataTable";
import Layout from "../Layout";
import { FaEdit, FaPlus, FaTrash, FaUser } from "react-icons/fa";
import useDocumentTitle from "../../../functions/custom-hooks/useDocumentTitle";
import TeacherTable from "./TeacherTable";

const Teacher = () => {
  useDocumentTitle("Teachers | School Management System");
  const totalTeachers = teachers.length;
  return (
    <>
      <Layout menu="teachers">
        {({ onToggle }) => (
          <>
            <Header
              title=" Teachers Management"
              description="Manage all teacher records"
              onToggle={onToggle}
            />
            <div className="px-8 py-6">
              {/* add teachers button */}
              <div className="flex justify-end items-center mb-6">
                <button className="bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all flex items-center gap-2">
                  <FaPlus />
                  Add Teacher
                </button>
              </div>

              {/* teachers list */}

              <div>
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  <TeacherTable teachers={teachers} />
                </div>
              </div>
            </div>
          </>
        )}
      </Layout>
    </>
  );
};

export default Teacher;
