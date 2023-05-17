import React from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // Import CSS file for styling

function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Login</h1>
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" required />

          <label htmlFor="key">Key</label>
          <input type="text" id="key" required />
          <br />

          <button className="ui inverted button">
            <Link to="./">Login</Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
