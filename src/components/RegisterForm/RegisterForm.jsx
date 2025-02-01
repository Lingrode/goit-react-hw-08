import { useId } from "react";
import { Link, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";

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
  const navigate = useNavigate();

  const handleSubmit = (values, action) => {
    dispatch(register({ ...values }))
      .unwrap()
      .then(() => navigate("/"));

    action.resetForm();
  };

  //mikemike123@gmail.com

  return (
    <div className="fixed flex items-center justify-center inset-0 ">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="max-w-[500px] w-full flex flex-col rounded-lg bg-[#ffc181] px-10 py-15">
          <label className="mb-2" htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className="input-style mb-5 h-[40px]"
            id={nameFieldId}
            type="text"
            name="name"
            placeholder="Name"
          />
          <label className="mb-3" htmlFor={emailFieldId}>
            E-mail
          </label>
          <Field
            className="input-style mb-5 h-[40px]"
            id={emailFieldId}
            type="email"
            name="email"
            placeholder="E-mail"
          />
          <label className="mb-3" htmlFor={pswFieldId}>
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
            Already have an account?{" "}
            <Link className="underline" to="/login">
              Login!
            </Link>
          </p>
          <button className="button-style" type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
