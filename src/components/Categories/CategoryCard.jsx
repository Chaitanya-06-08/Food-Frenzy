import React from "react";
import styles from "./CategoryCard.module.css";
import { useContext } from "react";
import ProductStore from "../../Context/ProductContext";
const CategoryCard = (props) => {
  const {foodItems} = useContext(ProductStore);
  const ItemsFilter = (categoryName) => {
    const newFilteredItems = foodItems.filter((item) => {
      return item.Category.toLowerCase() === categoryName.toLowerCase();
    });
    // console.log(e.target.catname);
    props.onFilteringItems(newFilteredItems);
  };
  return (
    <div
      className={styles.categoryCardWrapper}
      onClick={(e) => {
        ItemsFilter(props.categoryName);
      }}
    >
      <img
        src={props.image}
        alt=""
        className={styles.categoryImage}
      ></img>
      <p className={styles.categoryName}>{props.categoryName}</p>
    </div>
  );
};
export default CategoryCard;
