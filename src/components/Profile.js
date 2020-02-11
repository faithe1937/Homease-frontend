import React from "react";
import { Grid, Message, Header, Image, Icon, Divider } from "semantic-ui-react";
// import CreateProject from "./CreateProject";
// import ProjectTable from "./ProjectTable";

const Profile = () => (
  <>
    <Grid container style={{ padding: "1em .5em" }}>
      {/* <Grid.Row>
        <Grid.Column>
          <Header as="h1" dividing>
            INVOICE
          </Header>
        </Grid.Column>
      </Grid.Row> */}

      <Grid.Row>
        <Grid.Column>
          <Message>
            <Header
              as="h1"
              content="Welcome, Olive!"
              style={{
                fontSize: "4em",
                fontWeight: "normal",
                padding: ".5em 1em"
              }}
            />
            <br></br>
            <Image
              src="https://hallgroat.com/wp-content/uploads/2013/06/forms1.jpg"
              height="100px"
              width="100%"
            />
            <br></br>
            <br></br>
            {/* <Button color="blue"></Button> */}
          </Message>
          <br></br>
          <Divider horizontal>
            <Header as="h4">
              <Icon name="pencil alternate" />
              Current Projects
            </Header>
          </Divider>
          {/* <CreateProject /> */}
          {/* <ProjectTable /> */}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </>
);

export default Profile;
