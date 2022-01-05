import React from "react";
import "../index.css";
import Index from "./Carts/index";

const Main = () => {
  return (
    <>
      <div className="input">
        <h1>Поиск автосервиса</h1>
        <input type="text" placeholder="введите текс" />
      </div>

      <Index />
    </>
  );
};

export default Main;
