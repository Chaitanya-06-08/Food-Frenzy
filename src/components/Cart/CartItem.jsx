import React, { useContext } from "react";
import styles from "./CartItem.module.css";
import CartContext from "../../Context/CartContext";
const CartItem = (props) => {
  const { cart, setCart } = useContext(CartContext);
  const ModifyQuantity = (name, modifiedQuantity) => {
    let updatedItems = cart
      .map((item) => {
        if (item.name === name)
          item.quantity = item.quantity + modifiedQuantity;
        return item;
      })
      .filter((item) => item.quantity > 0);
    setCart(updatedItems);
  };

  const RemoveItem = (name) => {
    let updatedItems = cart
      .filter((item) => item.name!==name);
    setCart(updatedItems);
  };
  return (
    <div className={styles.cartItem}>
      <img src={props.details.img} alt="" className={styles.cartItemImg}></img>
      <div className={styles.cartItemContent}>
        <h3>{props.details.name}</h3>
        <p>{props.details.subCategory}</p>
      </div>
      <div className={styles.quantityAndAmount}>
        <div className={styles.quantity}>
          <button
            onClick={() => {
              ModifyQuantity(props.details.name, -1);
            }}
            className={styles.quantityButton}
          >
            <span>&#8722;</span>
          </button>
          <p>{props.details.quantity}</p>
          <button
            onClick={() => {
              ModifyQuantity(props.details.name, 1);
            }}
            className={styles.quantityButton}
          >
            <span>+</span>
          </button>
        </div>
        <p className={styles.cartItemPrice}>&#8377;{props.details.price}</p>
      </div>
      <span
        className={`material-symbols-outlined ${styles.cartItemDelete}`}
        onClick={() => {
          RemoveItem(props.details.name);
        }}
      >
        delete
      </span>
    </div>
  );
};

export default CartItem;
