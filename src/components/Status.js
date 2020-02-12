import React from "react";
// need status prop from projects

const Status = props => {
  return (
    <>
      <div
        className="card p-4 shadow overflow-auto"
        style={{ border: 0, height: 200 }}
      >
        <h3 className="font-weight-bold">
          Drop down/ search bar to look for project
        </h3>
        <hr />
        <div className="connected-steps container">
          <div className="step bg-primary" />
          <div className="connector" />
          <div className="step" />
          <div className="connector" />
          <div className="step" />
          <div className="connector" />
          <div className="step" />
          <div className="connector" />
          <div className="step" />
        </div>
        <div className="d-flex text-muted justify-content-between">
          <span id="textRotate" className="text-primary font-weight-bold">
            Start
          </span>
          <span id="textRotate">Demolition</span>
          <span id="textRotate">Installation</span>
          <span id="textRotate">Clean Up</span>
          <span id="textRotate">Finish</span>
        </div>
      </div>
    </>
  );
};

export default Status;
