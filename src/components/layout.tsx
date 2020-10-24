import React from "react";
import Head from "next/head";

const Layout = ({ children }): JSX.Element => {
  return (
    <>
      <div className="appLayout">
        <Head>
          <title>Welcome | Groceries store</title>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossOrigin="anonymous"
          />
        </Head>
        <header className="header">
          <p>
            Welcome to
            <span className="siteTitle"> ABC Groceries Store</span>
          </p>
        </header>
        {children}
        <footer className="footer">Copyright ABC Groceries© 2020</footer>
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
            margin-left: 350px;
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
            left: 23%;
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
