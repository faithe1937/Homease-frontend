import React from "react";
import "../App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProfileNav from "./ProfileNav";
import Projects from "./Projects"; //ProjectList -> ProjectCard
import UserLogin from "./UserLogin";
import UserSignUp from "./UserSignUp";
import Messages from "./Messages";
import Photos from "./Photos";
import Dashboard from "./Dashboard";
import Invoice from "./Invoice";
import Welcome from "./Welcome";
import Context from "../context/Context";
// //
// import Layout from "./Layout";
// import LayoutBelow from "./LayoutBelow";
import "../styles.css";

function App() {
  return (
    <>
      <Router>
        <Context>
          <ProfileNav />
          <Route exact path="/" component={Welcome} />
          <Route exact path="/UserSignUp" component={UserSignUp} />
          <Route exact path="/UserLogin" component={UserLogin} />
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/Messages" component={Messages} />
          <Route exact path="/Photos" component={Photos} />
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/Invoice" component={Invoice} />
        </Context>
      </Router>
    </>
  );
}

export default App;
