import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../redux/features/authentication";
import styles from "./header.module.css";

const Header = () => {
  const token = useSelector((state) => state.authentication.token);
  const dispatch = useDispatch();

  const handleClickLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header__main}>
          <div className={styles.header__row}>
            {!token ? (
              <button className={styles.signin}>
                <Link to="/signin">Войти</Link>
              </button>
            ) : (
              <button 
              className={styles.signin} 
              onClick={handleClickLogout}
              > 
              Выйти 
              </button>
            )}

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
