import React from "react";
import styles from './carts.module.css'
function Cart() {
  return (
    <div className={styles.carts}>
      <div className={styles.carts__img}>
        <img
          src="http://www.belmir.by/wp-content/uploads/2018/12/Bosch.jpg"
          alt="logo"
          className={styles.carts__img__item}
        />
      </div>
      <div className={styles.text}>
        <h2>ул.Пушкина</h2>
        <h2>|</h2>
        <h2>8929-000-29-79</h2>
      </div>
      <button className={styles.carts__btn}>Открыть</button>
    </div>
  );
}

export default Cart;
