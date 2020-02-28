import React, { useEffect, useState } from "react";
import "./home.scss";
import getSearchedAuctions from "../../common/repository/searchAuction";
import Spinner from "../../common/loader/";
import RenderProducts from "./renderProducts";
import Search from "../../common/searchbar";

export default function HomeCollection(props) {
  const [body, setBody] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const handler = e => {
    setSearchInput(e.target.value);
  };
  const initView = () => {
    if (props.match) {
      searchAuction(props.match.params);
    }
  };

  const searchAuction = async params => {
    const body = await getSearchedAuctions(params);
    setBody(body);
  };

  useEffect(() => {
    setLoaded(true);
    initView();
    setLoaded(false);
  }, []);

  const showSearch = e => {
    e.preventDefault();
    props.history.push("/search/" + searchInput);
    searchAuction({ query: searchInput });
  };

  return (
    <>
      <Spinner display={isLoaded} />
      <div className="home-root">
        <Search
          handler={handler}
          showSearch={showSearch}
          searchInput={searchInput}
        />
        <div className="home">
          <RenderProducts data={body} />
        </div>
      </div>
    </>
  );
}
