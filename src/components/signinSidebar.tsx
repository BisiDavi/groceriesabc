import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/router";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";
import style from "../styles/sidebar.module.css";
import ToastNotification from "./toast";
import LoadAdminPage from "./loadAdminPage";
import { siteNameEnvironment } from "./siteEnv";

interface ISigninform {
  email: string;
  password: string;
}

const SigninSidebar: React.FC<{}> = (): JSX.Element => {
  const [message, setMessage] = useState(null);
  const useUser = () => ({ user: null, loading: false });
  const { user, loading } = useUser();

  useEffect(() => {
    if (!(user || loading)) {
      router.push("/admin");
    }
  }, [user, loading]);
  const initialValues: ISigninform = {
    email: "",
    password: ""
  };

  const router = useRouter();

  async function handleLogin(formValues: ISigninform) {
    const resp = await fetch(`${siteNameEnvironment}/api/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formValues, null, 2)
    });
    const formJson = await resp.json();
    setMessage(formJson);
  }

  return (
    <div className={style.sidebar}>
      <h3>Sign-in</h3>
      {JSON.stringify(message) === "null" ? (
        <span className="d-none null-text">{JSON.stringify(message)}</span>
      ) : message.name ? (
        <ToastNotification toastText={`Hi ${message.name},you're logged in`} />
      ) : (
        <ToastNotification toastText={message} />
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
          handleLogin(values);
          router.push("/admin");
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
