import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import useForm from "./useForm";
import { Form } from "semantic-ui-react";
// import { Link } from "react-router-dom";

const Home = () => {
  const { values, handleChange, handleSubmit } = useForm(logIn);
  const [currentUser, setCurrentUser] = useContext(UserContext);

  function logIn() {
    console.log(values);

    let user = {
      email: values.email,
      password: values.password
    };

    console.log(user);
    fetch("http://localhost:3001/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ user })
    })
      .then(resp => resp.json())
      .then(data => setCurrentUser(data))
      .then(console.log(currentUser));
  }

  return (
    <div>
      <Form className="attached fluid segment" onSubmit={handleSubmit}>
        <Form.Group widths="equal"></Form.Group>
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

        <Form.Button color="teal" content="Submit" type="submit" />
      </Form>
    </div>
  );
};
export default Home;
