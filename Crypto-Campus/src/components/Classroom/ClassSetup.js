import React from "react";
import Classcard from "./classcard";

const ClassSetup = (props) => {
  return (
    <div className="ui three column grid" style={{ marginTop: "10px" }}>
      {props.classList.map((room) => (
        <Classcard
          name={room.name}
          incharge={room.incharge}
          year={room.year}
          headcount={room.headcount}
        />
      ))}
    </div>
  );
};

export default ClassSetup;
