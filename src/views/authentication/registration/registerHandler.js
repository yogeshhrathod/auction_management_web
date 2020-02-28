import React, { useState } from "react";
import { connect } from "react-redux";
import { showAlertWithTimeout } from "../../../common/alerts/alertActions";
import { registerAPI } from "../../../common/repository/loginAndRegister";
import RegisterForm from "./regForm";

function Register(props) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = event => {
    const e = event.target;
    if (e.id === "fname") setName(e.value);
    if (e.id === "lname") setLastName(e.value);
    if (e.id === "email") setEmail(e.value);
    if (e.id === "password") setPassword(e.value);
  };

  const afterSubmission = async e => {
    e.preventDefault();
    const response = await registerAPI(name, email, lastName, password);
    const body = await response.json();
    if (body.code === 200) {
      showAlertWithTimeout(props.dispatch, body.success, "success");
      props.history.push("/login");
    } else showAlertWithTimeout(props.dispatch, body.failed, "error");
  };
  return (
    <RegisterForm
      name={name}
      lastName={lastName}
      email={email}
      handleInput={handleInput}
      afterSubmission={afterSubmission}
      password={password}
    />
  );
}
export default connect()(Register);
