import React from "react";
import styles from "./carts.module.css";
function Cart() {
  return (
    <div>
      <div className={styles.carts__container}>
        <div className={styles.cart__body}>
          <div className={styles.cart__imageDiv}>
            <img
              className={styles.cart__image}
              src="http://gmural.ru/wp-content/uploads/2015/10/main-slide-3.jpg"
              alt="service"
            />
          </div>
          <div className={styles.cart__text}>
            <div><p>ул.Грешева 7 | 7-989-222-33-44</p></div>
            <a className={styles.button1} href="/">открыть</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
