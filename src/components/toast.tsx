import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastNotification(props:any) {
  const notify = () => toast(props.toastText);

  return (
    <div>
      <button onClick={notify}>{props.buttonText}</button>
      <ToastContainer />
    </div>
  );
}
