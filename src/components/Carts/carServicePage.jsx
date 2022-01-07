import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./carService.module.css";

const CarServicePage = () => {
  const carServices = useSelector((state) => state.carService.carServices);

  const { id } = useParams();
  const carService = carServices.find((carService) => carService._id === id);

  console.log(carService);

  return (
    <div className={styles.bodyCar}>
      <div>
        <div  iv className={styles.imageCar}>
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
