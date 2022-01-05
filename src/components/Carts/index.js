import React from "react";
import styles from './carts.module.css'
function Cart() {
  return (
    <div className={styles.carts}>
      <div className={styles.image}>
        <img
          src="http://www.belmir.by/wp-content/uploads/2018/12/Bosch.jpg"
          alt="logo"
        />
      </div>
      <div className={styles.text}>
        <h2>ул.Пушкина</h2>
        <h2>|</h2>
        <h2>8929-000-29-79</h2>
      </div>
      <button>Открыть</button>
    </div>
  );
}

export default Cart;
