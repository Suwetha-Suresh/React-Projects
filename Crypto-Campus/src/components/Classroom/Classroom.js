import React, { useState } from "react";
import AddClass from "./AddClass";
import ClassSetup from "./ClassSetup";

const Initial_setup = [
  {
    name: "CSE",
    incharge: "Reena",
    year: "2019",
    headcount: "56",
  },
  {
    name: "IT",
    incharge: "Preetha",
    year: "2019",
    headcount: "59",
  },
  {
    name: "ECE",
    incharge: "Senthil Kumar",
    year: "2019",
    headcount: "62",
  },
  {
    name: "MECH",
    incharge: "Kathiresan",
    year: "2019",
    headcount: "32",
  },
  {
    name: "EEE",
    incharge: "",
    year: "2019",
    headcount: "5",
  },
];

function Classroom() {
  const styles = {
    marginLeft: "30px",
    marginRight: "30px",
  };

  const [classes, setClasses] = useState(Initial_setup);

  const saveDataHandler = (enteredData) => {
    setClasses((prevClasses) => {
      return [...prevClasses, enteredData];
    });
  };

  return (
    <div style={styles}>
      <div className="ui secondary  menu">
        <h2 class="ui header" style={{ margin: "5px" }}>
          <img
            class="ui image"
            src="https://semantic-ui.com/images/icons/school.png"
          />
          <div class="content">Classrooms</div>
        </h2>
        <div className="right menu">
          <AddClass onSaveClassData={saveDataHandler} />
        </div>
      </div>
      <ClassSetup classList={classes} />
    </div>
  );
}

export default Classroom;
