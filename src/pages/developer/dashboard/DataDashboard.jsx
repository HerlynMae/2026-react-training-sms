import React from "react";
import { FaArrowRight, FaEdit, FaTrash, FaUser, FaUsers } from "react-icons/fa";
import { students } from "../../json/students";

const DataDashboard = () => {
  const totalStudents = students.length;
  return (
    <>
      <div className="px-8 py-6">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-4 md:px-6 md:py-5 border-b border-gray-100 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <FaUsers className="text-blue-500 mr-2 text-lg" />
                Recent Students
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Latest {totalStudents} students added to the system
              </p>
            </div>
            <a
              href="./students.html"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium transition flex items-center"
            >
              View All <FaArrowRight className="ml-1" />
            </a>
          </div>

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
                {students.slice(0, 5).map((student) => (
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
                      <p className={`statusBadge status${student.status}`}>
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
                    <p className={`statusBadge status${student.status}`}>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataDashboard;
