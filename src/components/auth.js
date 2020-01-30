import React, { useState } from "react";
import { useUserSession } from "../context/user-context";
import { Button, Form } from "semantic-ui-react";

const Auth = () => {
  const { user, logOut } = useUserSession();

  if (user._guest) {
    return <LogInForm />;
  }

  function onClick(e) {
    e.preventDefault();
    logOut();
  }

  return (
    <div>
      <p>You are logged in {user.displayName}</p>
      <Button onClick={onClick}>Click Here</Button>
    </div>
  );
};

const LogInForm = () => {
  const { logIn } = useUserSession();
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    logIn(name);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input
        placeholder="First Name"
        name="name"
        value={name}
        onChange={e => setName(e.currentTarget.value)}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default Auth;
