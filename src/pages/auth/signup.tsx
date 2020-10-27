import React from "react";

import MainContent from "../../components/main";
import { Layout, SignupSidebar } from "../../imports";

const Signup = (): JSX.Element => {
  return (
    <div className="SignupSidebar">
      <Layout>
        <SignupSidebar />
        <MainContent />
      </Layout>
    </div>
  );
};

export default Signup;
