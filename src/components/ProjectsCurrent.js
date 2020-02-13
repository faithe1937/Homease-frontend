import React, { useEffect, useState } from "react";
import { Table, Grid, Segment, Divider, Header, Icon } from "semantic-ui-react";
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
      <Grid container style={{ padding: "1.5em .5em" }}>
        <Grid.Row>
          <Grid.Column>
            <Segment style={{ padding: "0em" }} vertical>
              <Grid celled="internally" columns="equal" stackable>
                <Grid.Row textAlign="center">
                  <Grid.Column
                    style={{ paddingBottom: "5em", paddingTop: "5em" }}
                  >
                    <Header
                      as="h3"
                      style={{ fontSize: "1.5em" }}
                      textAlign="center"
                      key={props.projectId}
                    >
                      <Link to={`/dashboard/${props.projectId}`}>
                        {props.projectname}
                      </Link>
                    </Header>
                  </Grid.Column>
                  <Grid.Column
                    style={{ paddingBottom: "5em", paddingTop: "5em" }}
                  >
                    <Header as="h3" style={{ fontSize: "1.5em" }}>
                      <Icon name="checkmark" />
                      Approved
                    </Header>
                  </Grid.Column>
                  <Grid.Column
                    style={{ paddingBottom: "5em", paddingTop: "5em" }}
                  >
                    <Header as="h3" style={{ fontSize: "1.5em" }}>
                      {oneComment}
                    </Header>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default ProjectsCurrent;
