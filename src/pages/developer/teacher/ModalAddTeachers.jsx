import { queryData } from "@/functions/custom-hooks/queryData";
import { InputText } from "@/functions/FormInputs";
import { apiVersion } from "@/functions/functions-general";
import ModalWrapperSide from "@/partials/modal/ModalWrapperSide";
import ButtonSpinner from "@/partials/spinners/ButtonSpinner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Formik, Form } from "formik";
import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import * as Yup from "yup"; //for vaidation of form

const ModalAddTeachers = ({ itemEdit, setIsOpen }) => {
  const [animate, setAnimate] = React.useState("translate-x-full");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (values) =>
      queryData(
        itemEdit
          ? `${apiVersion}/controllers/developer/teachers/teachers.php?id=${itemEdit.teachers_aid}`
          : `${apiVersion}/controllers/developer/teachers/teachers.php`,
        itemEdit ? "PUT" : "POST",
        values,
      ),
    onSuccess: (data) => {
      if (data.success) {
        alert(`Successfully ${itemEdit ? "updated" : "added"}.`); //if create or update are successful, the alert will show the message and will close the modal after
        setIsOpen(false);
      } else {
        alert(data.error); //if the create or update are not successful, the alert will show an error message
      }
      queryClient.invalidateQueries({ queryKey: ["teachers"] }); //will refetch the data after you create or update the data and the result are successful
    },
  });

  //this will be the inital value for formik form
  //if you tend to edit the data it will show the record of an item
  const initVal = {
    teachers_id: itemEdit ? itemEdit.teachers_id : "",
    teachers_first_name: itemEdit ? itemEdit.teachers_first_name : "",
    teachers_middle_name: itemEdit ? itemEdit.teachers_middle_name : "",
    teachers_last_name: itemEdit ? itemEdit.teachers_last_name : "",
    teachers_subject: itemEdit ? itemEdit.teachers_subject : "",
    teachers_email: itemEdit ? itemEdit.teachers_email : "",
  };

  //validation if the fields are required or not
  const yupSchema = Yup.object({
    teachers_id: Yup.string().trim().required("Required"),
    teachers_first_name: Yup.string().trim().required("Required"),
    teachers_middle_name: Yup.string().trim().required("Required"),
    teachers_last_name: Yup.string().trim().required("Required"),
    teachers_subject: Yup.string().trim().required("Required"),
    teachers_email: Yup.string().trim().required("Required"),
  });

  const handleClose = () => {
    if (mutation.isPending) return; // if it is pending the modal will not close
    setAnimate("translate-x-full"); //this is the animation once you close the modal
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  React.useEffect(() => {
    setAnimate("translate-x-0"); //this is the animation once you open the modal
  }, []);

  return (
    <>
      <ModalWrapperSide handleClose={handleClose} className={`${animate}`}>
        <div className="flex justify-between mb-4 px-3 pt-2">
          <h3 className="text-black/80 font-medium text-sm">
            {itemEdit ? "Update" : "Add"} Teachers
          </h3>
          <button
            className="text-black/50 cursor-pointer"
            type="button"
            onClick={handleClose}
            disabled={mutation.isPending} //to delay the closing of the modal when you make an action
          >
            <FaTimesCircle className="text-sm" />
          </button>
        </div>
        <div className="modal-body">
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values) => {
              mutation.mutate(values); // you will be triggering the function
            }}
          >
            {(props) => {
              return (
                <Form className="h-full">
                  <div className="modal-form-container">
                    <div className="modal-container">
                      <div className="relative mb-6">
                        <InputText
                          label="Teacher ID"
                          name="teachers_id"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="relative mb-6">
                        <InputText
                          label="First Name"
                          name="teachers_first_name"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="relative mb-6">
                        <InputText
                          label="Middle Name"
                          name="teachers_middle_name"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="relative mb-6">
                        <InputText
                          label="Last Name"
                          name="teachers_last_name"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="relative mb-6">
                        <InputText
                          label="Subject"
                          name="teachers_subject"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="relative mb-6">
                        <InputText
                          label="Email"
                          name="teachers_email"
                          disabled={mutation.isPending}
                        />
                      </div>
                    </div>
                    <div className="modal-action">
                      <button
                        className="btn-modal-submit"
                        type="submit"
                        disabled={mutation.isPending || !props.dirty}
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
                        className="btn-modal-cancel"
                        type="reset"
                        onClick={handleClose}
                        disabled={mutation.isPending}
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

export default ModalAddTeachers;
