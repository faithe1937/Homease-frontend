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

const UserLogin = prop => {
  const { values, handleChange, handleSubmit } = useForm(logIn);

  function logIn() {
    console.log(values);

    let user = {
      email: values.email,
      password: values.password
    };

    fetch("http://localhost:3001/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ user })
    })
      .then(resp => resp.json())
      .then(data => {
        localStorage.setItem("jwt", data.jwt);
        localStorage.setItem("user_id", data.user.id);
        localStorage.setItem("name", data.user.firstname);
        prop.history.push("/projects");
      });
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
            <HomeOutlinedIcon /> Log-in to your account
          </Header>
          <Form size="large" onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                name="email"
                placeholder="E-mail address"
                value={values.email || ""}
                onChange={handleChange}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                name="password"
                placeholder="Password"
                value={values.password || ""}
                onChange={handleChange}
                type="password"
              />
              {/* if authenticated send to profile  */}
              <Button color="black" fluid size="large" type="submit">
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href="/UserSignUp">Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
};
export default UserLogin;
