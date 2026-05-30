import React from "react";
import Header from "../../../partials/Header";
import { teachers } from "../../json/teachers";
// import TeacherDataTable from "../../../components/TeacherDataTable";
import Layout from "../Layout";
import { FaEdit, FaPlus, FaTrash, FaUser } from "react-icons/fa";
import useDocumentTitle from "../../../functions/custom-hooks/useDocumentTitle";
import TeacherTable from "./TeacherTable";
import { StoreContext } from "@/store/StoreContext";
import { setIsAdd } from "@/store/StoreAction";
import ModalAddTeachers from "./ModalAddTeachers";
import useQueryData from "@/functions/custom-hooks/useQueryData";
import { apiVersion } from "@/functions/functions-general";

export const handleAction = (setIsOpen, setItemEdit, item) => {
  setIsOpen(true); //opens modal
  setItemEdit(item); //stores selected item
};

const Teacher = () => {
  useDocumentTitle("Teachers | School Management System");
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  //data is our props similar to what we deed on our table
  //dataTeachers is our custom variable
  const { data: dataTeachers } = useQueryData(
    `${apiVersion}/controllers/developer/teachers/teachers.php`, // where the request is sent.
    "get", // method
    "teachers", //will get the data
  );

  const totalTeachers = dataTeachers?.data?.length || 0; // this will count the list, if there is no record show 0

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
                <button
                  className="bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all flex items-center gap-2"
                  onClick={() =>
                    handleAction(
                      (val) => dispatch(setIsAdd(val)),
                      setItemEdit,
                      null,
                    )
                  }
                >
                  <FaPlus />
                  Add Teacher
                </button>
              </div>

              {/* teachers list */}

              <div>
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  <TeacherTable itemEdit={itemEdit} setItemEdit={setItemEdit} />
                  <div className="px-6 py-4 bg-gray-50 border-t flex justify-between">
                    <span className="text-sm text-gray-600">
                      {totalTeachers} teachers
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Layout>
      {store.isAdd && (
        <ModalAddTeachers
          itemEdit={itemEdit}
          setIsOpen={(val) => dispatch(setIsAdd(val))}
        />
      )}
    </>
  );
};

export default Teacher;
