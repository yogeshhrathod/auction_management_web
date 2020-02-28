import React from "react";
import { Link } from "react-router-dom";
import { shape, string, number } from "prop-types";

const propTypes = {
  data: shape({
    user_id: number.isRequired,
    bid_amount: number.isRequired,
    name: string.isRequired
  })
};

function RenderList(props) {
  const data = props.data;
  const allProducts =
    data.length !== 0 ? (
      data.map((data, index) => (
        <li className="list" key={index}>
          <p className="name">
            <Link to={"/user/" + data.user_id}>{data.name}</Link>
          </p>
          <p className="bid-amount">${data.bid_amount}</p>
          <button
            className={`set-winner-button ${
              props.WinnerDecided ? "hide" : "show"
            }`}
            id={data.user_id}
            onClick={props.makeWinner}
          >
            set Winner
          </button>
          <span className="winner">
            {props.WinnerDecided === data.user_id ? <p>Winner</p> : ""}
          </span>
        </li>
      ))
    ) : (
      <h4>No bidding yet</h4>
    );
  return allProducts;
}
export default RenderList;
RenderList.prototype = propTypes;
