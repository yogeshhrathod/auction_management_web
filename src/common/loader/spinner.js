import React from "react";
import "./loaderDesign.scss";
const spinner = require("./../../assets/img/loader.png");

export default function Spinner(props) {
  return (
    <div className={props.display ? "spin" : "none"}>
      <div className="back"></div>
      <img src={spinner} alt="Loading" />
    </div>
  );
}
