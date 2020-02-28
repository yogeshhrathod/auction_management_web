const getMyBiddings = async req => {
    const response = await fetch("/my-bidding", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req)
    });
    return await response.json();
  };
  export default getMyBiddings;
  