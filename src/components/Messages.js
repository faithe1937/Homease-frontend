import React, { useEffect, useState } from "react";
import { Comment, Form, Button } from "semantic-ui-react";
// import useForm from "./useForm";

const Messages = () => {
  // const { values, handleChange, handleSubmit } = useForm(postReply);
  const [messages, setMessages] = useState([]);

  // function postReply() {
  //   console.log(values);

  //   let post = {
  //     title: "demo",
  //     description: values.description,
  //     status: "on time"
  //   };

  //   fetch("http://localhost:3001/api/v1/posts", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     },
  //     body: JSON.stringify({ post })
  //   })
  //     .then(resp => resp.json())
  //     .then(data => console.log(data));
  // }

  useEffect(() => {
    getMessages();
  }, []);

  //get current projects, need to add boolean column
  const getMessages = async () => {
    const response = await fetch(`http://localhost:3001/api/v1/posts`);
    const data = await response.json();
    setMessages(data);
  };

  const arrComment = messages.map(comment => [
    comment.title,
    comment.description,
    comment.status
  ]);

  console.log(arrComment);

  const oneComment = messages.map(item => item.description);
  console.log(oneComment);

  const author = messages.map(message => message.name);
  console.log(author);

  // get time
  // const time = messages.map(message => message.name);
  // console.log(time);

  return (
    <>
      <Comment.Group>
        <Comment>
          <Comment.Avatar as="a" src="/images/avatar/small/steve.jpg" />
          <Comment.Content>
            <Comment.Author as="a">Steve Jobes</Comment.Author>
            <Comment.Metadata>
              <div>2 days ago</div>
            </Comment.Metadata>
            <Comment.Text>{oneComment}</Comment.Text>

            <Form reply>
              {/* onSubmit={handleSubmit}  */}
              <Form.TextArea
              // name="description"
              // value={values.description || ""}
              // onChange={handleChange}
              />
              <Button
                content="Add Reply"
                labelPosition="left"
                icon="edit"
                primary
              />
            </Form>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </>
  );
};
export default Messages;
