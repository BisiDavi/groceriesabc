import React, { useState } from "react";
import Link from "next/link";
import style from "../styles/sidebar.module.css";

const SigninSidebar = (): JSX.Element => {
  return (
    <div className={style.sidebar}>
      <h3>Sign-in</h3>
      <form className="signin-form p-3 bg-dark">
        <div className="form-group">
          <label
            className="float-left text-white"
            htmlFor="exampleInputUsername"
          >
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputUsername"
            aria-describedby="emailHelp"
            placeholder="Enter your username"
          />
        </div>
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
