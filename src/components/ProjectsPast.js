import React, { useEffect, useState } from "react";
import { Table, Header, Icon } from "semantic-ui-react";

const ProjectsPast = () => {
  const [currentProject, setcurrentProject] = useState([]);

  useEffect(() => {
    getProjectsCurrent();
  }, []);

  //get current projects, need to add boolean column
  //
  const getProjectsCurrent = async () => {
    const response = await fetch(`http://localhost:3001/api/v1/projects`);
    const data = await response.json();
    setcurrentProject(data);
  };
  console.log(currentProject);

  return (
    <>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>Project Name</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            {/* <Table.HeaderCell>Efficacy</Table.HeaderCell> */}
            {/* <Table.HeaderCell>Consensus</Table.HeaderCell> */}
            <Table.HeaderCell>Comments</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as="h2" textAlign="center">
                Kitchen Remodel
              </Header>
            </Table.Cell>
            <Table.Cell textAlign="right">
              <Table.Cell>
                <Icon name="checkmark" />
                Finished
              </Table.Cell>
            </Table.Cell>
            <Table.Cell>
              Creatine supplementation is the reference compound for increasing
              muscular creatine levels; there is variability in this increase,
              however, with some nonresponders.
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
};

export default ProjectsPast;
