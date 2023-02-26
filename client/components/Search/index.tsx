import React from "react";
import styles from "./index.module.css";
interface SearchProps {

    clickHandler: () => void;
    type?: "button" | "submit" | "reset";
    isDisabled?: boolean;

    children?: React.ReactNode;
  }

const Search: React.FC<SearchProps>  = ({  clickHandler, type = "button", isDisabled = false, children })=> {


  return (
    <button
    className={`${styles.btn}`}
    onClick={clickHandler}
    type={type}
    disabled={isDisabled}

    >
      {children}
    </button>
  );
};


export default Search;
