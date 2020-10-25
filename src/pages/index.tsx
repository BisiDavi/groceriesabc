import React, { useState } from "react";

import MainContent from "../components/main";
import { Layout, Sidebar } from "../imports";

const Homepage = (): JSX.Element => {
  return (
    <div className="homepage">
      <Layout>
        <Sidebar />
        <MainContent />
      </Layout>
    </div>
  );
};

export default Homepage;
