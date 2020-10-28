import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastNotification = (props: any) => {
  const { status, toastText }: any = props;
  const notify = () => {
    if (status === "success") {
      toast.success(toastText, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    } else {
      toast.error(toastText, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    }
  };
  return (
    <div>
      {notify()}
      <ToastContainer />
    </div>
  );
};

export const signupAlert = (toastmessage: any): JSX.Element => {
  return toastmessage.name ? (
    <ToastNotification
      status="success"
      toastText={`Hi ${toastmessage.name},Thanks for signing in, you will be redirected to
          login page.`}
    />
  ) : (
    <ToastNotification status="error" toastText={toastmessage.message} />
  );
};

export const siginAlert = (toastmessage: any): JSX.Element => {
  return toastmessage.name ? (
    <ToastNotification
      status="success"
      toastText={`Hi ${toastmessage.name},you're logged in`}
    />
  ) : (
    <ToastNotification 
    status="warning" 
    toastText={toastmessage.message} 
    />
  );
};