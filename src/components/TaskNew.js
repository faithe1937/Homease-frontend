import React, { useContext, useState } from "react";
import { ProjectContext } from "../contexts/ProjectContext";

const NewTask = () => {
  const { addTask } = useContext(ProjectContext);
  const [catergory, setCatergory] = useState("");
  const [task, setTask] = useState("");
  //   cost [active, setActive] = useState(true)

  const handleSubmit = e => {
    e.preventDefault();
    //console.log(title, author);
    addBook(catergory, task);
    setCatergory("");
    setTask("");
    // setActive(!active)
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Category"
        value={catergory}
        onChange={e => setCategory(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="task"
        value={task}
        onChange={e => setTask(e.target.value)}
        required
      />
      <input type="submit" value="add task" />
    </form>
  );
};

export default NewTask;
