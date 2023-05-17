import React, { useState } from "react";
import img_1 from "./Images/post-1.jpg";
import img_2 from "./Images/post-2.jpg";
import img_3 from "./Images/post-3.jpg";
import img_4 from "./Images/post-4.jpg";
import img_5 from "./Images/post-5.jpg";
import img_6 from "./Images/post-6.jpg";
import PostList from "./PostList";
import AddPost from "./AddPost";

const Initial_Post = [
  {
    image: img_1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    image: img_2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    image: img_3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    image: img_4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    image: img_5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    image: img_6,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

function Home() {
  const [post, setPost] = useState(Initial_Post);
  const [element, setElement] = useState({ image: null, description: "" });

  function handleSubmit(event) {
    setElement(
      (element.image = event.image),
      (element.description = event.description)
    );
    setPost((prevPosts) => {
      return [element, ...prevPosts];
    });
  }

  console.log(post);
  return (
    <div>
      <AddPost onSavePost={handleSubmit} />
      <PostList posts={post} />
    </div>
  );
}

export default Home;
