import React from "react";
import { CartImg } from "../imports";

const MainContent = (): JSX.Element => {
  return (
    <div className="main-app">

      <img src={CartImg} alt="content-table" />

      <style jsx>
        {`
          .main-app img {
            width: 25% !important;
            margin-top: 150px;
            margin-left: 360px;
            z-index: 1000;
            position: absolute;
          }
        `}
      </style>
    </div>
  );
};

export default MainContent;
