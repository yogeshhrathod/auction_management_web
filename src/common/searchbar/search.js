import React from "react";
import searchIcon from "../../assets/img/search_icon.svg";
import "./searchDesign.scss";
import { func, string } from "prop-types";

const PropTypes = {
  showSearch: func.isRequired,
  searchInput: string.isRequired,
  handler: func.isRequired
};

export default function Search(props) {
  const { showSearch, searchInput, handler } = props;
  return (
    <form onSubmit={showSearch}>
      <div className="search">
        <input
          className="search-input"
          type="text"
          value={searchInput}
          placeholder="Search"
          onChange={handler}
          required
        />
        <button className="search-button" type="submit">
          <img src={searchIcon} width="25px" alt="search"></img>
        </button>
      </div>
    </form>
  );
}
Search.prototype = PropTypes;
