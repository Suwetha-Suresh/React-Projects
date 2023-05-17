import React from "react";
import "./SpecificClass.css";

const SpecificClass = () => {
  return (
    <div>
      <div class="ui raised very padded text container segment">
        <div className="main-div">
          <h1 className="head">CSE</h1>
        </div>
      </div>
      <div className="ui raised very padded text container segment ">
        <div className="Parent">
          <div className="child1">
            <i className="chart bar outline icon big"></i>
            <h4 className="he">Results</h4>
          </div>
          <div className="child2">
            <i className="file code outline icon big"></i>
            <h4 className="he">Posts</h4>
          </div>
        </div>
        <div className="Parent">
          <div className="child1">
            <i className="user icon outline big"></i>
            <h4 className="he">Attendance</h4>
          </div>
          <div className="child2">
            <i className="folder outline icon big"></i>
            <h4 className="he">Resources</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificClass;
