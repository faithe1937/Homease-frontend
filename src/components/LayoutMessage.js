import React from "react";
import Messages from "./Messages";

const LayoutMessage = props => {
  return (
    <>
      <span className="text-muted mt-4 mb-4">
        recado <i className="uil uil-angle-down" />
      </span>
      <div className="card p-4 shadow mt-2" style={{ border: 0, height: 560 }}>
        <div className="d-flex bd-highligh ">
          <h3 className="bd-highlight w-100 font-weight-bold">Messages</h3>
          <button className="btn btn-dark">All</button>
        </div>
        <hr />
        <div>
          <div className="text-center"></div>
          {/* <h4 className="text-center font-weight-bold">alert ?</h4> */}
          <span className="text-muted" style={{ fontSize: 12 }}>
            <Messages />
          </span>
        </div>
      </div>
    </>
  );
};

export default LayoutMessage;
