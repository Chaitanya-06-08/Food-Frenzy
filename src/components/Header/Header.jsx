import { useContext, useRef } from "react";
import CartContext from "../../Context/CartContext";
import styles from "./Header.module.css";
import NavButton from "./NavButton";
import Cart from "../Cart/CartModal";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AppLogo from "../../assets/FoodFrenzy-logos_transparent.png";
const Header = () => {
  const { cart } = useContext(CartContext);
  const cartRef = useRef();

  const showCart = () => {
    cartRef.current.showModal();
  };
  return (
    <>
      {/* <div className={styles.headerInnerWrapper}>
          <h1 className={`${styles.name} ${styles.headerItem}`}>
          <a href="#Content"><img src={AppLogo} className={styles.App_Logo}></img></a>
          </h1>
          <div className={`${styles.nav_wrapper} ${styles.headerItem}`}>
          <NavButton>About</NavButton>
          <NavButton>
          <span className={`material-symbols-outlined ${styles.helpicon}`}>
          info
          </span>
              Help
            </NavButton>
            <NavButton>Login</NavButton>
            <NavButton>SignUp</NavButton>
            </div>
            <div className={`${styles.headerItem} ${styles.controlIcons}`}>
            <div className={styles.cart} onClick={showCart}>
            <span className={`material-symbols-outlined ${styles.carticon}`}>
            shopping_cart
            </span>
            <span className={styles.count}>
            {cart.reduce((cartLength, item) => {
              cartLength += item.quantity;
              return cartLength;
                }, 0)}
                </span>
                </div>
                </div>
              </div> */}

      <header className={styles.headerOuterWrapper}>
        <div className={styles.appLogo}>
          <img src={AppLogo} alt="logo" />
          <h1>Food Frenzy</h1>
        </div>
        <nav className={styles.navigationBar}>
          <ul className={styles.navLinks}>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/orders">Orders</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <ul className={styles.auth}>
            <li className={styles.cart} onClick={showCart}>
              <ShoppingCartIcon></ShoppingCartIcon>
              <span className={styles.count}>
                {cart.reduce((cartLength, item) => {
                  cartLength += item.quantity;
                  return cartLength;
                }, 0)}
              </span>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/signup">Signup</a>
            </li>
          </ul>
        </nav>
      </header>
      <Cart ref={cartRef}></Cart>
    </>
  );
};
export default Header;
