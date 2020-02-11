import React, { useState, createContext } from "react";
export const UserContext = createContext();

const UserContextProvider = props => {
  const [currentUser, setCurrentUser] = useState("");

  console.log(currentUser);

  return (
    <UserContext.Provider value={[currentUser, setCurrentUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
