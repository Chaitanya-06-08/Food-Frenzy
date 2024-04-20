import React from "react";
import { useContext, useEffect } from "react";
import styles from "./SearchBar.module.css";
import ProductStore from "../../Context/ProductContext";
const SearchBar = () => {
  const { foodItems } = useContext(ProductStore);
  const [searchItems, setSearchItems] = React.useState([]);
  const [searchInput, setSearchInput] = React.useState("");

  useEffect(() => {
    if (searchInput === "") {
      setSearchItems([]);
    } else {
      console.log(foodItems);
      let newItems = foodItems.filter((item) => {
        return (
          item.name.toLowerCase().includes(searchInput) ||
          item.Category.toLowerCase().includes(searchInput)
        );
      });
      // console.log(newItems);
      setSearchItems(newItems);
    }
  }, [searchInput]);

  const searchInputHandler = (e) => {
    setSearchInput(e.target.value.toLowerCase());
  };
  return (
    <React.Fragment>
      <div className={styles.SearchBar}>
        <input
          type="text"
          className={styles.searchInput}
          id="searchinput"
          placeholder={`Search Your Favourite Food `}
          onChange={searchInputHandler}
          value={searchInput}
        ></input>
        {searchInput.length > 0 && (
          <span
            className={`material-symbols-outlined ${styles.CloseIcon}`}
            onClick={(e) => {
              setSearchInput("");
            }}
          >
            close
          </span>
        )}
        <label htmlFor="searchinput">
          <span className={`material-symbols-outlined ${styles.SearchIcon}`}>
            search
          </span>
        </label>
      </div>
      <div className={styles.FilteredItems}>
        {searchItems.length > 0 &&
          searchItems.map((item, ind) => {
            return (
              <div key={ind} className={styles.SearchItem}>
                <img src={item.img} alt="" className={styles.SearchImg}></img>
                <p>{item.name}</p>
              </div>
            );
          })}
        {searchInput.length > 0 && searchItems.length == 0 ? (
          <p className={styles.msg}>Sorry, No Items Found for your search</p>
        ) : null}
      </div>
    </React.Fragment>
  );
};
export default SearchBar;
