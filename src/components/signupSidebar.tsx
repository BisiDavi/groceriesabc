import React, { useState } from "react";
import Link from "next/link";
import { Formik, ErrorMessage, Form, Field } from "formik";
import { useRouter } from "next/router";
import style from "../styles/sidebar.module.css";
import { signupAlert } from "./toast";
import { FormExtra, Signup } from "./formAuth";

interface ISignupform {
  name: string;
  email: string;
  password: string;
}

const SignupSidebar: React.FC<{}> = () => {
  const [message, setMessage] = useState(null);
  const initialValues: ISignupform = {
    name: ``,
    email: ``,
    password: ``
  };

  const router = useRouter();

  return (
    <div className={style.sidebar}>
      <h3>Sign-up</h3>
      {JSON.stringify(message) === "null" ? (
        <div className="d-none">{JSON.stringify(message)}</div>
      ) : (
        <div className="sign-up">{signupAlert(message)}</div>
      )}
      <Formik
        initialValues={initialValues}
        validate={values => {
          const errors: any = {};
          if (!values.name) {
            errors.name = "Username Required";
          }
          if (!values.email) {
            errors.email = "Email Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email Address";
          }
          if (!values.password) {
            errors.password = "Password Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const formValues = Signup(values);
          setMessage(formValues);
          console.log(message, "onsubmit message");
          if (formValues) {
            return router.push("/auth/signin");
          }
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={`${style.form} signup-form p-3 bg-dark`}>
            <div className="form-group">
              <label
                className="float-left text-white"
                htmlFor="exampleInputEmail1"
              >
                Username
              </label>
              <Field
                name="name"
                type="name"
                className="form-control"
                id="exampleInputname"
                aria-describedby="nameHelp"
                placeholder="Enter username"
              />
              <ErrorMessage
                className="font-weight-bold text-danger"
                name="name"
                component="div"
              />
            </div>
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
              <ErrorMessage
                className="font-weight-bold text-danger"
                name="email"
                component="div"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
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
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>

      <FormExtra formType="Sign in" />
    </div>
  );
};

export default SignupSidebar;
