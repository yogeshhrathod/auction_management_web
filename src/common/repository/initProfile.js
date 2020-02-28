const init = async id => {
  const response = await fetch("/user-profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: id
    })
  });
  return response;
};
export default init;
