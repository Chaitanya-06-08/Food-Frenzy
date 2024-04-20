import React from "react";
import styles from "./MenuItem.module.css";
import Button from "../UI/Button";
const MenuItem = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h3 >{props.dish.item}</h3>
        <p style={{ fontStyle: "italic" }}>{props.dish.desc}</p>
        <p style={{ color: "rgb(137, 35, 35)", fontWeight: "bolder" }}>
          Rs.{props.dish.price}
        </p>
      </div>
      <div className={styles.right}>
        <div className={styles.quantity}>
          <label htmlFor="amount" style={{fontWeight: "bolder"}}>Amount</label>
          <input type="number" name="amount" min="1" className={styles.quantityInput}/>
        </div>
        <Button >Add +</Button>
      </div>
    </div>
  );
};
export default MenuItem;
