import React, { useEffect, useState } from "react";
import "./home.scss";
import RenderProducts from "./renderProducts";
import getAuctionsAPI from "./getAuctions";
import Spinner from "../../common/loader/";
import Search from "./../displayItems/searchResult";
export default function HomeCollection(props) {
  const [body, setBody] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  const initView = async () => {
    const body = await getAuctionsAPI();
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
      <Search history={props.history} />
      <div className="home-root">
        <div className="no-padding-home">
          <RenderProducts data={body} />
        </div>
      </div>
    </>
  );
}
