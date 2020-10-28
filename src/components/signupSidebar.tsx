import React, { useState } from "react";
import Link from "next/link";
import { Formik, ErrorMessage, Form, Field } from "formik";
import style from "../styles/sidebar.module.css";
import ToastNotification from "./toast";

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
  async function handleLogin(formValues: ISignupform) {
    const resp = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formValues)
    });
    const formJson = await resp.json();
    setMessage(formJson);
    console.log("formJson", formJson);
  }
  return (
    <div className={style.sidebar}>
      <h3>Sign-up</h3>
      {JSON.stringify(message) === "null" ? (
        <div className="d-none">{JSON.stringify(message)}</div>
      ) : (
        <div className="signed">
          <ToastNotification
            toastText={`Hi ${message.name},Thanks for signing in, you will be redirected to
          login page.`}
          />
        </div>
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
          setTimeout(() => {
            handleLogin(values);
            setSubmitting(false);
          }, 400);
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

      <div className="alternative mt-3 mb-5">
        <h6 className="text-center">Or do you want to Sign in?</h6>
      </div>

      <div className="signup-login mt-5">
        <div className="m-auto">
          <Link href="/auth/signin">
            <a className="btn btn-outline-primary w-50">Sign in</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupSidebar;
