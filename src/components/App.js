import React from "react";
import "../App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ProjectBoard from "./ProjectBoard"; //ProjectList -> ProjectCard
import Home from "./Home";
import SignUp from "./SignUp";
import Messages from "./Messages";
import Photos from "./Photos";
import Profile from "./Profile";
import { UserProvider } from "../context/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/ProjectBoard" component={ProjectBoard} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/Messages" component={Messages} />
            <Route exact path="/Photos" component={Photos} />
            <Route exact path="/Profile" component={Profile} />
            {/* <Route exact path="/Authentication" component={Authentication} />
        <Route component={Error} /> */}
          </Switch>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
