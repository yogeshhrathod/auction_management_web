import React, { useState } from "react";
import LoginUI from "./loginUi";
import "../../../common/alerts/alertDesign.css";
import { connect } from "react-redux";
import { showAlertWithTimeout } from "../../../common/alerts/alertActions";
import { authInit } from "../../../common/authRedux/authAction";
import { loginAPI } from "../../../common/repository/loginAndRegister";

function Login(props) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const afterSubmission = async e => {
    e.preventDefault();
    const response = await loginAPI({ email: email, password: password });
    const body = await response.json();

    if (body.code === 200) {
      showAlertWithTimeout(props.dispatch, body.success, "success");
      localStorage.setItem("token", body.token);
      localStorage.setItem("user", body.email);
      localStorage.setItem("userId", body.userId);
      authInit(props.dispatch, true);
      props.history.push("/");
    } else {
      showAlertWithTimeout(props.dispatch, body.failed, "error");
    }
  };

  const handleInput = event => {
    if (event.target.id === "email") setEmail(event.target.value);
    setPassword(event.target.value);
  };

  return (
    <LoginUI
      afterSubmission={afterSubmission}
      handleInput={handleInput}
      email={email}
      password={password}
    />
  );
}

export default connect()(Login);
