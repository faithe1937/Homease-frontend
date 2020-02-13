import React, { useEffect, useState } from "react";
import {
  Grid,
  Container,
  Button,
  Header,
  Segment,
  Divider
} from "semantic-ui-react";
import ProjectsCurrent from "./ProjectsCurrent";
import ProjectsPast from "./ProjectsPast";
import ProjectCreate from "./ProjectCreate";

const Projects = () => {
  const user = localStorage.getItem("user_id");
  const username = localStorage.getItem("name");
  const [currentProjects, setcurrentProjects] = useState([]);
  console.log(user.type);
  console.log(currentProjects);

  // const getUserProjects = () => {
  //   const proj = currentProjects.filter(
  //     project => project.homeowner_id === user
  //   );
  //   console.log(proj);
  // };

  useEffect(() => {
    getProjectsCurrent();
  }, []);

  //get current projects, need to add boolean column
  const getProjectsCurrent = async () => {
    const response = await fetch(`http://localhost:3001/api/v1/projects`);
    const data = await response.json();
    const proj = data.filter(project => project.homeowner_id == user);
    setcurrentProjects(proj);
  };

  console.log(currentProjects);

  // const getUserName = currentProjects => {
  //   if (currentProjects) {
  //     return <h1>{currentProjects.homeowner.firstname}</h1>;
  //   }
  // };
  return (
    <>
      {/* {currentProjects.map(project => (
        <DashBoard
          key={project.id}
          projectId={project.id}
          homeowner={project.homeowner_id}
          contractor={project.contractor_id}
          projectname={project.name}
        />
      ))} */}
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Container text>
          <Header as="h3" style={{ fontSize: "7em" }}>
            Hi, {username}
          </Header>
        </Container>
      </Segment>

      <br></br>
      <Divider horizontal>
        <Grid container style={{ padding: "1em .5em" }}>
          <Grid.Row>
            <Grid.Column>
              <Segment style={{ padding: "0em" }} vertical>
                <Grid celled="internally" columns="equal" stackable>
                  <Grid.Row textAlign="center">
                    <Grid.Column
                      style={{ paddingBottom: "5em", paddingTop: "5em" }}
                    >
                      <Header as="h3" style={{ fontSize: "2em" }}>
                        Create a New Project
                      </Header>
                      {/* <p style={{ fontSize: "1.33em" }}>click for modal</p> */}
                    </Grid.Column>
                    <Grid.Column
                      style={{ paddingBottom: "5em", paddingTop: "5em" }}
                    >
                      <Header as="h3" style={{ fontSize: "2em" }}>
                        Current Projects
                      </Header>
                      <p style={{ fontSize: "1.33em" }}>
                        {/* <Image avatar src='/images/avatar/large/nan.jpg' /> */}
                        {/* <b>Nan</b> Chief Fun Officer Acme Toys */}
                      </p>
                    </Grid.Column>
                    <Grid.Column
                      style={{ paddingBottom: "5em", paddingTop: "5em" }}
                    >
                      <Header as="h3" style={{ fontSize: "2em" }}>
                        Past Projects
                      </Header>
                      <p style={{ fontSize: "1.33em" }}>
                        {/* <Image avatar src='/images/avatar/large/nan.jpg' /> */}
                        {/* <b>Nan</b> Chief Fun Officer Acme Toys */}
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Divider>
      <Divider>
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Header as="h3" style={{ fontSize: "1.5em" }}>
            {currentProjects.map(project => (
              <ProjectsCurrent
                key={project.id}
                homeowner={project.homeowner_id}
                contractor={project.contractor_id}
                projectname={project.name}
              />
            ))}
          </Header>
        </Segment>
      </Divider>
    </>
  );
};
export default Projects;

/* <Header as="h4">
          {/* <Icon name="pencil alternate" /> */

/* Past Projects
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
      </Grid> */
{
  /* </Segment>
      <Grid container style={{ padding: "1em .5em" }}>
        <Grid.Row>
    
      <Grid container style={{ padding: "1em .5em" }}>
        <Grid.Row>
          <Grid.Column>
            {currentProjects.map(project => (
              <ProjectsCurrent
                key={project.id}
                projectId={project.id}
                homeowner={project.homeowner_id}
                contractor={project.contractor_id}
                projectname={project.name}
              />
            ))}
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {/* </Grid.Column> */
}
{
  /* //   </Grid.Row> */
}
{
  /* // </Grid> */
}
