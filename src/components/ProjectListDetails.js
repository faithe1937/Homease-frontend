import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const ProjectListDetails = ({ task }) => {
  const { removeTask } = useContext(UserContext);
  return (
    <li onClick={() => removeTask(task.id)}>
      <div className="category"> {task.category}</div>
      <div className="task"> {task.task}</div>
    </li>
  );
};

export default ProjectListDetails;
