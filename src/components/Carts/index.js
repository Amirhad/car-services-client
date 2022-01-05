import React from "react";

function Cart() {
  return (
    <div className="carts">
      <div className="image">
        <img
          src="http://www.belmir.by/wp-content/uploads/2018/12/Bosch.jpg"
          alt="logo"
        />
      </div>
      <div className="text">
        <h2>ул.Пушкина</h2>
        <h2>|</h2>
        <h2>8929-000-29-79</h2>
      </div>
      <button>Открыть</button>
    </div>
  );
}

export default Cart;
