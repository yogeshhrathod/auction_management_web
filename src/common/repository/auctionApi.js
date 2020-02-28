const storeData = async (title, desc, date, bid, type, multiple, image) => {
  const data = new FormData();
  data.set("title", title);
  data.set("description", desc);
  data.set("exp_date", date);
  data.set("initial_bid", bid);
  data.set("email", localStorage.getItem("user"));
  data.set("type", type);
  data.set("multiple", multiple);
  data.append("file", image.current.files[0]);
  const response = await fetch("/add-post", {
    method: "POST",
    body: data
  });
  return response;
};
export { storeData };
