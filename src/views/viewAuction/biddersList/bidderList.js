import React, { useEffect, useState } from "react";
import "./bidListDesign.scss";
import fetchBidders from "../../../common/repository/fetchBidders";
import getWinner from "../../../common/repository/getWinner";
import setWinner from "../../../common/repository/setWinner";
import RenderList from "../renderList";
import { bool, func, number } from "prop-types";

const propTypes = {
  display: bool.isRequired,
  auctionId: number.isRequired,
  viewHandler: func.isRequired
};

export default function BidderList(props) {

  const { display, auctionId, viewHandler } = props;
  const [bidders, setBidders] = useState([{}]);
  const [WinnerDecided, setWinnerDecided] = useState(0);
  useEffect(() => {
    checkWinner();
    initBidders();
    
  }, []);
  const initBidders = async () => {
    const response = await fetchBidders({ auctionId: auctionId });
    setBidders(response);
  };
  const makeWinner = async e => {
    const id = e.target.id;
    await setWinner({ userId: id, auctionId: auctionId });
    setWinnerDecided(id);
    initBidders();
    checkWinner();
  };
  const checkWinner = async () => {
    const response = await getWinner(auctionId);
    if (response.winner) setWinnerDecided(response.winner);
  };
  return (
    <div className={`list-outer ${display ? "show" : "hide"}`}>
      <div className="inner-box">
        <div className="card-title">
          Bidders list below{" "}
          <span
            className="close"
            onClick={() => {
              viewHandler(false);
            }}
          >
            X
          </span>
        </div>
        <hr />
        <div>
          <RenderList
            data={bidders}
            WinnerDecided={WinnerDecided}
            makeWinner={makeWinner}
          />
        </div>
      </div>
    </div>
  );
}
BidderList.prototype =propTypes;