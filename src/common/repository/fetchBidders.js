const fetchBidders = async req => {
      
  const response = await fetch("/get-bidders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req)
  });
  const a = await response.json();   
  return a;
};

export default fetchBidders;
