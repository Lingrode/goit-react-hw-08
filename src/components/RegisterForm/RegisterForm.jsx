import { Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const RegisterForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const pswFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(register({ ...values }));

    action.resetForm();
  };

  //mikemike123@gmail.com

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="flex flex-col gap-10">
        <label htmlFor={nameFieldId}>Name</label>
        <Field id={nameFieldId} type="text" name="name" placeholder="Name" />
        <label htmlFor={emailFieldId}>E-mail</label>
        <Field
          id={emailFieldId}
          type="email"
          name="email"
          placeholder="E-mail"
        />
        <label htmlFor={pswFieldId}>Password</label>
        <Field
          id={pswFieldId}
          type="password"
          name="password"
          placeholder="Password"
        />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
