import React, { useContext } from "react";
import Layout from "./Layout";
import LayoutBelow from "./LayoutBelow";
import { ProjectContext, UserContext } from "../context/Context";
//parent of one project

const DashBoard = () => {
  const [projects, setProjects] = useContext(ProjectContext);
  const [userr, setUser] = useContext(UserContext);

  console.log(projects);

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
