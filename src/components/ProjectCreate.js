import React, { useState } from "react";
import useForm from "./useForm";
import { Form, Divider, Header, Icon } from "semantic-ui-react";

const ProjectCreate = () => {
  const { values, handleChange, handleSubmit } = useForm(createProject);
  const [newProject, setNewProject] = useState("");

  function createProject() {
    console.log(values);

    let project = {
      homeowner_id: values.homeowner,
      contractor_id: values.contractor,
      name: values.projectname,
      budget: values.budget,
      duedate: values.duedate
    };

    console.log();
    fetch("http://localhost:3001/api/v1/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ project })
    })
      .then(resp => resp.json())
      .then(data => setNewProject(data))
      .then(console.log(newProject));
  }

  return (
    <div>
      <Divider horizontal>
        <Header as="h4">
          <Icon name="bar chart" />
          Specifications
        </Header>
      </Divider>

      <Form className="attached fluid segment" onSubmit={handleSubmit}>
        <Form.Group widths="equal"></Form.Group>
        <Form.Group>
          <Form.Input
            placeholder="contractor"
            name="contractor"
            value={values.contractor}
            onChange={handleChange}
          />
          <Form.Input
            placeholder="homeowner"
            name="homeowner"
            value={values.homeowner}
            onChange={handleChange}
          />
          <Form.Input
            placeholder="projectname"
            name="projectname"
            value={values.projectname}
            onChange={handleChange}
          />
          <Form.Input
            placeholder="budget"
            name="budget"
            value={values.budget}
            onChange={handleChange}
          />
          <Form.Input
            placeholder="duedate"
            name="duedate"
            value={values.duedate}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Button color="black" content="Submit" type="submit" />
      </Form>
    </div>
  );
};

export default ProjectCreate;
