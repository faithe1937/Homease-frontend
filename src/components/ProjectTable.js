import React, { useEffect, useState } from "react";
import { Icon, Table, Card, Image } from "semantic-ui-react";

const colors = [
  "red",
  "orange",
  "yellow",
  "olive",
  "green",
  "teal",
  "blue",
  "violet",
  "purple",
  "pink",
  "brown",
  "grey",
  "black"
];

const ProjectTable = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    const response = await fetch(`http://localhost:3001/api/v1/projects`);
    const data = await response.json();
    setProjectData(data);
  };
  console.log(projectData);

  return (
    <>
      {projectdata.map(project => (
        <Table color={"teal"} key={"red"}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Project name</Table.HeaderCell>
              <Table.HeaderCell>UNIT PRICE</Table.HeaderCell>
              <Table.HeaderCell>DESCRIPTION</Table.HeaderCell>
              <Table.HeaderCell>COST</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>{project.qty}</Table.Cell>
              <Table.Cell>{project.unitprice}</Table.Cell>
              <Table.Cell>{project.description}</Table.Cell>
              <Table.Cell>{project.cost}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      ))}
    </>
  );
};
export default ProjectTable;
