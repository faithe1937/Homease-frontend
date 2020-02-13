import React from "react";

const UserInfo = props => {
  // console.log(props.currentProject);
  return (
    <div
      className="card bg-white p-4 shadow"
      style={{ border: 0, height: 200 }}
    >
      <h3 className="text-black" style={{ fontSize: 30 }}>
        {props.project[0].name}
      </h3>
      <hr />
      <p className="text-black" style={{ fontSize: 20 }}>
        Invoice
      </p>
    </div>
  );
};
export default UserInfo;
