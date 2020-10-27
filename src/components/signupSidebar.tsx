import React, { useState } from "react";
import Link from "next/link";
import { Formik, ErrorMessage, Form, Field, FieldProps } from "formik";
import style from "../styles/sidebar.module.css";

interface ISignupform {
  username: string;
  email: string;
  password: string;
}

const SignupSidebar: React.FC<{}> = () => {
  const initialValues: ISignupform = {
    username: ``,
    email: ``,
    password: ``
  };
  return (
    <div className={style.sidebar}>
      <h3>Sign-up</h3>
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
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
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
                name="username"
                type="name"
                className="form-control"
                id="exampleInputname"
                aria-describedby="nameHelp"
                placeholder="Enter username"
              />
              <ErrorMessage name="username" component="div" />
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
              <ErrorMessage name="email" component="div" />
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
              <ErrorMessage name="password" component="div" />
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
