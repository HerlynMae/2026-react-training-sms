import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { queryData } from "../../../functions/custom-hooks/queryData";
import { apiVersion } from "../../../functions/functions-general";
import ModalWrapperSide from "../../../partials/modal/ModalWrapperSide";
import { FaTimesCircle } from "react-icons/fa";
import { Formik, Form } from "formik";
import { InputText } from "../../../functions/FormInputs";
import * as Yup from "yup"; //for validation of form
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";

const ModalAddStudents = ({ itemEdit, setIsOpen }) => {
  //this is to animate the modal when it opens and closes
  const [animate, setAnimate] = React.useState("translate-x-full");
  console.log("itemEdit", itemEdit);

  //this is ti refetch the reading data when update is successful
  const queryClient = useQueryClient();

  //this is the update or create function that will be called when the form is submitted
  const mutation = useMutation({
    //mutationFn is the function that will be called when the mutation is executed. It is an async function that will return a promise. The promise will be resolved with the data that is returned from the server. The data will be passed to the onSuccess callback function.
    mutationFn: async (values) =>
      queryData(
        itemEdit
          ? `${apiVersion}/controllers/developer/students/students.php?id=${itemEdit.students_id}`
          : `${apiVersion}/controllers/developer/students/students.php`, // create url
        itemEdit ? "PUT" : "POST", // post = create, put = update
        values, //the data that will be send to the server
      ),
    onSuccess: (data) => {
      if (data.success) {
        alert(`Successfully ${itemEdit ? "updated" : "added"}.`); //if the update or create is successful, show a success message and close the modal
        setIsOpen(false);
      } else {
        alert(data.error); //if the update or create is not successful, show an error message
      }
      queryClient.invalidateQueries({ queryKey: ["students"] }); //refetch the data after the update or create is successful
    },
  });

  //this is the initial values for the formik form
  //if item edit exist show all the records
  const initVal = {
    students_id: itemEdit ? itemEdit.students_id : "",
    students_first_name: itemEdit ? itemEdit.students_first_name : "",
    students_middle_name: itemEdit ? itemEdit.students_middle_name : "",
    students_last_name: itemEdit ? itemEdit.students_last_name : "",
    students_grade: itemEdit ? itemEdit.students_grade : "",
    students_section: itemEdit ? itemEdit.students_section : "",
  };
  //this is the validation schema for the formik form
  const yupSchema = Yup.object({
    students_id: Yup.string().trim().required("Required"),
    students_first_name: Yup.string().trim().required("Required"),
    students_middle_name: Yup.string().trim().required("Required"),
    students_last_name: Yup.string().trim().required("Required"),
    students_grade: Yup.string().trim().required("Required"),
    students_section: Yup.string().trim().required("Required"),
  });

  // this is the function to close the modal
  const handleClose = () => {
    if (mutation.isPending) return; // if the mutation is pending, do not close the modal
    setAnimate("translate-x-full"); // animate the modal to slide out
    setTimeout(() => {
      // wait for the animation to finish before closing the modal
      setIsOpen(false);
    }, 200);
  };

  React.useEffect(() => {
    setAnimate("translate-x-0"); // animate the modal to slide in when it opens
  }, []);

  return (
    <>
      <ModalWrapperSide handleClose={handleClose} className={`${animate}`}>
        <div className="flex justify-between mb-4  px-3 pt-2 ">
          <h3 className="text-black/80 font-medium text-sm">
            {itemEdit ? "Update" : "Add"} Student
          </h3>
          <button
            className=" text-black/50 cursor-pointer"
            type="button"
            onClick={handleClose}
            disabled={mutation.isPending}
          >
            <FaTimesCircle className="text-sm" />
          </button>
        </div>
        <div className="modal-body">
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              mutation.mutate(values); // execute the mutation function with the form values when the form is submitted
            }}
          >
            {(props) => {
              return (
                <Form className="h-full">
                  <div className="modal-form-container">
                    <div className="modal-container">
                      <div className="relative mb-6">
                        <InputText
                          label="Student ID"
                          name="students_id"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="relative mb-6">
                        <InputText
                          label="First Name"
                          name="students_first_name"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="relative mb-6">
                        <InputText
                          label="Middle Name"
                          name="students_middle_name"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="relative mb-6">
                        <InputText
                          label="Last Name"
                          name="students_last_name"
                          disabled={mutation.isPending}
                        />
                      </div>

                      <div className="relative mb-6">
                        <InputText
                          label="Grade"
                          name="students_grade"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="relative mb-6">
                        <InputText
                          label="Section"
                          name="students_section"
                          disabled={mutation.isPending}
                        />
                      </div>
                    </div>
                    <div className="modal-action">
                      <button
                        type="submit"
                        disabled={mutation.isPending || !props.dirty}
                        className="btn-modal-submit"
                      >
                        {mutation.isPending ? (
                          <ButtonSpinner />
                        ) : itemEdit ? (
                          "Save"
                        ) : (
                          "Add"
                        )}
                      </button>
                      <button
                        type="reset"
                        onClick={handleClose}
                        disabled={mutation.isPending}
                        className="btn-modal-cancel"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </ModalWrapperSide>
    </>
  );
};

export default ModalAddStudents;
