import React from "react";
import "../App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppNav from "./AppNav";
import ProjectBoard from "./ProjectBoard"; //ProjectList -> ProjectCard
import UserLogin from "./UserLogin";
import UserSignUp from "./UserSignUp";
import Messages from "./Messages";
import Photos from "./Photos";
import Projects from "./Projects";
import Invoice from "./Invoice";
import Welcome from "./Welcome";
import UserContextProvider from "../context/UserContext";
//
import Layout from "./Layout";
import LayoutBelow from "./LayoutBelow";
import "../styles.css";

function App() {
  return (
    <>
      <UserContextProvider>
        <Router>
          <AppNav />{" "}
          <>
            <div className="container mt-4">
              <Layout />
            </div>
            <div className="container mt-4 mb-4">
              <LayoutBelow />
            </div>
          </>
          <Switch>
            {/* <Route exact path="/" component={Welcome} />
            <Route exact path="/ProjectBoard" component={ProjectBoard} />
            <Route exact path="/UserSignUp" component={UserSignUp} />
            <Route exact path="/UserLogin" component={UserLogin} />
            <Route exact path="/Messages" component={Messages} />
            <Route exact path="/Photos" component={Photos} />
            <Route exact path="/Projects" component={Projects} />
            <Route exact path="/Invoice" component={Invoice} /> */}
            {/* <Route exact path="/Authentication" component={Authentication} />
        <Route component={Error} /> */}
          </Switch>
        </Router>
      </UserContextProvider>
    </>
  );
}

export default App;
