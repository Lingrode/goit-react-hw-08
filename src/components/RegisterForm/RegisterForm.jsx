import { useId } from "react";
import { Link, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

import { register } from "../../redux/auth/operations";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  name: Yup.string().min(2, "Too short!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too short!").required("Required"),
});

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
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ touched, errors }) => (
          <Form className="max-w-[500px] w-full flex flex-col rounded-lg px-10 py-15 relative bg-white shadow-xl">
            <label className="mb-1" htmlFor={nameFieldId}>
              Name
            </label>
            <Field name="name">
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
              className="text-red-500 text-sm absolute top-[150px]"
            />

            <label className="mb-1" htmlFor={emailFieldId}>
              E-mail
            </label>
            <Field name="email">
              {({ field }) => (
                <label
                  className={`input validator h-12 mb-8 w-full  ${
                    errors.email && touched.email ? "border-red-500" : ""
                  } `}
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
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                  </svg>
                  <input
                    {...field}
                    id={emailFieldId}
                    className="w-full h-12 text-lg"
                    type="email"
                    placeholder="mail@site.com"
                  />
                </label>
              )}
            </Field>
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm absolute top-[270px]"
            />

            <label className="mb-1" htmlFor={pswFieldId}>
              Password
            </label>
            <Field name="password">
              {({ field }) => (
                <label
                  className={`input validator h-12 mb-6 w-full ${
                    errors.password && touched.password ? "border-red-500" : ""
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
                      <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                      <circle
                        cx="16.5"
                        cy="7.5"
                        r=".5"
                        fill="currentColor"
                      ></circle>
                    </g>
                  </svg>
                  <input
                    {...field}
                    id={pswFieldId}
                    className="w-full text-lg"
                    type="password"
                    placeholder="Password"
                    minLength="8"
                  />
                </label>
              )}
            </Field>
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm absolute bottom-[170px]"
            />

            <p className="mb-9 text-base">
              Already have an account?{" "}
              <Link className="underline" to="/login">
                Login!
              </Link>
            </p>

            <button className="btn btn-lg btn-soft btn-accent" type="submit">
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
