import React from "react";
import styles from "./Content.module.css";
import deliveryimage from "../../assets/Delivery_Image.jpg";
import SearchBar from "../UI/SearchBar";
const content = () => {
  return (
    <>
      <div className={styles.contentWrapper} id="Content">
        <div className={styles.content}>
          <h1>Food Frenzy</h1>
          <h2 style={{ textDecoration: "underline" ,fontStyle : "italic"}}>
            Your one stop destination for decilcious food
          </h2>
          <p>
            <a href="#" >
              Scroll down
            </a>{" "}
            to choose your favourite meal from our broad selection of available
            meals and enjoy a delicious lunch or dinner at home
          </p>
        </div>
        <div className={styles.deliveryImage}>
          <img src={deliveryimage} alt="" />
        </div>
      </div>
      <SearchBar></SearchBar>
    </>
  );
};
export default content;
