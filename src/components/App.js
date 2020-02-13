import React from "react";
import "../App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProfileNav from "./ProfileNav";
import UserLogin from "./UserLogin";
import UserSignUp from "./UserSignUp";

import Welcome from "./Welcome";
import "../styles.css";

function App() {
  return (
    <>
      <Router>
        {/* <Context> */}
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/UserSignUp" component={UserSignUp} />
          <Route exact path="/UserLogin" component={UserLogin} />
          <ProfileNav />
        </Switch>
        {/* </Context.> */}
      </Router>
    </>
  );
}

export default App;
