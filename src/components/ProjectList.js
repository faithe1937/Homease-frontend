//stateless component just display items
import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ title, cards }) => {
  return (
    <div style={styles.container}>
      <h4>{title}</h4>
      {cards.map(card => (
        <ProjectCard text={card.text} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f2f3f4",
    borderRadius: 3,
    width: 300,
    padding: 15,
    marginRight: 8
  }
};
export default ProjectList;
