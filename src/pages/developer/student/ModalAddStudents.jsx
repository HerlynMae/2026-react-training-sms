import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { queryData } from "../../../functions/custom-hooks/queryData";
import { apiVersion } from "../../../functions/functions-general";
import ModalWrapperSide from "../../../partials/modal/ModalWrapperSide";
import { FaTimesCircle } from "react-icons/fa";
import { Formik } from "formik";
import { Form } from "react-router-dom";
import { InputText } from "../../../functions/FormInputs";

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
        `${apiVersion}/controller-developer-students.php`, // create url
        "POST", // post = create
        values, //the data that will be send to the server
      ),
    onSuccess: (data) => {
      if (data.success) {
        alert(data.message); //if the update or create is successful, show a success message and close the modal
        setIsOpen(false);
      } else {
        alert(data.error); //if the update or create is not successful, show an error message
      }
      queryClient.invalidateQueries(["students"]); //refetch the data after the update or create is successful
    },
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
          <h3 className="text-black/80 font-medium text-sm">Add Student</h3>
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
            initialValues={{}}
            validationSchema={null}
            onSubmit={() => {}}
          >
            {(props) => {
              return (
                <Form>
                  <div className="relative mb-6">
                    <InputText
                      label="Student ID"
                      name="student_id"
                      disabled={mutation.isPending}
                    />
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
