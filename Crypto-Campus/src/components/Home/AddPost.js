import React, { useState } from "react";

const AddPost = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");

  const startEditHandler = () => {
    setIsEditing(true);
  };
  const stopEditHandler = () => {
    setIsEditing(false);
  };
  function handleImageChange(event) {
    const selectedFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(selectedFile);
    setImage(imageUrl);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onSavePost({ image, description });
    setIsEditing(false);
  }
  return (
    <div className="ui raised very padded text container segment">
      {!isEditing && (
        <div style={{ textAlign: "center" }}>
          <button className="ui button" onClick={startEditHandler}>
            Add New Post
          </button>
        </div>
      )}
      {isEditing && (
        <form className="ui form" onSubmit={handleSubmit}>
          <h2>Add New Post:</h2>
          <div className="field">
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>
          <div className="field">
            <label>Description</label>
            <textarea rows="2" onChange={handleDescriptionChange}></textarea>
          </div>
          <button className="ui button" type="submit">
            Submit
          </button>
          <button className="ui button" type="submit" onClick={stopEditHandler}>
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default AddPost;
