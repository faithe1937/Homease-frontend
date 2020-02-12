import React from "react";

const UserInfo = props => {
  return (
    <div
      className="card bg-white p-4 shadow"
      style={{ border: 0, height: 200 }}
    >
      <h3 className="text-black" style={{ fontSize: 30 }}>
        Project Name
      </h3>
      <hr />
      <p className="text-black" style={{ fontSize: 20 }}>
        Start Date and Finish Date
      </p>
    </div>
  );
};
export default UserInfo;
