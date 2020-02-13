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
          <i className="uil uil-home h1"></i>
          {/* <img
            src="https://images.pexels.com/photos/1309897/pexels-photo-1309897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="logoestiam"
            style={{ height: 50 }}
          /> */}
        </div>
        <div className="p-2 bd-highlight align-self-center">
          <i className="uil uil-bell h2" />
        </div>
        <div className="p-2 bd-highlight align-self-center">
          <i className="uil uil-invoice h2"></i>
        </div>
        <div className="p-2 bd-highlight align-self-center">
          <img
            src="https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/09/dog-landing-hero-lg.jpg?bust=1536935129&width=1080"
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
