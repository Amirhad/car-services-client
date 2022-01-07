import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header__main}>
          <div className={styles.header__row}>
            <Link to='/signin' className={styles.signin}>
              войти
            </Link>
            <Link to="/about">О нас</Link>
            <Link to="/contacts">Контакты</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/review">Игра</Link>
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
