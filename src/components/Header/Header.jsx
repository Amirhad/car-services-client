import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header__main}>
          <div className={styles.header__row}>
            <a href="#">О нас</a>
            <a href="#">Контакты</a>
            <a href="#">FAQ</a>
            <a href="#">Карта</a>
          </div>
        </div>
        <div className={styles.header__title}>
          <h1>Подбирем автосервис для решения проблемы вашего авто</h1>
          <button className={styles.button_23}>список автосервисов</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
//