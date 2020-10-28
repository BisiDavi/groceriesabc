import React from "react";
import { siteNameEnvironment } from "../../components/siteEnv";
import { NextPageContext } from "next";
import { myGet } from "../api/getUser";

const Admin = (): JSX.Element => {
  return (
    <div className="admin-page">
      <h1> I am the admin page</h1>
    </div>
  );
};

export default Admin;

Admin.getInitialProps = async (ctx: NextPageContext) => {
  const userOrderJson = await myGet(`${siteNameEnvironment}/api/users`, ctx);
  console.log(userOrderJson)
  return { order: userOrderJson };
};
