import React from "react";
import UserInfo from "./UserInfo";
import Status from "./Status";

const Layout = props => {
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
