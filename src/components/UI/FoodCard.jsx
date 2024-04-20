import React, { useContext } from "react";
import styles from "./FoodCard.module.css";
import CartContext from "../../Context/CartContext";
import { NotificationContext } from "../../App";
const FoodCard = (props) => {
  const { cart, setCart } = useContext(CartContext);
  const [notify]=useContext(NotificationContext);
  const CartModifier = (item) => {
    let flag = false;
    let updatedItems = cart.map((prevItem) => {
      if (prevItem.name === item.name) {
        prevItem.quantity = prevItem.quantity + 1;
        flag = true;
      }
      return prevItem;
    });
    // console.log(updatedItems)
    // console.log(flag)
    if (updatedItems.length == 0) setCart([{ ...item, quantity: 1 }]);
    else if (updatedItems.length > 0 && flag) setCart(updatedItems);
    else setCart([...updatedItems, { ...item, quantity: 1 }]);
    notify("Item Added");
    // console.log(cart)
  };
  return (
    <React.Fragment>
      <div className={styles.cardOutline}>
        <img src={props.item.img} className={styles.foodImg} alt=""></img>
        <div className={styles.foodHeading}>
          <h2 style={{ textDecoration: "underline" }}>{props.item.name}</h2>
        </div>
        <div className={styles.categoryandprice}>
          <p>{props.item.subCategory}</p>
          <p className={styles.price}>&#8377;{props.item.price}</p>
          <p className={styles.rating}>
            {props.item.rating}
            <span className="material-symbols-outlined">star</span>
          </p>
        </div>
        <div className={styles.description}>
          <p>{props.item.description}</p>
        </div>
        <div className={styles.deliveryTime}>
          <p>Delivery Time : {props.item.delivery_time} min</p>
        </div>
        <button
          className={styles.addToCart}
          onClick={(e) => {
            CartModifier(props.item);
          }}
        >
          ADD TO CART
        </button>
      </div>
    </React.Fragment>
  );
};
export default FoodCard;
