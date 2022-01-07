import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';



const CarServicePage = () => {

  const carServices = useSelector(state => state.carService.carServices)

  const {id} = useParams()
  const carService = carServices.find(carService => carService._id === id)


  if(carService) {
    console.log(1)
  }

  return (
    <div className='car-service'>
      <div className='service-div-img'>
        <div>{carService.img}</div>
      </div>
      <div>{carService.name}</div>
      <div>{carService.text}</div>
      <div>{carService.address}</div>
      <div>{carService.phone}</div>
      <div>{carService.email}</div>

    </div>
  );
};

export default CarServicePage;