import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOut } from "../../redux/features/authentication";
import styles from "./header.module.css";
import { Link, animateScroll as scroll } from "react-scroll";

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
                <NavLink to="/signin">Войти</NavLink>
              </button>
            ) : (
              <button className={styles.signin} onClick={handleClickLogout}>
                Выйти
              </button>
            )}

            <NavLink to="/about">О нас</NavLink>
            <NavLink to="/contacts">Контакты</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/review">Игра</NavLink>
          </div>
        </div>
        <div className={styles.header__title}>
          <h1>Подбирем автосервис для решения проблемы вашего авто</h1>
          <button className={styles.button_23}>
            <Link to="carts" smooth={true} duration={700}>
              список автосервисов
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
//
