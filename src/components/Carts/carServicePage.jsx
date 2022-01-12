import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./carService.module.css";
import { loadCarServices, uploadAvatar } from "../../redux/features/carService";
import { Map, Placemark, YMaps } from "react-yandex-maps";
import inputIcon from "../../assets/input__file__icon.png";

const CarServicePage = () => {
  const carServices = useSelector((state) => state.carService.carServices);
  const token = useSelector((state) => state.authentication.token);
  const carServiceId = useSelector((state) => state.authentication.id);
  const dispatch = useDispatch();
  const { id } = useParams();

  const carService = carServices.find((carService) => carService._id === id);

  useEffect(() => {
    dispatch(loadCarServices());
  }, [dispatch]);

  const handleChangeImg = (e) => {
    dispatch(uploadAvatar(e.target.files[0], id));
  };

  if (!carServices.length) {
    return "загрузка";
  }

  return (
    <div className={styles.bodyCar}>
      <div>
        <div className={styles.imageCar}>
          <div className={styles.nameCar}>
            <div className={styles.mright}>{carService.name} {carServiceId !== carService._id ? null : !token ? null : (
              <div class="input__wrapper">
                <input
                  onChange={(e) => handleChangeImg(e)}
                  name="file"
                  type="file"
                  id="input__file"
                  className={`${styles.input} ${styles.input__file}`}
                  multiple
                />
                <label for="input__file" className={styles.input__file_button}>
                  <span className={styles.input__file_button_text}>
                    <img
                      className={styles.input__file_icon_wrapper}
                      src={inputIcon}
                      alt=""
                    />
                  </span>
                </label>
              </div>
            )}  </div>
            
          </div>
          {carService.img ? (
            <img src={`http://localhost:4000/${carService.img}`} alt="avatar" />
          ) : (
            <img
              src="https://www.sdeuropean.co.nz/edit/image_cache/shutterstock_7271708712_2000x1335c0pcenter.jpg"
              alt=""
            />
          )}
          <div className={styles.shadow}></div>
        </div>
        <div>
          <div className={styles.addressBody}>
            <div className={styles.addressCard}>
              <button className={styles.cardButton}>
                <a href="/">На главную</a>
              </button>
              <hr />
              <h2>Адрес:</h2>
              <div className={styles.addressCar}>
                <div className={styles.addressCarText}>
                  г.{carService.address.city}, ул.
                  {carService.address.street}, {carService.address.number}
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
      <YMaps>
        <div>
          <Map
            width={"100%"}
            height={"300px"}
            defaultState={{ center: [43.318369, 45.692419], zoom: 11 }}
          >
            <Placemark geometry={[43.318369, 45.692419]} />
          </Map>
        </div>
      </YMaps>
    </div>
  );
};

export default CarServicePage;
