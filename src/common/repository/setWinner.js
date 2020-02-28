const fetchBidders = async data => {
    
  const response = await fetch("/set-winner", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  const a = await response.json();
  return a;
};

export default fetchBidders;
