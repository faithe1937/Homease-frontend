import React, { useState, createContext, useEffect } from "react";
// import axios from "axios";
export const ProjectContext = createContext();

const ProjectContextProvider = props => {
const [tasks, setTasks] = useState([
    {
      category: "demo",
      task: "pull tiles",
      id: 1
    },
    {
      category: "install",
      task: "pull tiles",
      id: 1
    }
  ]);

  //project list -> each task
  const addTask = (category, task, id) => {
    setTasks([...tasks, { category, task, id }]); // task id
  };
  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  useEffect(() => {
    getprojectTask();
  }, []);

  //get current projects, need to add boolean column
  const getprojectTask = async () => {
    const response = await fetch(`http://localhost:3001/api/v1/lists`);
    const data = await response.json();
    setTasks(data);
  };
  console.log(tasks);

  <ProjectContext.Provider
  // value={[user, setUser]}
  value={(tasks, addTask, removeTask)}
>
  {props.children}
</ProjectContext.Provider>

  export ProjectContextProvider;