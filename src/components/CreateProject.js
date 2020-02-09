import React from "react";
import { Card, Button } from "semantic-ui-react";

const description = ["details about project,", "find contractor"].join(" ");

const CreateProject = () => (
  // const { values, handleChange, handleSubmit } = useForm(createProject);

  // function createProject() {
  //     console.log(values);

  //     let project = {
  //       homeowner_id: values.homeowner,
  //       contractor_id: values.contractor,
  //       name: values.projectname
  //     };

  <Card>
    <Card.Content header="Create a new project!" />
    <Card.Content description={description} />
    <Card.Content extra>
      <Card.Meta>Are you a homeowner or contractor?</Card.Meta>
      <div className="ui two buttons">
        <Button basic color="green">
          Contractor
        </Button>
        <Button basic color="red">
          HomeOwner
        </Button>
      </div>
    </Card.Content>
  </Card>
);

export default CreateProject;
