import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = (props) => {
  return (
    <div className="search">
      <BsSearch className="search-icon" />
      <input className="nav-search-bar" placeholder={props.placeholder} />
    </div>
  );
};

export default SearchBar;
