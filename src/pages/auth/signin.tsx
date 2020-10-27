import React from "react";
import MainContent from "../../components/main";
import { Layout, SigninSidebar } from "../../imports";

const Signin = (): JSX.Element => {
  return (
    <div className="SigninSidebar">
      <Layout>
        <SigninSidebar />
        <MainContent />
      </Layout>
    </div>
  );
};

export default Signin;
