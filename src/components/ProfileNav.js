import React from "react";
import "../App.css";
import Messages from "./Messages";
import Photos from "./Photos";
import Dashboard from "./Dashboard";
import Invoice from "./Invoice";
import Projects from "./Projects";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

// import { Menu } from "semantic-ui-react";
// import { Link } from "react-router-dom";

const ProfileNav = () => {
  return (
    <>
      <div
        className="d-flex bd-highlight p-4 shadow"
        style={{ backgroundColor: "#FFF" }}
      >
        <div className="p-2 flex-grow-1 bd-highlight align-self-center">
          <Link to={"/"}>
            <i className="uil uil-home h1"></i>
          </Link>
          {/* <img
            src="https://images.pexels.com/photos/1309897/pexels-photo-1309897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="logoestiam"
            style={{ height: 50 }}
          /> */}
        </div>

        <div className="p-2 bd-highlight align-self-center">
          <Link to={"/messages"}>
            <i className="uil uil-bell h2" />
          </Link>
        </div>
        <div className="p-2 bd-highlight align-self-center">
          <Link to={"/invoice"}>
            <i className="uil uil-invoice h2"></i>
          </Link>
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
      <Route exact path="/Projects" component={Projects} />
      <Route exact path="/Messages" component={Messages} />
      <Route exact path="/Photos" component={Photos} />
      <Route exact path="/Dashboard/:id" component={Dashboard} />
      {/* <Route exact path="/Projects/:id" component={Dashboard} /> */}
      <Route exact path="/Invoice" component={Invoice} />
    </>
  );
};
export default ProfileNav;
