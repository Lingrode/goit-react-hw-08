import { useId } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { addContact } from "../../redux/contactsOps";

import style from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const FormValidation = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").required("Name is required"),
  number: Yup.string()
    .matches(/^[\d\s+\-()]*$/, "Number cannot contain letters!")
    .min(5, "Too short!")
    .max(18, "Too Long!")
    .required("Number is required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ ...values }));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FormValidation}
    >
      <Form className={style.form}>
        <label className={style.label} htmlFor={nameFieldId}>
          Name
        </label>
        <Field id={nameFieldId} className={style.input} name="name" />
        <ErrorMessage
          className={style.messageName}
          name="name"
          component="span"
        />

        <label className={style.label} htmlFor={numberFieldId}>
          Number
        </label>
        <Field id={numberFieldId} className={style.input} name="number" />
        <ErrorMessage
          className={style.messageNumber}
          name="number"
          component="span"
        />

        <button className={style.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
