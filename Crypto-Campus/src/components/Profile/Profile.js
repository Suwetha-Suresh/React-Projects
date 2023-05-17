import React, { useState } from "react";
import profile from "./pic-1.jpg";
import AddCertificate from "./AddCertificate";
import CertificateSetup from "./CertificateSetup";

const InitialCertificates = [
  {
    name: "JAVAScript",
    org: "GUVI",
    comment:
      "Basics of HTML,CSS and JavaScript concepts such as Hoisting, Function Expressions and Classes.",
  },
  {
    name: "React Crash Course",
    org: "Udemy",
    comment:
      "React and Redux Toolkit, NPM, Webpack, Babel, and ES6/ES2015 Javascript syntax",
  },
  {
    name: "Certified Blockchain Course",
    org: "Henry Harvin",
    comment:
      "Build Bitcoin apps by utilizing tools like Truffle, Geth, Ganache, etc",
  },
];

function Profile(props) {
  let { name, title, bio, profilePic } = props;
  name = "Sarah";
  title = "Computer Science Student";
  bio =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum, tellus eget cursus lobortis, justo mauris sollicitudin enim, eu vehicula ipsum nibh sit amet urna.";
  profilePic = profile;

  const [certificates, setCertificate] = useState(InitialCertificates);
  const saveCertificateHandler = (enteredData) => {
    setCertificate((prevCertificates) => {
      return [...prevCertificates, enteredData];
    });
  };

  return (
    <div>
      <div
        className="ui raised very padded text container segment "
        style={{ marginTop: "30px" }}
      >
        <div className="profile">
          <img src={profilePic} alt={name} className="profile-pic" />
          <div className="profile-info">
            <h1 className="profile-name">{name}</h1>
            <h2 className="profile-title">{title}</h2>
            <p className="profile-bio">{bio}</p>
          </div>
        </div>
      </div>
      <div className="ui raised very padded text container segment ">
        <div className="ui three column grid">
          <button className="ui massive button" style={{ marginLeft: "50px" }}>
            Attendance
          </button>
          <button className="ui massive button" style={{ marginLeft: "15px" }}>
            {" "}
            Result{" "}
          </button>
          <AddCertificate onSaveCertificateData={saveCertificateHandler} />
        </div>
      </div>
      <div
        className="ui raised very padded text container segment "
        style={{ marginTop: "30px" }}
      >
        <h2>Certificates</h2>
        <CertificateSetup input={certificates} />
      </div>
    </div>
  );
}

export default Profile;
