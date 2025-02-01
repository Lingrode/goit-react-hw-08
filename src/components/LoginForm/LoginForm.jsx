import { useId } from "react";
import { useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";

import { login } from "../../redux/auth/operations";
import { Link } from "react-router";

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
    <div className="fixed flex items-center justify-center inset-0 ">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="max-w-[500px] w-full flex flex-col rounded-lg bg-[#ffc181] px-10 py-15">
          <label className="mb-2" htmlFor={emailFieldId}>
            E-mail
          </label>
          <Field
            className="input-style mb-5 h-[40px]"
            id={emailFieldId}
            type="email"
            name="email"
            placeholder="E-mail"
          />
          <label className="mb-2" htmlFor={pswFieldId}>
            Password
          </label>
          <Field
            className="mb-2 input-style h-[40px]"
            id={pswFieldId}
            type="password"
            name="password"
            placeholder="Password"
          />
          <p className="mb-7 text-base">
            Don&apos;t have an account?{" "}
            <Link className="underline" to="/register">
              Sign up!
            </Link>
          </p>
          <button className="button-style" type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
