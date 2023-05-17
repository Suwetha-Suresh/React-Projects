import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import "./Post.css";
import profile from "../Profile/pic-1.jpg";

function Post(props) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="ui raised very padded text container segment">
      <div className="post">
        <div className="post__header">
          <img className="post__avatar" src={profile} alt="Avatar" />
          <h3>Sarah</h3>
        </div>
        <img className="post__image" src={props.image} alt="Content" />
        <div className="post__footer">
          <div className="post__likes">
            <button className="ui button" onClick={toggleLike}>
              <FaHeart
                className={`post__likeIcon ${liked ? "post__liked" : ""}`}
              />
            </button>
            <span>{liked ? "1 like" : "0 like"}</span>
          </div>
          <div className="post__description">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
