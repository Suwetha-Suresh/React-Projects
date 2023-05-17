import React from "react";
import Post from "./Post";

const PostList = (props) => {
  return (
    <>
      {props.posts.map((post) => (
        <Post image={post.image} description={post.description} />
      ))}
    </>
  );
};

export default PostList;
