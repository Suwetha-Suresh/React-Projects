import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import LoginPage from './Login';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Classroom from "./components/Classroom/Classroom";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile/Profile";
import SpecificClass from "./components/Classroom/SpecificClass";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/Classroom" Component={Classroom} />
        <Route exact path="/About" Component={About} />
        <Route exact path="/Profile" Component={Profile} />
        <Route exact path="/Classroom/Class" Component={SpecificClass} />

        {/* <Route exact path='/card/:user' Component={Card} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
