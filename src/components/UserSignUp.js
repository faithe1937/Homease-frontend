import React from "react";
import useForm from "./useForm";
import {
  Form,
  Grid,
  Header,
  Segment,
  Button,
  Message
} from "semantic-ui-react";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import { Link } from "react-router-dom";

const UserSignUp = () => {
  const { values, handleChange, handleSubmit } = useForm(UserSignUp);

  function UserSignUp() {
    // setUserObj(values);
    console.log(values);
    let user = {
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email,
      password: values.password
    };
    fetch("http://localhost:3001/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ user })
    })
      .then(resp => resp.json())
      .then(data => console.log(data));
  }

  return (
    <div>
      <Grid
        textAlign="center"
        style={{ height: "60vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 600 }}>
          <Header as="h2" color="black" textAlign="center">
            <HomeOutlinedIcon /> Welcome to our site!
          </Header>
          <Form size="large" onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="First Name"
                value={values.firstname}
                onChange={handleChange}
              />
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Last Name"
                value={values.lastname}
                onChange={handleChange}
              />
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                value={values.email}
                onChange={handleChange}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                type="password"
              />

              <Button
                as={Link}
                to="/Profile"
                color="black"
                fluid
                size="large"
                content="Submit"
                type="submit"
              >
                Create your Account
              </Button>
            </Segment>
          </Form>
          <Message>
            Already a user? <a href="/Login">Log In</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
};
export default UserSignUp;
