import React, { useState, useEffect } from "react";
import UserInfo from "./UserInfo";
import Status from "./Status";

const Layout = props => {
  const [currentProject, setcurrentProject] = useState([]);

  useEffect(() => {
    getProjectCurrent();
  }, []);

  //get current projects, need to add boolean column
  const getProjectCurrent = async () => {
    const response = await fetch(`http://localhost:3001/api/v1/projects${1}`);
    const data = await response.json();
    setcurrentProject(data);
    console.log(currentProject);
  };
  return (
    <>
      <span className="text-muted">
        Dashboard <i className="uil uil-angle-down" />
      </span>
      <br></br>
      {/* <h3 className="font-weight-bold mt-2">Hello User</h3> */}
      <div className="row">
        <div className="col-sm">
          <UserInfo />
        </div>
        <div className="col-sm">
          <Status />
        </div>
      </div>
    </>
  );
};

export default Layout;
