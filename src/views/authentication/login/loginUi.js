import "./design.css";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { string, func } from "prop-types";
const propTypes = {
  handleInput: func,
  afterSubmission: func,
  email: string,
  password: string
};
function LoginUI(props) {
  let { afterSubmission, handleInput, email, password } = props;
  return (
    <form onSubmit={afterSubmission} autoComplete="off">
      <div className="container-box">
        <div className="login-box">
          <div className="header">
            <h2>LOGIN</h2>
          </div>
          <div className="box-body">
            <input
              className="login-input"
              id="email"
              onChange={handleInput}
              type="text"
              placeholder="Username"
              value={email}
            />
            <input
              className="login-input"
              id="password"
              onChange={handleInput}
              type="password"
              placeholder="Password"
              email={password}
            />
          </div>
          <div className="footer">
            <input className="login-button" type="submit" value="LogIn" />
          </div>
          <div className="footer-link">
            <Link to="/register">Do not have account ? Register here</Link>
          </div>
        </div>
        <div className="rights">
          © 2019 Antique Auctions. All rights reserved.
        </div>
      </div>
    </form>
  );
}

LoginUI.propTypes = propTypes;
export default connect()(LoginUI);
