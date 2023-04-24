import React from "react";
import classes from "./Search.module.css";
import { BiSearchAlt } from "react-icons/bi";

const Search = () => {
  return (
    <div className={classes["main-container"]}>
      <p className={classes['tag-line']}>Explore your Motherland India!!</p>
      <div className={classes["search-container"]}>
        <BiSearchAlt className={classes['search-icon']} />
        <input type="text" id="search" className={classes['search-input']}/>
      </div>
    </div>
  );
};

export default Search;
