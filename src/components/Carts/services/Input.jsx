import React, { useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { createService } from '../../../redux/features/service';
import styles from './input.module.css' 
import TextField from "@mui/material/TextField";
import { useParams } from 'react-router-dom';

const Input = () => {

  const carServices = useSelector((state) => state.carService.carServices);
  const token = useSelector((state) => state.authentication.token);
  const carServiceId = useSelector((state) => state.authentication.id);
  const { id } = useParams();
  const carService = carServices.find((carService) => carService._id === id);

  const [names, setNames] = useState('');
  const [prices, setPrices] = useState('');

  const dispatch = useDispatch()

  const loading = useSelector(state => state.service.loading);

  const handleService = (e) => {
    setNames(e.target.value)
  }
  const handlePrice = (e) => {
    setPrices(e.target.value)
  }

  const handleClick = (names,prices) => {
    dispatch(createService(names,prices))
    setNames('')
    setPrices('')
  }
  return (
    <div className={styles.input__body}>
     <div className={styles.input__container}>
       {carServiceId !== carService._id ? null : !token ? null : (
       <div className={styles.input__main}>
        <div><TextField id="demo-helper-text-misaligned-no-helper" label="Введите услугу" type="text" value={names} name='name' placeholder='Введите услугу...' onChange={(e)=>handleService(e)} /></div>
        <div><TextField id="outlined-basic" label="Укажите стоимость" variant="outlined" type="text" value={prices} name='price' placeholder='Введите цену...' onChange={(e)=>handlePrice(e)} /></div>
         <div><button className={styles.input__button} type='button' onClick={()=>handleClick(names,prices)} disabled={!names || !prices}>добавить услугу</button> </div>
       </div>)}
      </div>
    </div> 
  ); 
}; 
 
export default Input;