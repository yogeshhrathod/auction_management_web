const bidding = async body => {
  const response = await fetch("/bidding", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  return response;
};
export default bidding;
