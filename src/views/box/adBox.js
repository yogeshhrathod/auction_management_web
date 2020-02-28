import React from "react";
import { shape, string, number } from "prop-types";
import "./boxDesign.scss";
import { Link } from "react-router-dom";
const PATH = "/auctions/";

const propTypes = {
  data: shape({
    auction_id: number.isRequired,
    title: string.isRequired,
    image_url: string,
    initial_bid: number.isRequired,
    exp_date: string.isRequired,
    current: number
  })
};

export default function AdBox(props) {
  const {
    auction_id,
    title,
    image_url,
    initial_bid,
    exp_date,
    auction_type,
    current
  } = props.data;

  const homDate = new Date(exp_date).toLocaleString();
  return (
    <Link to={"/item/" + auction_id} className="link">
      <div className="outer-box" key={auction_id}>
        <div className="item-title-box">
          <p>{title}</p>
        </div>
        <div className="item-image">
          <div className="type">
            {auction_type === 1 ? "Open Type Auction" : "Close Type Auction"}
          </div>
          <img src={PATH + image_url} alt="pics" />
        </div>
        <div className="current-bid">
          <p>Current Bid</p>
          <p className="bid-price"> {current ? "$" + current : "No bid yet"}</p>
        </div>
        <div className="init-bid">
          <p>Start bid $ {initial_bid}</p>
        </div>

        <div className="valid-date">
          <p>Expires on {homDate}</p>
        </div>
      </div>
    </Link>
  );
}
AdBox.propTypes = propTypes;
