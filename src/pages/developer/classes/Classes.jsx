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
