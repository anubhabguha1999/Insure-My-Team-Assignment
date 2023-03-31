import React from "react";
import { Card } from "react-bootstrap";

const Post = ({ post, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <Card style={{ width: "30%", margin: "20px" }}>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Post;
