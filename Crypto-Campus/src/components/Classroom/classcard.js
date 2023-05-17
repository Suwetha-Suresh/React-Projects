import React from "react";
import { NavLink } from "react-router-dom";

function Classcard({ name, incharge, year, headcount }) {
  const img = "https://www.gstatic.com/classroom/themes/img_coffee.jpg";
  return (
    <div style={{ marginTop: "10px", marginBottom: "20px" }}>
      <NavLink to="./Class">
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={img} />
            </div>
            <div className="content">
              <div className="header">{name}</div>
              <div className="description">{incharge}</div>
            </div>
            <div className="extra content">
              <span className="right floated">Batch: {year}</span>
              <span>
                <i className="user icon"></i>
                {headcount} Students
              </span>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default Classcard;
