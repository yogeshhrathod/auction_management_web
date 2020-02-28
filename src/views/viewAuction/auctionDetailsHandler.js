import React, { useState, useEffect } from "react";
import "./viewAuctionDesign.scss";
import AuctionDetails from "./allDetails";
import { connect } from "react-redux";
import { showAlertWithTimeout } from "../../common/alerts/alertActions";
import { bidding } from "../../common/repository";
import { getAuctionDetails } from "../../common/repository";
import BidderList from "./biddersList/bidderList";
import AuctionEndTemplate from "./AuctionEnded/auctionEndTemplate";
function AuctionDetailsHandler(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [initBid, setInitBid] = useState(0);
  const [newBid, setNewBid] = useState(0);
  const [multiple, setMultiple] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pic, setPic] = useState("");
  const [auctionId, setAuctionId] = useState(0);
  const [currentBid, setCurrentNewBid] = useState(0);
  const [type, setType] = useState(0);
  const [isOwner, setIsOwner] = useState(false);
  const [view, setView] = useState(false);
  const [isExpired, setIsExpired] = useState(false);
  const [winner, setWinner] = useState(0);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const response = await getAuctionDetails({
      auctionId: props.match.params.id,
      userId: localStorage.getItem("userId")
    });
    const body = await response.json();

    setAuctionId(body.auction.auction_id);
    setTitle(body.auction.title);
    setDate(body.auction.exp_date);
    setMultiple(body.auction.bid_multiple);
    setPic(body.auction.image_url);
    setDesc(body.auction.description);
    setType(body.auction.auction_type);
    setInitBid(body.auction.initial_bid);
    setCurrentNewBid(body.current.max);
    setWinner(body.auction.winner);

    if (body.auction.seller_id === parseInt(localStorage.getItem("userId")))
      setIsOwner(true);

    if (body.auction.winner) setIsExpired(true);
    setLoading(false);
  };
  const viewHandler = isDisplay => {
    setView(isDisplay);
  };

  const handler = async event => {
    setNewBid(event.target.value);
  };

  const afterSubmission = async e => {
    e.preventDefault();
    if ((currentBid - newBid) % multiple === 0)
      if (currentBid < newBid && initBid < newBid) {
        const response = await bidding({
          auctionId: auctionId,
          newBidding: newBid,
          userId: localStorage.getItem("userId")
        });
        const body = await response.json();

        if (body.code === 200) {
          showAlertWithTimeout(props.dispatch, body.success, "success");
          setCurrentNewBid(Number(newBid));
        } else {
          console.log(body.failed);
          
          showAlertWithTimeout(props.dispatch, body.failed, "error");
          getData();
        }
      } else
        showAlertWithTimeout(
          props.dispatch,
          "Your bid should be higher than the current bid.",
          "error"
        );
    else
      showAlertWithTimeout(
        props.dispatch,
        "The bid is not valid please click on the info icon next to bid multiple to know the correct way to calculate your valid bid.",
        "warning"
      );
  };
  if ((auctionId && winner) === 0) return null;
  return (
    <>
      <AuctionDetails
        loading={loading}
        afterSubmission={afterSubmission}
        type={type}
        pic={pic}
        title={title}
        desc={desc}
        date={date}
        multiple={multiple}
        bid={initBid}
        newBid={newBid}
        handler={handler}
        currentBid={currentBid}
        isOwner={isOwner}
        viewHandler={viewHandler}
        isExpired={isExpired}
      />

      <BidderList
        display={view}
        auctionId={auctionId}
        viewHandler={viewHandler}
      />
      <AuctionEndTemplate
        display={isExpired}
        isOwner={isOwner}
        winner={winner}
      />
    </>
  );
}
export default connect()(AuctionDetailsHandler);
