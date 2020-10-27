import React, { useState } from "react";
import Link from "next/link";
import style from "../styles/sidebar.module.css";

const SignupSidebar = (): JSX.Element => {
  return (
    <div className={style.sidebar}>
      <h3>Sign-up</h3>
      <form className={`${style.form} signup-form p-3 bg-dark`}>
        <div className="form-group">
          <label className="float-left text-white" htmlFor="exampleInputEmail1">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
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
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

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
