import React, { useState, createContext } from "react";
// import axios from "axios";

export const UserContext = createContext();

export const UserProvider = props => {
  const [currentUser, setCurrentUser] = useState("");
  // const [logOut, setLogOut] = useState(true);

  // const [loggedIn, setLoggedIn] = useState(false);
  console.log(currentUser);

  return (
    <UserContext.Provider
      // value={[user, setUser]}
      value={[currentUser, setCurrentUser]}
    >
      {props.children}
    </UserContext.Provider>
  );
};
