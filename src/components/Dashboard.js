import React from "react";
import Layout from "./Layout";
import LayoutBelow from "./LayoutBelow";

const DashBoard = props => {
  return (
    <>
      <div className="container mt-4">
        <Layout />
      </div>
      <div className="container mt-4 mb-4">
        <LayoutBelow />
      </div>
    </>
  );
};

export default DashBoard;
