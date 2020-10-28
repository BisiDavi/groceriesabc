import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/router";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";
import style from "../styles/sidebar.module.css";
import { signupAlert } from "./toast";
import { FormExtra, Signin } from "./formAuth";

interface ISigninform {
  email: string;
  password: string;
}

const SigninSidebar: React.FC<{}> = (): JSX.Element => {
  const [message, setMessage] = useState(null);

  const initialValues: ISigninform = {
    email: "",
    password: ""
  };

  const router = useRouter();

  return (
    <div className={style.sidebar}>
      <h3>Sign-in</h3>
      {JSON.stringify(message) === "null" ? (
        <span className="d-none null-text">{JSON.stringify(message)}</span>
      ) : (
        <div className="sign-in">{signupAlert(message)}</div>
      )}
      <Formik
        initialValues={initialValues}
        validate={values => {
          const errors: any = {};
          if (!values.email) {
            errors.email = "Email Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email Address";
          }
          if (!values.password) {
            errors.password = "Pasword Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const formValues = Signin(values);
          setMessage(formValues);
          if (formValues) {
            return router.push("/admin");
          }
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={`${style.form} signin-form p-3 bg-dark`}>
            <div className="form-group">
              <label
                className="float-left text-white"
                htmlFor="exampleInputEmail1"
              >
                Email address
              </label>
              <Field
                name="email"
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
              <ErrorMessage
                className="font-weight-bold text-danger"
                name="email"
                component="div"
              />
            </div>
            <div className="form-group">
              <label
                className="float-left text-white"
                htmlFor="exampleInputPassword1"
              >
                Password
              </label>
              <Field
                name="password"
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
              <ErrorMessage
                className="font-weight-bold text-danger"
                name="password"
                component="div"
              />
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>

      <FormExtra formType="Sign up" />
    </div>
  );
};

export default SigninSidebar;
