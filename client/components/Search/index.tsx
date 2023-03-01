import { searchFaq } from "@/redux/slices/faqSlice";
import Button from "@mui/material/Button";
import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import styles from "./index.module.css";
const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useAppDispatch();
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearchClick = async () => {
    try {
      await dispatch(searchFaq(searchValue));
    } catch (err) {
      console.log("Error adding question:", err);
    }
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
