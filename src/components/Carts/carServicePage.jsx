import React from 'react';
import 'carService.module.css'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const carServices = useSelector(state => state.carServices)

const CarServicePage = () => {
  const {id} = useParams()
  const carService = carServices.find(carService => carService._id === id)



  return (
    <div className='car-service'>
      <div className='service-div-img'>
        <img src={carService.img}  className='service-img'/>
      </div>
      <div>{carService.name}</div>
    </div>
  );
};

export default CarServicePage;