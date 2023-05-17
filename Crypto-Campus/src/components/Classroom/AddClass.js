import React, { useState } from "react";
import Modal from "react-modal";

const AddClass = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [userInput, setUserInput] = useState({
    enteredName: "",
    enteredIncharge: "",
    enteredYear: "",
    enteredHeadcount: "",
  });

  const nameChangeHandler = (event) => {
    // setUserInput({ ...userInput, enteredTitle: event.target.value });
    setUserInput((prevState) => {
      return { ...prevState, enteredName: event.target.value };
    });
  };

  const inchargeChangeHandler = (event) => {
    // setUserInput({ ...userInput, enteredTitle: event.target.value });
    setUserInput((prevState) => {
      return { ...prevState, enteredIncharge: event.target.value };
    });
  };

  const yearChangeHandler = (event) => {
    // setUserInput({ ...userInput, enteredTitle: event.target.value });
    setUserInput((prevState) => {
      return { ...prevState, enteredYear: event.target.value };
    });
  };

  const headcountChangeHandler = (event) => {
    // setUserInput({ ...userInput, enteredTitle: event.target.value });
    setUserInput((prevState) => {
      return { ...prevState, enteredHeadcount: event.target.value };
    });
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const classData = {
      name: userInput.enteredName,
      incharge: userInput.enteredIncharge,
      year: userInput.enteredYear,
      headcount: userInput.enteredHeadcount,
    };
    props.onSaveClassData(classData);
    setModalIsOpen(false);
    setUserInput({
      enteredName: "",
      enteredIncharge: "",
      enteredYear: "",
      enteredHeadcount: "",
    });
  };

  return (
    <div>
      <div className="right menu">
        <div className="item">
          <div className="ui icon input">
            <button onClick={openModal} class="circular ui icon button">
              <i className="add icon"></i>
            </button>

            <div className="ui modal">
              <div style={{ height: "300px", width: "300px" }}>
                <Modal isOpen={modalIsOpen}>
                  <h2 className="ui header">Add New Class</h2>
                  <form className="ui form" onSubmit={submitHandler}>
                    <div className="field">
                      <label>Class Name</label>
                      <input
                        type="text"
                        name="first-name"
                        placeholder="Class Name"
                        onChange={nameChangeHandler}
                      />
                    </div>
                    <div className="field">
                      <label>Staff Name</label>
                      <input
                        type="text"
                        name="last-name"
                        placeholder="Staff Name"
                        onChange={inchargeChangeHandler}
                      />
                    </div>
                    <div className="field">
                      <label>Number Of Students</label>
                      <input
                        type="number"
                        name="last-name"
                        placeholder="Number Of Students"
                        onChange={headcountChangeHandler}
                      />
                    </div>
                    <div className="field">
                      <label>Batch</label>
                      <input
                        type="number"
                        name="last-name"
                        placeholder="Batch"
                        onChange={yearChangeHandler}
                      />
                    </div>
                    <button className="ui button" type="submit">
                      Submit
                    </button>
                    <button
                      className="ui button"
                      type="submit"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </form>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClass;
