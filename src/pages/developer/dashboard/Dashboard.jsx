import React from "react";
import Layout from "../Layout";
import Header from "../../../partials/Header";
import StatCard from "./StatCard";
import {
  FaArrowRight,
  FaEdit,
  FaSchool,
  FaTrash,
  FaUser,
  FaUserGraduate,
  FaUsers,
} from "react-icons/fa";
import { FaChalkboardUser } from "react-icons/fa6";
import useDocumentTitle from "../../../functions/custom-hooks/useDocumentTitle";
import { stats } from "../../json/status";

import DataDashboard from "./DataDashboard";

const Dashboard = () => {
  useDocumentTitle("Dashboard | School Management System");

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
            <DataDashboard />
          </>
        )}
      </Layout>
    </>
  );
};

export default Dashboard;
