import {React,useState} from "react";
import classes from "./Search.module.css";
import { BiSearchAlt } from "react-icons/bi";

const Search = () => {
  const [searchedValue, setSearchedValue]= useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    
  }
  const handleChange = (event) => {
    setSearchedValue(event.target.value);
  }
  return (
    <div className={classes["main-container"]}>
      <p className={classes['tag-line']}>Explore your Motherland India!!</p>
      <div className={classes["search-container"]}>
        <BiSearchAlt className={classes['search-icon']} />
        <input type="text" name="search" id="search" className={classes['search-input']} value={searchedValue} onChange={handleChange}/>
        <button type="submit" onClick={handleSearch} className={classes['search-btn']}>Go</button>
      </div>
    </div>
  );
};

export default Search;
