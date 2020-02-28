const fetchBidders = async auctionId => {
      
    const response = await fetch("/get-winner", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({auctionId:auctionId})
    });
    const a = await response.json();   
    return a;
  };

  export default fetchBidders;
  