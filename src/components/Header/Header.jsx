import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header__main}>
          <div className={styles.header__row}>
            <div>О нас</div>
            <div>Контакты</div>
            <div>FAQ</div>
            <div>Карта</div>
          </div>
        </div>
        <div className={styles.header__title}>
          <h1>Подбирем автосервис для решения проблемы вашего авто</h1>
          <button className={styles.button-23}>список автосервисов</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
//