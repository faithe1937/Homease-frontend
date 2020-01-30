import React, { useState } from "react";
import Navbar from "./components/navbar";
import Auth from "./components/auth";
import { UserSessionContext } from "./context/user-context";

const GUEST_USER = { _guest: true, displayName: "Guest" };

function App() {
  const [user, setUser] = useState(GUEST_USER);

  function logIn(name) {
    setUser({ _guest: false, displayName: name });
  }

  function logOut(name) {
    setUser(GUEST_USER);
  }

  return (
    <UserSessionContext.Provider value={{ user, logIn, logOut }}>
      <div>
        <Navbar />
        <Auth />
      </div>
    </UserSessionContext.Provider>
  );
}

export default App;
