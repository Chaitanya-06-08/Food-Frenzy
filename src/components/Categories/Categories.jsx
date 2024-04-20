import React, { useState } from "react";
import styles from "./Categories.module.css";
import CategoryCard from "./CategoryCard";
import ItemsWrapper from "../ItemSlideshow/ItemsWrapper";

import { useContext } from "react";
import ProductStore from "../../Context/ProductContext";

import BurgerImg from "../../assets/Burger_top_view.jpeg";
import CurryImg from "../../assets/Curry_top_view.jpg";
import BiryaniImg from "../../assets/Biryani_top_view.jpeg";
import SummerSpecialImg from "../../assets/SummerSpecial_top_view.jpg";
import SweetsImg from "../../assets/Sweets_top_view.jpg";

const Categories = () => {
  const {foodItems} = useContext(ProductStore);
  const [tempFilteredItems, setTempFilteredItems] = useState(foodItems);
  const FilterItems = (filteredItems) => {
    setTempFilteredItems(filteredItems);
  };
  const [Categories, setCategories] = React.useState([
    {
      categoryName: "Biryani",
      id: 1,
      image: BiryaniImg,
    },
    {
      categoryName: "Fast Food",
      id: 2,
      image: BurgerImg,
    },
    {
      categoryName: "Sweets",
      id: 3,
      image: SweetsImg,
    },
    {
      categoryName: "Desserts",
      id: 4,
      image: SummerSpecialImg,
    },
    {
      categoryName: "Curries",
      id: 5,
      image: CurryImg,
    },
  ]);
  return (
    <React.Fragment>
      <div className={styles.categoryListWrapper}>
        <h1 className={styles.categoryHeader}>
          Inspiration For your First Order
        </h1>
        <div className={styles.UnderLine}></div>
        <div className={styles.categoriesWrapper}>
          {Categories.map((category) => {
            return (
              <CategoryCard
                key={category.id}
                categoryName={category.categoryName}
                image={category.image}
                onFilteringItems={FilterItems}
              ></CategoryCard>
            );
          })}
        </div>
      </div>
      <ItemsWrapper foodItems={tempFilteredItems}></ItemsWrapper>
    </React.Fragment>
  );
};
export default Categories;
