import React from "react";
import Layout from "../Layout";
import useDocumentTitle from "../../../functions/custom-hooks/useDocumentTitle";
import Header from "../../../partials/Header";
import { FaUserTie } from "react-icons/fa";
import ClassCard from "./ClassCard";
import { classes } from "../../json/classes";

const Classes = () => {
  useDocumentTitle("Classes | School Management System");
  return (
    <>
      <Layout menu="classes">
        {({ onToggle }) => (
          <>
            <Header
              title=" Classes Organization"
              description=" Manage school classes and sections"
              onToggle={onToggle}
            />

            {/* note */}
            <div className="bg-white p-2 text-center shadow-sm">
              <small>
                Note: The list for all classes will be available soon.
              </small>
            </div>

            {/* filter */}
            <div className="flex  px-8 pt-6">
              <div className="flex items-center gap-2 ">
                <select className="filter-data">
                  <option>Grade 7</option>
                  <option>Grade 8</option>
                  <option>Grade 9</option>
                  <option>Grade 10</option>
                </select>
                <select className="filter-data">
                  <option>2025-2026</option>
                  <option>2024-2025</option>
                  <option>2023-2024</option>
                </select>
              </div>
            </div>

            {/* cards wrapper */}
            <div className="px-8 py-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* cards */}
              {classes.map((c) => (
                <ClassCard key={c.gradeSection} {...c} />
              ))}
            </div>
          </>
        )}
      </Layout>
    </>
  );
};

export default Classes;
