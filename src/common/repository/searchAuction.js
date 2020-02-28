const getMyAuction = async req => {
  const response = await fetch("/get-searched-auctions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req)
  });
  return await response.json();
};
export default getMyAuction;
