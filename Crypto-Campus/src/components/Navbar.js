import React from "react";
import logo from "./logo.png";
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const styles = {
    marginBottom: '0px',
    position: 'sticky'
  }
  return (
    <div className="ui inverted menu sticky" style={styles}>
      <div ><Link to='./'><img src={logo} alt="Logo" /></Link></div>
      <div className="right menu">
        <div className="item">
          <div className="ui icon input">
            <button className='ui inverted button'><Link to='./'>Home</Link></button>
            <button className='ui inverted button'><NavLink to='./Classroom'>Classroom</NavLink></button>
            <button className='ui inverted button'><NavLink to='./About'>About</NavLink></button>
            <button className='ui inverted button'><NavLink to='./Profile'>Profile</NavLink></button>
            <input type="text" placeholder="Search..." />
            <i className="search link icon"></i>
          </div>
        </div>
        </div>
    </div>
  );
}

export default Navbar;
