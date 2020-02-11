import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import ListDetails from "./ListDetails";

const TaskList = () => {
  const { tasks } = useContext(UserContext);
  return tasks !== undefined ? (
    <div className="task-list">
      <ul>
        {tasks.map(task => {
          return <ListDetails task={task} key={task.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty"> No tasks! </div>
  );
};

export default TaskList;
