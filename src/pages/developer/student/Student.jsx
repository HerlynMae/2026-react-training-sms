import React from "react";
import Header from "../../../partials/Header";
import Layout from "../Layout";
import { FaEdit, FaPlus, FaTrash, FaUser } from "react-icons/fa";
import useDocumentTitle from "../../../functions/custom-hooks/useDocumentTitle";
import { students } from "../../json/students";

const Student = () => {
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
                <button className="bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all flex items-center gap-2">
                  <FaPlus /> Add Student
                </button>
              </div>

              {/* student list */}
              <div>
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  {/* tablet */}
                  <div className="overflow-x-auto hidden xl:block">
                    <table className="w-full">
                      {/* <!-- title --> */}
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                            Name
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                            Student ID
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                            Grade & Section
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      {/* <!-- data --> */}
                      <tbody className="divide-y divide-gray-100">
                        {students.map((student) => (
                          <tr key={student.id}>
                            <td className="px-6">
                              <div className="flex items-center gap-3">
                                <span>{student.id}</span>
                                <div className="size-8 bg-blue-100 rounded-full flex items-center justify-center">
                                  <span className="text-blue-600 text-sm">
                                    <FaUser />
                                  </span>
                                </div>
                                <p className="font-medium">{student.name}</p>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <p>{student.studentId}</p>
                            </td>
                            <td className="px-6 py-4">
                              <p className="px-2 py-1 text-xs font-semibold rounded-lg bg-blue-100 text-blue-700 inline">
                                {student.gradeSection}
                              </p>
                            </td>
                            <td className="px-6 py-4">
                              <p
                                className={`statusBadge status${student.status}`}
                              >
                                {student.status}
                              </p>
                            </td>
                            <td className="px-6 py-4">
                              <button className="cursor-pointer text-blue-600 hover:text-blue-800 mr-2">
                                <FaEdit />
                              </button>
                              <button className="cursor-pointer text-red-600 hover:text-red-800">
                                <FaTrash />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="px-6 py-4 bg-gray-50 border-t flex justify-between">
                      <span className="text-sm text-gray-600">
                        {totalStudents} students
                      </span>
                    </div>
                  </div>

                  {/* mobile */}
                  <div className="block xl:hidden">
                    <div className="divide-y divide-gray-100">
                      {/* cards */}
                      {students.map((student) => (
                        <div className="p-4" key={student.id}>
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-3">
                              <div className="size-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-blue-600 text-sm">
                                  <FaUser />
                                </span>
                              </div>
                              <div>
                                <p className="font-semibold text-gray-800">
                                  {student.name}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {student.studentId}
                                </p>
                              </div>
                            </div>
                            <p
                              className={`statusBadge status${student.status}`}
                            >
                              {student.status}
                            </p>
                          </div>
                          <div className="flex justify-between items-center">
                            {/* <!-- grade --> */}
                            <div>
                              <small className="text-xs text-gray-500">
                                Grade & Section
                              </small>
                              <p className="text-sm font-medium text-gray-700">
                                {student.gradeSection}
                              </p>
                            </div>
                            {/* <!--action  --> */}
                            <div className="flex gap-3">
                              <button className="cursor-pointer text-blue-600 hover:text-blue-800 mr-2">
                                <FaEdit />
                              </button>
                              <button className="cursor-pointer text-red-600 hover:text-red-800">
                                <FaTrash />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                      ;
                    </div>
                    <div className="px-6 py-4 bg-gray-50 border-t flex justify-between">
                      <span className="text-sm text-gray-600">
                        {totalStudents} students
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Layout>
    </>
  );
};

export default Student;
