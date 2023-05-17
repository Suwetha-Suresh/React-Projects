import React, { useState } from "react";
import Modal from "react-modal";

const AddCertificate = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const [userInput, setUserInput] = useState({
    enteredName: "",
    enteredOrg: "",
    enteredComment: "",
  });

  const nameChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredName: event.target.value };
    });
  };
  const orgChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredOrg: event.target.value };
    });
  };
  const commentChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredComment: event.target.value };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const certificateData = {
      name: userInput.enteredName,
      org: userInput.enteredOrg,
      comment: userInput.enteredComment,
    };
    props.onSaveCertificateData(certificateData);
    setModalIsOpen(false);
    setUserInput({
      enteredName: "",
      enteredOrg: "",
      enteredComment: "",
    });
  };
  return (
    <div>
      <button
        className="ui massive button"
        style={{ marginLeft: "0px" }}
        onClick={openModal}
      >
        Add Certificate
      </button>
      <div className="ui modal">
        <Modal isOpen={modalIsOpen}>
          <h2 className="ui header">Add New Class</h2>
          <form className="ui form" onSubmit={submitHandler}>
            <div className="field">
              <label>Name of the Certificate:</label>
              <input type="text" onChange={nameChangeHandler} />
            </div>
            <div className="field">
              <label>Name of the Organisation:</label>
              <input type="text" onChange={orgChangeHandler} />
            </div>
            <div className="field">
              <label>Description:</label>
              <input type="text" onChange={commentChangeHandler} />
            </div>
            <button className="ui button" type="submit">
              Submit
            </button>
            <button className="ui button" type="submit" onClick={closeModal}>
              Cancel
            </button>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default AddCertificate;
