import React from "react";
import useForm from "./useForm";
import { Form, Message } from "semantic-ui-react";

const SignUp = () => {
  const { values, handleChange, handleSubmit } = useForm(signUp);

  function signUp() {
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
      <Message
        attached
        header="Welcome to our site!"
        content="Fill out the form below to sign-up for a new account"
      />
      <Form className="attached fluid segment" onSubmit={handleSubmit}>
        <Form.Group widths="equal"></Form.Group>
        <Form.Group>
          <Form.Input
            placeholder="First Name"
            name="firstname"
            value={values.firstname}
            onChange={handleChange}
          />
          <Form.Input
            placeholder="Last Name"
            name="lastname"
            value={values.lastname}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <Form.Input
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Checkbox inline label="I agree to the terms and conditions" />
        <Form.Button color="teal" content="Submit" type="submit" />
      </Form>
    </div>
  );
};
export default SignUp;
