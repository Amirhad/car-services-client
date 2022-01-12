import React, { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { deleteService, loadService } from '../../../redux/features/service';
import styles from './serviceList.module.css' 
 
 
const ServiceList = () => { 
 
  const dispatch = useDispatch() 
 
  useEffect(()=>{ 
    dispatch(loadService()) 
  }, [dispatch]) 

  const handleDelete = (id) => { 
    dispatch(deleteService(id)) 
  } 
 
  const services = useSelector(state => state.service.services) 
  const loading = useSelector(state => state.service.loading) 
 
  return ( 
    <div className={styles.services}> 
    <div>{loading ? 'идет загрузка...' : 
    services.map((service)=> { 
      return( 
        <div className={styles.services}> 
        <div className={styles.name}> 
          <span>{service.name}</span> 
        </div> 
        <div className={styles.price}> 
          <span>{service.price}</span> 
        </div> 
        <div className={styles.div_delete}> 
          <button className={styles.btn_delete} onClick={()=>handleDelete(service._id)}>x</button> 
        </div> 
         
      </div> 
      ) 
    }) 
    }</div> 
    </div> 
  ); 
}; 
 
export default ServiceList;