import React, { useState, useEffect } from "react";
import UserInfo from "./UserInfo";
import Status from "./Status";

const Layout = props => {
  const user = localStorage.getItem("user_id");
  const username = localStorage.getItem("name");
  const [currentProjects, setcurrentProjects] = useState([]);
  console.log(user.type);
  console.log(currentProjects);

  useEffect(async () => {
    const response = await fetch(`http://localhost:3001/api/v1/projects`);
    const data = await response.json();
    const proj = data.filter(project => project.homeowner_id == user);
    setcurrentProjects(proj);
  }, []);

  //get current projects, need to add boolean column
  const getProjectCurrent = async () => {
    const response = await fetch(`http://localhost:3001/api/v1/projects`);
    const data = await response.json();
    const proj = data.filter(project => project.homeowner_id == user);
    setcurrentProjects(proj);
  };

  const sendProps = () => {
    if (currentProjects.length > 0) {
      console.log(currentProjects);
      return <UserInfo project={currentProjects} />;
    }
  };

  return (
    <>
      <span className="text-muted">
        Dashboard <i className="uil uil-angle-down" />
      </span>
      <br></br>
      {/* <h3 className="font-weight-bold mt-2">Hello User</h3> */}
      <div className="row">
        <div className="col-sm">{sendProps()}</div>
        <div className="col-sm">
          <Status />
        </div>
      </div>
    </>
  );
};

export default Layout;
