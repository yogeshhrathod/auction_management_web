const initProfile = async () => {
  const response = await fetch("/user-profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: localStorage.getItem("userId")
    })
  });
  return await response.json();
};
export default initProfile;
