import React, { useEffect, useState } from "react";
import { Table, Header, Icon } from "semantic-ui-react";

const ProjectsPast = props => {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    getMessage();
  }, []);

  const getMessage = async () => {
    const response = await fetch(`http://localhost:3001/api/v1/posts`);
    const data = await response.json();
    setMessage(data);
  };

  const arrComment = message.map(comment => [
    comment.title,
    comment.description,
    comment.status
  ]);

  const oneComment = message.map(item => item.description);
  return (
    <>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>Project Name</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Comments</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as="h2" textAlign="center">
                {props.projectname}
              </Header>
            </Table.Cell>
            <Table.Cell textAlign="right">
              <Table.Cell>
                <Icon name="checkmark" />
                Finished
              </Table.Cell>
            </Table.Cell>
            <Table.Cell>{oneComment}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
};

export default ProjectsPast;
