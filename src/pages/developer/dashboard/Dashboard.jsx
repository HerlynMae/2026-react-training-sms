import React from "react";
import Layout from "../Layout";
import Header from "../../../partials/Header";
import StatCard from "./StatCard";
import { FaArrowRight, FaUsers } from "react-icons/fa";
import { FaChalkboardUser } from "react-icons/fa6";
import useDocumentTitle from "../../../functions/custom-hooks/useDocumentTitle";
import { stats } from "../../json/status";
// import DataTable from "../../../components/StudentDataTable";
import { students } from "../../json/students";
// import StudentDataTable from "../../../components/StudentDataTable";
import StudentTable from "../student/StudentTable";

const Dashboard = () => {
  useDocumentTitle("Dashboard | School Management System");
  const totalStudents = students.length;
  return (
    <>
      <Layout menu="dashboard">
        {({ onToggle }) => (
          <>
            <Header
              title="Dashboard"
              description="Welcome back! Here's your school overview"
              onToggle={onToggle}
            />
            {/* cards */}
            <div className="px-8 py-6 grid grid-cols-1 xl:grid-cols-3 gap-6">
              {stats.map((stat) => (
                <StatCard key={stat.title} {...stat} />
              ))}
            </div>

            {/* students list */}

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

                <StudentTable students={students} />
              </div>
            </div>
          </>
        )}
      </Layout>
    </>
  );
};

export default Dashboard;
