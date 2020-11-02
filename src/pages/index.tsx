import React from "react";

import MainContent from "../components/main";
import { connect } from "react-redux";
import { Layout, Sidebar } from "../imports";
import { IGroceryState } from "../store/types/types";

const Homepage = (props:any): JSX.Element => {
  return (
    <div className="homepage">
      <Layout>
        <Sidebar grocery={props.groceryData} />
        <MainContent grocery={props.groceryData} />
      </Layout>
    </div>
  );
};

const mapStateToProps = (state: IGroceryState) => {
  return {
    groceryData: state.inventory
  };
};

export default connect(mapStateToProps, null)(Homepage);
