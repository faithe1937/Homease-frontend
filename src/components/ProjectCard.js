// child of project list
import React from "react";
import { Card, Icon } from "semantic-ui-react";

// const description = [
//   "Amy is a violinist with 2 years experience in the wedding industry.",
//   "She enjoys the outdoors and currently resides in upstate New York."
// ].join(" ");

const ProjectCard = ({ title, text }) => {
  return (
    <Card color="teal">
      <Card.Content header={title} />
      <Card.Content description={text} />
      <Card.Content extra>
        <Icon name="home" />
        Status
      </Card.Content>
    </Card>
  );
};

export default ProjectCard;
