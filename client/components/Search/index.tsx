import React, { useState, ChangeEvent } from "react";
import styles from "./index.module.css";
import Button from "@mui/material/Button";

const Search = () => {
  const [searchValue, setSearchValue] = useState(""); 

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearchClick = () => {
    console.log("Search value:", searchValue);
  };
  return (
    <>
      <div className={styles.searchbox}>
        <input
          type="text"
          placeholder="Search.."
          name="search"
          value={searchValue}
          onChange={handleSearchChange}
        ></input>
      </div>
      <div className={styles.searchbutton}>
        <Button
          fullWidth
          sx={{
            fontSize: 12,
            height: 50,
            backgroundColor: "rgb(63, 81, 181) ",
          }}
          variant="contained"
          size="medium"
          onClick={handleSearchClick}
        >
          Search
        </Button>
      </div>
    </>
  );
};

export default Search;
