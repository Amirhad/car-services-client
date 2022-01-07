import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./carService.module.css";
import { loadCarServices } from '../../redux/features/carService';

const CarServicePage = () => {
  const carServices = useSelector((state) => state.carService.carServices);

  const { id } = useParams();

  const carService = carServices.find((carService) => carService._id === id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCarServices());
  }, [dispatch])

  if (!carServices.length) {
    return 'загрузка';
  }
  return (
    <div className={styles.bodyCar}>
      <div>
        <button></button>
        <div className={styles.imageCar}>
          <div className={styles.nameCar}>{carService.name}</div>
        </div>
        <div>

          <div className={styles.addressBody}>
            <div className={styles.addressCard}>
              <h2>Адрес:</h2>
              <div className={styles.addressCar}>
                <div className={styles.addressCarText}>
                  г.{carService.address.city}, ул.{carService.address.street},{" "}
                  {carService.address.number}
                </div>
              </div>
              <h2>Описание:</h2>
              <div className={styles.addressCar}>
                <div className={styles.textCar}>{carService.text}</div>
              </div>
            </div>
          </div>
          
          <div className={styles.addressBody}>
            <div className={styles.addressCard}>
              <h2>Почта:</h2>
              <div className={styles.addressCar}>
                <div className={styles.qwerr}>{carService.email}</div>
              </div>
              <h2>Телефон:</h2>
              <div className={styles.addressCar}>
                <div className={styles.qwerr}>{carService.phone}</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CarServicePage;
