import React, { useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { createService } from '../../../redux/features/service';
import styles from './input.module.css' 
 
const Input = () => { 
 
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
    <div className={styles.input}> 
      <input type="text" value={names} name='name' placeholder='Введите услугу...' onChange={(e)=>handleService(e)}/> 
      <input type="text" value={prices} name='price' placeholder='Введите цену...' onChange={(e)=>handlePrice(e)}/> 
      <button type='button' onClick={()=>handleClick(names,prices)} disabled={!names || !prices}>добавить услугу</button> 
    </div> 
  ); 
}; 
 
export default Input;