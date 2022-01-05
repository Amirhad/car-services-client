import React from "react";
import Cart from "../Carts";
import style from "./main.module.css";

const Main = () => {
  return (
    <>
      <div className={style.input}>
        <h1>Поиск автосервиса</h1>
        <input type="text" placeholder="введите текс" />
      </div>

      <Cart />
    </>
  );
};

export default Main;
