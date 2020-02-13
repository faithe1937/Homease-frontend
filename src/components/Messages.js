import React, { useEffect, useState } from "react";
import { Comment, Form, Button } from "semantic-ui-react";
import useForm from "./useForm";

const Messages = () => {
  const { values, handleChange, handleSubmit } = useForm(postReply);
  const [messages, setMessages] = useState([]);

  function postReply() {
    console.log(values);

    let post = {
      project_id: values.projectid,
      title: values.title,
      description: values.description,
      status: values.status
    };

    fetch("http://localhost:3001/api/v1/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ post })
    })
      .then(resp => resp.json())
      .then(data => console.log(data));
  }

  return (
    <>
      <Comment.Group>
        <Comment>
          <Comment.Avatar as="a" src="/images/avatar/small/joe.jpg" />
          <Comment.Content>
            <Comment.Author>Joe Henderson</Comment.Author>
            <Comment.Metadata>
              <div>1 day ago</div>
            </Comment.Metadata>
            <Comment.Text>
              <p>
                The hours, minutes and seconds stand as visible reminders that
                your effort put them all there.
              </p>
              <p>
                Preserve until your next run, when the watch lets you see how
                Impermanent your efforts are.
              </p>
            </Comment.Text>
          </Comment.Content>
        </Comment>
        <Form reply>
          <Form.TextArea
            name="description"
            placeholder="Type your message here"
            value={values.description || ""}
            onChange={handleChange}
          />

          <Button
            content="Add Comment"
            labelPosition="left"
            icon="edit"
            primary
          />
        </Form>
      </Comment.Group>
    </>
  );
};
export default Messages;

// useEffect(() => {
//   getMessages();
// }, []);

//get current projects, need to add boolean column
// const getMessages = async () => {
//   const response = await fetch(`http://localhost:3001/api/v1/posts`);
//   const data = await response.json();
//   setMessages(data);
// };

// const arrComment = messages.map(comment => [
//   comment.title,
//   comment.description,
//   comment.status
// ]);

// console.log(arrComment);

// const oneComment = messages.map(item => item.description);
// console.log(oneComment);

// const author = messages.map(message => message.name);
// console.log(author);

// get time
// const time = messages.map(message => message.name);
// console.log(time);
