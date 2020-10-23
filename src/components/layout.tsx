import React from "react";

const Layout = ({ children }): JSX.Element => {
  return (
    <>
      <div className="appLayout">
        <header className="header">
          <p>
            Welcome to
            <span className="siteTitle"> Iya Tawa Olounje</span>
          </p>
        </header>
        {children}
        <footer className="footer">Copyright Iya Tawa Olounje© 2020</footer>
      </div>
      <style jsx>
        {`
          .appLayout {
            width: 100vw;
            height: 100vh !important;
            background: rgb(20, 10, 100);
          }
          .header {
            display: flex;
            margin: auto;
            height: 70px;
            background: white;
            box-shadow: 3px 5px 10px gray;
          }
          .header p {
            display: flex;
            margin: auto;
            font-weight: bold;
            font-size: 25px;
          }
          .siteTitle {
            font-style: italic;
            color: blue;
            margin-left: 7px;
            margin-top: 2px;
            padding: 0 10px;
            border: 1px solid black;
            background: rgba(10, 55, 25, 0.2);
          }
          .footer {
            position: fixed;
            left: 32%;
            font-style: italic;
            font-size: 30px;
            bottom: 20px;
            color: white;
          }
        `}
      </style>
    </>
  );
};

export default Layout;
