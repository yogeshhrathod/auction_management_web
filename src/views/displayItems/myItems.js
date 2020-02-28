import React, { useEffect, useState } from "react";
import "./home.scss";
import RenderProducts from "./renderProducts";
import getAuctionsAPI from "./getAuctions";
import Spinner from "../../common/loader/";

export default function HomeCollection(props) {
  const [body, setBody] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  const initView = async () => {
    const body = await getAuctionsAPI({ id: localStorage.getItem("userId") });
    setBody(body);
  };

  useEffect(() => {
    setLoaded(true);
    initView();
    setLoaded(false);
  }, []);


  return (
    <>
      <Spinner display={isLoaded} />
      <div className="home-root">
        <div className="home">
          <RenderProducts data={body} />
        </div>
      </div>
    </>
  );
}
