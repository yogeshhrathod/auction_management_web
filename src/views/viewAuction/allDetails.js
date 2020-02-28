import React from "react";
import "./detailsDesign.scss";
// import { connect } from "react-redux";
import { string, number, func, bool } from "prop-types";
// import { showAlertWithTimeout } from "../../common/alerts/alertActions";
import Loader from "../../common/loader/spinner";
import TitleComp from "./titleComponent/titleComp";
const multipleInfoIcon = require("../../assets/img/info.png");
const PATH = "/auctions/";
const propTypes = {
  loading: bool.isRequired,
  pic: string.isRequired,
  title: string.isRequired,
  handler: func.isRequired,
  desc: string.isRequired,
  type: number.isRequired,
  date: string.isRequired,
  bid: number.isRequired,
  multiple: number.isRequired,
  afterSubmission: func.isRequired
};

function AuctionDetails(props) {
  const {
    loading,
    afterSubmission,
    type,
    pic,
    title,
    desc,
    date,
    multiple,
    bid,
    newBid,
    handler,
    currentBid,
    isOwner,
    viewHandler,
    isExpired
  } = props;

  return (
    <>
      <Loader display={loading} />
      <form onSubmit={afterSubmission}>
        <div className="outerDiv">
          <div className="container-div">
            <div className="inner-container">
              <TitleComp title={title} />
              <img
                className="display-image"
                src={
                  pic !== ""
                    ? PATH + pic
                    : "http://antiquetraveller.com/wp-content/uploads/2017/04/DSCF2144-Large.jpg"
                }
                alt="pic"
              />
              <div className="info">
                <div className="more-info">
                  <div className="key">
                    <p>Auction type </p>
                    <p>{type === 1 ? "Current bid" : "Your current bid"} </p>
                    <p>start bid </p>
                    <p>Bid Multiple </p>
                    <p>Expires on </p>
                    <input
                      className={`bid-input ${
                        isOwner || isExpired ? "hide" : "show"
                      }`}
                      type="number"
                      value={newBid}
                      onChange={handler}
                      required
                    />
                  </div>
                  <div className="values">
                    <p>{type === 1 ? "Open" : "Close"}</p>
                    <p className="imp">
                      {currentBid ? "$" + currentBid : "not bid yet"}
                    </p>
                    <p>${bid}</p>
                    <p>
                      ${multiple}
                      <span className="multiple-info">
                        <img className="icon" alt="i" src={multipleInfoIcon} />
                        <span className="dropdown-info">
                          Since the user will bid greater than the current bid
                          value so the bid multiple is used as follows: Suppose
                          the current maximum bid is 200 and bid multiple is 10
                          .The calculation below shows how a user bids 215 and
                          250 is considered as a valid or invalid bid based on
                          the bid multiple. <br/> 215-200 =15 15 % 10 is not equal to
                          0 so it is a invalid bid. 250-200 =50 50 % 10 is equal
                          to 0 so it is a valid bid.
                        </span>
                      </span>
                    </p>
                    <p> {new Date(date).toLocaleDateString()}</p>
                    <button
                      type="submit"
                      className={`bid-button ${
                        isOwner || isExpired ? "hide" : "show"
                      }`}
                    >
                      PLACE BID
                    </button>
                    <button
                      type="button"
                      className={`bid-button ${isOwner ? "show" : "hide"}`}
                      onClick={() => viewHandler(true)}
                    >
                      View bidders
                    </button>
                  </div>
                </div>
              </div>
              <TitleComp title={"Details"} />
              <div className="details">
                <p>{desc}</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

AuctionDetails.propTypes = propTypes;
export default AuctionDetails;
