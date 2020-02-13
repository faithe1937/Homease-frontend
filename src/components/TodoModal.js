import React, { Component } from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";

const TodoModal = () => (
  <Modal trigger={<Button>edit</Button>}>
    <Modal.Header>To do List</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <TodoList name="demo" />
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default TodoModal;
