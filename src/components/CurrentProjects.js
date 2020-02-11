import React, { useEffect, useState } from "react";
import { Message, Segment } from "semantic-ui-react";

const CurrentProjects = () => {
  const [currentProject, setcurrentProject] = useState([]);

  useEffect(() => {
    getcurrentProjects();
  }, []);

  //get current projects, need to add boolean column
  const getcurrentProjects = async () => {
    const response = await fetch(`http://localhost:3001/api/v1/projects`);
    const data = await response.json();
    setcurrentProject(data);
  };
  console.log(currentProject);

  return (
    <Segment color="black">
      <Message>
        <Message.Header>Changes in Service</Message.Header>
        <p>
          We updated our privacy policy here to better service our customers. We
          recommend reviewing the changes.
        </p>
      </Message>
    </Segment>
  );
};
