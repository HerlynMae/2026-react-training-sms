import React from "react";
import Layout from "../Layout";
import useDocumentTitle from "../../../functions/custom-hooks/useDocumentTitle";
import Header from "../../../partials/Header";

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
                Note: The list for all classes will be available soon.{" "}
              </small>
            </div>

            {/* */}
          </>
        )}
      </Layout>
    </>
  );
};

export default Classes;
