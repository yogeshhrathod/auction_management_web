import React from "react";
import { Link } from "react-router-dom";
import { string, func } from "prop-types";
import "./design.css";

const propTypes = {
  password: string.isRequired,
  email: string.isRequired,
  name: string.isRequired,
  lastName: string.isRequired,
  handleInput: func.isRequired,
  afterSubmission: func.isRequired
};

function Register(props) {
  const {
    name,
    lastName,
    password,
    email,
    handleInput,
    afterSubmission
  } = props;
  return (
    <form onSubmit={afterSubmission} autoComplete="off">
      <div className="container-box">
        <div className="login-box">
          <h2>REGISTER</h2>
          <div className="box-body">
            <input
              className="login-input"
              id="fname"
              onChange={handleInput}
              type="text"
              value={name}
              placeholder="First Name"
              required
            />
            <input
              className="login-input"
              id="lname"
              onChange={handleInput}
              type="text"
              details
              value={lastName}
              placeholder="Last Name"
              required
            />
            <input
              className="login-input"
              id="email"
              onChange={handleInput}
              type="text"
              value={email}
              placeholder="Email"
              required
            />
            <input
              className="login-input"
              id="password"
              onChange={handleInput}
              type="password"
              value={password}
              placeholder="Password"
              required
            />
          </div>
          <div className="footer">
            <input className="login-button" type="submit" value="SignUp" />
          </div>
          <div className="footer-link">
            <Link to="/login">Already user? Login here</Link>
          </div>
        </div>
      </div>
    </form>
  );
}
Register.propTypes = propTypes;
export default Register;
