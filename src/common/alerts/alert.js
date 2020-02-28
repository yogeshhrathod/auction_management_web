import React from "react";
import "./alertDesign.css";
import { hideAlertOnclick } from "./alertActions";
export default function Alert(props) {
  let { msg, cssClass } = props;
  const close = () => {
    hideAlertOnclick(props.dispatch, "none");
  };
  return (
    <div className="alert">
      <div className={cssClass}>
        <h2>
          {msg}
          <span className="close-button" onClick={close}>
            X
          </span>
        </h2>
      </div>
    </div>
  );
}
