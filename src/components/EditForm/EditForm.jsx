import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { editContact } from "../../redux/contacts/operations";
import { selectCurrentContact } from "../../redux/contacts/selectors";
import { clearCurrentContact } from "../../redux/contacts/slice";

import style from "./EditForm.module.css";

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

  const handleSubmit = (values, actions) => {
    if (values) {
      dispatch(
        editContact({ id: currentContact.id, contactData: { ...values } })
      );
      dispatch(clearCurrentContact());
    }

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: currentContact.name,
        number: currentContact.number,
      }}
      onSubmit={handleSubmit}
      validationSchema={FormValidation}
    >
      <Form className={style.form}>
        <label className={style.label} htmlFor={nameFieldId}>
          Name
        </label>
        <Field
          id={nameFieldId}
          className="input-style mb-5 h-[35px]"
          name="name"
        />
        <ErrorMessage
          className={style.messageName}
          name="name"
          component="span"
        />

        <label className={style.label} htmlFor={numberFieldId}>
          Number
        </label>
        <Field
          id={numberFieldId}
          className="input-style mb-8 h-[35px]"
          name="number"
        />
        <ErrorMessage
          className={style.messageNumber}
          name="number"
          component="span"
        />

        <div className="flex justify-center gap-10">
          <button className={style.btn} type="submit">
            Edit
          </button>
          <button
            className={style.btn}
            type="button"
            onClick={() => dispatch(clearCurrentContact())}
          >
            Cancel
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default EditForm;
