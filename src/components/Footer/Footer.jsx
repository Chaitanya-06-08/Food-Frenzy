import React from "react";
import styles from "./Footer.module.css";
import AppLogo from "../../assets/FoodFrenzy-logos_transparent.png";
import app_store_logo from "../../assets/app_store.jpg";
import play_store_logo from "../../assets/play_store.jpg";
const Footer = () => {
  return (
    <>
      <div className={styles.downloadOnApp}>
        <h1>For better experience, download the Food Frenzy app now</h1>
        <div className={styles.appLinks}>
          <a href="#">
            <img src={play_store_logo} alt="" />
          </a>
          <a href="#">
            <img src={app_store_logo} alt="" />
          </a>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.logoAndCopyright}>
          <img src={AppLogo} alt="applogo " className={styles.logo}/>
          <div className={styles.copyright}>
            <h1>Food Frenzy</h1>
            <p style={{ textAlign: "center" }}>&#169;2024 Food Frenzy</p>
          </div>
        </div>
        <div className={styles.footerLinks}>
            <h1 >Legal</h1>
          <ul>
            <li>
              <a href="#">Terms And Conditions</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerLinks}>
            <h1 >Company</h1>
          <ul>
            <li>
              <a href="#">Carrers</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
