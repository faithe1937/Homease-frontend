import React from "react";
import { Card } from "semantic-ui-react";

const src = "/images/wireframe/white-image.png";

const Photos = () => (
  <Card.Group itemsPerRow={4}>
    <Card
      color="red"
      image="https://i.pinimg.com/564x/59/60/42/596042bd00c748dbf6d15b0e4294ae09.jpg"
    />
    <Card
      color="orange"
      image="https://i.pinimg.com/564x/ff/5a/b4/ff5ab4a59258171cd6c00c5767305bbc.jpg"
    />
    <Card
      color="yellow"
      image="https://i.pinimg.com/564x/99/e1/fd/99e1fd5431cbe37b58fbc5ed93bce2e5.jpg"
    />
    <Card
      color="olive"
      image="https://i.pinimg.com/564x/fa/8c/9e/fa8c9e759f7b9f7243d868708c5f536e.jpg"
    />
    <Card color="green" image={src} />
    <Card color="teal" image={src} />
    <Card color="blue" image={src} />
    <Card color="violet" image={src} />
    <Card color="purple" image={src} />
    <Card color="pink" image={src} />
    <Card color="brown" image={src} />
    <Card color="grey" image={src} />
  </Card.Group>
);

export default Photos;
