const getAuctionDetails = async auctionId => {
  const response = await fetch("/get-auction-details", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(auctionId)
  });
  return response;
};
export default getAuctionDetails;
