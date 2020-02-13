import React, { useContext, useEffect, useState } from "react";
import { Grid, Message, Header, Icon, Divider } from "semantic-ui-react";
import ProjectsCurrent from "./ProjectsCurrent";
import ProjectsPast from "./ProjectsPast";
import { UserContext } from "../context/Context";
import ProjectCreate from "./ProjectCreate";

const Projects = () => {
  const [userr, setUser] = useContext(UserContext);
  const [currentProjects, setcurrentProjects] = useState([]);

  useEffect(() => {
    getProjectsCurrent();
  }, []);

  //get current projects, need to add boolean column
  const getProjectsCurrent = async () => {
    const response = await fetch(`http://localhost:3001/api/v1/projects`);
    const data = await response.json();
    setcurrentProjects(data);
  };

  return (
    <>
      <Grid container style={{ padding: "1em .5em" }}>
        <Grid.Row>
          <Grid.Column>
            <Message>
              <Header
                as="h1"
                content="welcome, User"
                style={{
                  fontSize: "4em",
                  fontWeight: "normal",
                  padding: ".5em 1em"
                }}
              />
              <br></br>
              <br></br>
              <br></br>
              {/* <Button color="blue"></Button> */}
            </Message>
            <br></br>
            <Divider horizontal>
              <Header as="h4">
                {/* <Icon name="pencil alternate" /> */}
                Current Projects
              </Header>
            </Divider>
            <br></br>
            {/* currentprojects */}
            <Grid container style={{ padding: "1em .5em" }}>
              <Grid.Row>
                <Grid.Column>
                  {currentProjects.map(project => (
                    <ProjectsCurrent
                      key={project.id}
                      homeowner={project.homeowner_id}
                      contractor={project.contractor_id}
                      projectname={project.name}
                    />
                  ))}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <br></br>
      <Divider horizontal>
        <Header as="h4">
          {/* <Icon name="pencil alternate" /> */}
          Past Projects
        </Header>
      </Divider>
      <br></br>
      <Grid container style={{ padding: "1em .5em" }}>
        <Grid.Row>
          <Grid.Column>
            {currentProjects.map(project => (
              <ProjectsPast
                key={project.id}
                homeowner={project.homeowner_id}
                contractor={project.contractor_id}
                projectname={project.name}
              />
            ))}
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <br></br>
      <Divider horizontal>
        <Header as="h4">
          <Icon name="pencil alternate" />
          Create a New Project
        </Header>
      </Divider>
      <br></br>
      <Grid container style={{ padding: "1em .5em" }}>
        <Grid.Row>
          <Grid.Column>
            <ProjectCreate />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};
export default Projects;
