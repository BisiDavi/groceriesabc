import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import style from "../styles/sidebar.module.css";

interface ISigninform {
  email: string;
  password: string;
}

const SigninSidebar: React.FC<{}> = (): JSX.Element => {
  const initialValues: ISigninform = {
    email: "",
    password: ""
  };
  async function handleLogin() {
    const resp = await fetch("http:localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: "",
        password: ""
      })
    });
    const formJson = await resp.json();
  }
  return (
    <div className={style.sidebar}>
      <h3>Sign-in</h3>
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
              <ErrorMessage name="email" component="div" />
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
              <ErrorMessage name="email" component="div" />
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

      <div className="alternative mt-3 mb-5">
        <h6 className="text-center">Or do you want to Sign up ?</h6>
      </div>

      <div className="signup-login mt-5">
        <div className="m-auto">
          <Link href="/auth/signup">
            <a className="btn btn-outline-danger w-50">Sign up</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SigninSidebar;
