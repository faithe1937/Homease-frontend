import React from "react";
import "../App.css";
// import { Menu } from "semantic-ui-react";
// import { Link } from "react-router-dom";

export default prop => {
  return (
    <>
      <div
        className="d-flex bd-highlight p-4 shadow"
        style={{ backgroundColor: "#FFF" }}
      >
        <div className="p-2 flex-grow-1 bd-highlight align-self-center">
          <img
            src="https://cdn.dribbble.com/users/59947/screenshots/7304926/media/869beb3d15924c36781a6eacd03c5b2d.jpg"
            alt="logoestiam"
            style={{ height: 35 }}
          />
        </div>
        <div className="p-2 bd-highlight align-self-center">
          <i className="uil uil-bell h2" />
        </div>
        <div className="p-2 bd-highlight align-self-center">
          <img
            src={Image}
            alt="imageprofil"
            className="rounded-circle"
            style={{ height: 40, width: 40 }}
          />
        </div>
        <div className="p-2 bd-highlight align-self-center">
          <span className="text-muted">
            User <i className="uil uil-angle-down" />
          </span>
        </div>
      </div>
    </>
  );
};
