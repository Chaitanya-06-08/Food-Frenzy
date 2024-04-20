import React from "react";
import FoodCard from "../UI/FoodCard";
import styles from "./ItemsWrapper.module.css";

const ItemsWrapper = (props) => {
  const foodItems = props.foodItems;
  return foodItems.length > 0 ? (
    <div className={styles.itemsWrapper}>
      {foodItems.map((item, ind) => {
        return <FoodCard key={ind} item={item}></FoodCard>;
      })}
    </div>
  ) : (
    <div className={styles.itemsWrapper}>
      <p className={styles.msg}>
        Items for this category are currently unavailable
      </p>
    </div>
  );
};
export default ItemsWrapper;
