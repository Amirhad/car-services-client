import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { loadCarServices } from "../../redux/features/carService";
import styles from "./carts.module.css";
import {Link} from 'react-router-dom';
function Cart() {

  const dispatch = useDispatch()


  useEffect(() =>{
    dispatch(loadCarServices())
  }, [dispatch])
  const carServices = useSelector(state => state.carService.carServices)

  const [value, setValue] = useState('');

  const handleSearch = (text) => {
    setValue(text)
  }

  console.log(value);
  

  const filtered = carServices.filter(services =>{
    return services.name.toLowerCase().includes(value.toLowerCase())
  })
  return (<>
    <div className={styles.main__serch__form}>
    <h1 className={styles.main__serch__form__title}>Поиск автосервиса</h1>
    <div><input className={styles.main__serch__form__input} type="text" placeholder="найти автосервис" onChange={(event) => handleSearch(event.target.value)} /></div>
  </div>
          
      <div className={styles.carts__container} >
         {filtered.map((item) => {
        return(
        <div className={styles.cart__body} key={item._id}>
          <div className={styles.cart__imageDiv}>
            <img
              className={styles.cart__image}
              src={item.img}
              alt="service"
            />
          </div>
          <div className={styles.cart__text}>
            <div><p>г.{item.address.city} ул.{item.address.street} {item.address.number} | {item.phone}</p></div>
              <Link to={`/card/${item._id}`} className={styles.button1} >открыть</Link>
            <p>{item.name}</p>
          </div>
        </div>
        )
      })}</div>
    </>
   
  );
}

export default Cart;
