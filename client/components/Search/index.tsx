import React from "react";
import styles from "./index.module.css";
import Button from "@mui/material/Button";


const Search = ()=> {


  return (
    <>
    <div className={styles.searchbox}>

    <input type="text" placeholder="Search.." name="search"></input>

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
    >
      Search
    </Button>
  </div>
  </>
  );
};


export default Search;
