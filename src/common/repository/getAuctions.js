const init = async req => {
  const response = await fetch("/get-auctions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req)
  });
  return response;
};
export default init;
