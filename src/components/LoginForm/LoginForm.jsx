import { useId } from "react";
import { useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";

import { login } from "../../redux/auth/operations";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const emailFieldId = useId();
  const pswFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(login({ ...values }));

    action.resetForm();
  };

  //mikemike123@gmail.com

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="flex flex-col gap-10">
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
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
