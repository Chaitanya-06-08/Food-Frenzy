import React, { forwardRef, useContext } from "react";
import styles from "./CartModal.module.css";
import CartContext from "../../Context/CartContext";
import CartItem from "./CartItem";
import EmptyCartImg from "../../assets/empty-cart.png";
const CartModal = forwardRef((props, ref) => {
  const { cart, setCart } = useContext(CartContext);
  const CalculateTotal = () => {
    let subtotal = 0;
    let total = 0;
    subtotal = cart.reduce((total, item) => {
      total += item.price * item.quantity;
      return total;
    }, 0);
    total = parseInt((subtotal + 20).toFixed(2));
    return [subtotal, total];
  };
  return (
    <dialog ref={ref} className={styles.cartModal}>
      <div className={styles.cartControls}>
        <form method="dialog">
          <button type="submit" className={styles.backButton}>
            <span className={`material-symbols-outlined ${styles.backIcon}`}>
              arrow_back
            </span>
          </button>
        </form>
        <h2>
          <span className={`material-symbols-outlined ${styles.cartIcon}`}>
            shopping_cart
          </span>
        </h2>
        <div
          className={styles.clearAll}
          onClick={() => {
            setCart([]);
          }}
        >
          <span>Clear</span>
          <button
            className={styles.clearAllButton}
            onClick={() => {
              setCart([]);
            }}
          >
            <span
              className={`material-symbols-outlined ${styles.clearAllIcon}`}
            >
              clear_all
            </span>
          </button>
        </div>
      </div>
      <div className={styles.cartItemsWrapper}>
        {cart.length > 0 &&
          cart.map((cartItem, ind) => {
            return <CartItem key={ind} details={cartItem}></CartItem>;
          })}
        {cart.length == 0 && (
          <React.Fragment>
            <img
              src={EmptyCartImg}
              alt="emptyCart"
              className={styles.EmptyCart}
            ></img>
            <h2 style={{ textAlign: "center" }}>
              Looks like you do not have any items in your cart.
            </h2>
            <h2>Try adding a few...</h2>
          </React.Fragment>
        )}
      </div>
      {cart.length > 0 && (
        <div className={styles.checkout}>
          <div className={styles.totalPrice}>
            <section>
              <h2>Sub Total</h2>
              <span style={{ fontWeight: "bolder" }}>
                &#8377;{CalculateTotal()[0]}
              </span>
            </section>
            <section>
              <h2>Delivery Charge</h2>
              {cart.length >= 3 && (
                <span style={{ color: "#fc8d19" }}>Free</span>
              )}
              {cart.length < 3 && <span>&#8377;20</span>}
            </section>
            <section>
              <h2>Total</h2>
              {cart.length >= 3 && (
                <span style={{ fontWeight: "bolder" }}>
                  &#8377;{CalculateTotal()[0]}
                </span>
              )}
              {cart.length < 3 && (
                <span style={{ fontWeight: "bolder" }}>
                  &#8377;{CalculateTotal()[1]}
                </span>
              )}
            </section>
          </div>
          <button className={styles.orderButton}>
            Order For &#8377;
            {cart.length >= 3 && (
              <span style={{ fontWeight: "bolder" }}>
                {CalculateTotal()[0]}
              </span>
            )}
            {cart.length < 3 && (
              <span style={{ fontWeight: "bolder" }}>
                {CalculateTotal()[1]}
              </span>
            )}
          </button>
        </div>
      )}
    </dialog>
  );
});

export default CartModal;
