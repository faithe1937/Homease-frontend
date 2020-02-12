import React, { createContext, useEffect } from "react";
import React from "./React";

export const ProjectContext = createContext();

const DashBoard = () => {
  const [projects, setProjects] = useContext(ProjectContext);
  const [user, setUser] = useContext(UserContext);

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

  console.log(currentProjects);
  return (
    <ProjectContext.Provider value={(projects, user)}>
      >
      <div className="container mt-4">
        <Layout />
      </div>
      <div className="container mt-4 mb-4">
        <LayoutBelow />
      </div>
    </ProjectContext.Provider>
  );
};

export default DashBoard;
