import React, { useEffect, useState } from "react";
import { Table, Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import DashBoard from "./Dashboard";

const ProjectsCurrent = props => {
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
  console.log(arrComment);

  const oneComment = message.map(item => item.description);
  console.log(props.propertyid);
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
            <Header as="h2" textAlign="center" key={props.projectId}>
              <Table.Cell>
                <Link to={`/dashboard/${props.projectId}`}>
                  {props.projectname}
                </Link>
              </Table.Cell>
            </Header>

            <Table.Cell textAlign="right">
              <Table.Cell>
                <Icon name="checkmark" />
                Approved
              </Table.Cell>
            </Table.Cell>
            <Table.Cell>{oneComment}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
};

export default ProjectsCurrent;
