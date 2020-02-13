import React, { useState, createContext, useContext, useEffect } from "react";

export const ProjectContext = createContext([]);
export const UserContext = React.createContext([]);

const Context = props => {
  const [projects, setProjects] = useState({});
  const [userr, setUser] = useState({});
  localStorage.setItem("jwt", userr.jwt);
  localStorage.setItem("username", userr.firstname);

  console.log(userr);
  useEffect(() => {
    getProjects();
  }, []);

  //get current projects, need to add boolean column
  //
  const getProjects = async () => {
    const response = await fetch(`http://localhost:3001/api/v1/projects`);
    const data = await response.json();
    setProjects(data);
  };

  return (
    <UserContext.Provider value={[userr, setUser]}>
      <ProjectContext.Provider value={[projects, setProjects]}>
        {props.children}
      </ProjectContext.Provider>
    </UserContext.Provider>
  );
};

export default Context;
