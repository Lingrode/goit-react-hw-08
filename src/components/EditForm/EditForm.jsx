import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Loader from "../Loader";

import { editContact } from "../../redux/contacts/operations";
import {
  selectCurrentContact,
  selectLoading,
} from "../../redux/contacts/selectors";
import { clearCurrentContact } from "../../redux/contacts/slice";

const FormValidation = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").required("Name is required"),
  number: Yup.string()
    .matches(/^[\d\s+\-()]*$/, "Number cannot contain letters!")
    .min(5, "Too short!")
    .max(18, "Too Long!")
    .required("Number is required"),
});

const EditForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();
  const currentContact = useSelector(selectCurrentContact);
  const isLoading = useSelector(selectLoading);

  const handleSubmit = (values, actions) => {
    if (values) {
      dispatch(
        editContact({ id: currentContact.id, contactData: { ...values } })
      );
      dispatch(clearCurrentContact());
    }

    actions.resetForm();
  };

  if (isLoading) return <Loader />;

  return (
    <Formik
      initialValues={{
        name: currentContact.name,
        number: currentContact.number,
      }}
      onSubmit={handleSubmit}
      validationSchema={FormValidation}
    >
      {({ touched, errors }) => (
        <Form className="bg-base-200 max-w-[350px] px-6 py-7 rounded-xl flex flex-col relative mb-12 shadow-lg text-accent">
          <label className="mb-1 text-xl" htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            id={nameFieldId}
            className="input-style mb-5 h-[35px]"
            name="name"
          >
            {({ field }) => (
              <label
                className={`input validator h-12 mb-8  w-full ${
                  errors.name && touched.name ? "border-red-500" : ""
                }`}
              >
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </g>
                </svg>
                <input
                  {...field}
                  id={nameFieldId}
                  className="w-full text-lg font-light"
                  type="text"
                  placeholder="Name"
                />
              </label>
            )}
          </Field>
          <ErrorMessage
            name="name"
            component="div"
            className="text-red-500 text-sm absolute top-[108px]"
          />

          <label className="mb-1 text-xl" htmlFor={numberFieldId}>
            Phone
          </label>
          <Field name="number">
            {({ field }) => (
              <label
                className={`input validator h-12 mb-12 w-full ${
                  errors.number && touched.number ? "border-red-500" : ""
                }`}
              >
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                >
                  <g fill="none">
                    <path
                      d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z"
                      fill="currentColor"
                    ></path>
                  </g>
                </svg>
                <input
                  {...field}
                  id={numberFieldId}
                  type="tel"
                  className="w-full text-lg font-light"
                  placeholder="Phone"
                />
              </label>
            )}
          </Field>
          <ErrorMessage
            name="number"
            component="div"
            className="text-red-500 text-sm absolute bottom-[102px]"
          />

          <div className="flex justify-center gap-10">
            <button className="btn btn-lg btn-outline btn-accent" type="submit">
              Edit
            </button>
            <button
              className="btn btn-lg btn-outline"
              type="button"
              onClick={() => dispatch(clearCurrentContact())}
            >
              Cancel
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EditForm;
