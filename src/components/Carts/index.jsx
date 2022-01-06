import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { loadCarServices } from "../../redux/features/carService";
import styles from "./carts.module.css";
function Cart() {

  const dispatch = useDispatch()


  useEffect(() =>{
    dispatch(loadCarServices())
  }, [dispatch])
  const services = useSelector(state => state.carService.carServices)
  return (
     
          
      <div className={styles.carts__container} >
         {services.map((item) => {
        return(
        <div className={styles.cart__body}>
          <div className={styles.cart__imageDiv}>
            <img
              className={styles.cart__image}
              src={item.img}
              alt="service"
            />
          </div>
          <div className={styles.cart__text}>
            <div><p>г.{item.address.city} ул.{item.address.street} {item.address.number} | {item.phone}</p></div>
            <a className={styles.button1} href="/">открыть</a>
          </div>
        </div>
     
        )
      })}</div>
    
   
  );
}

export default Cart;
