import React, { useEffect } from "react";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { deleteService, loadService } from "../../../redux/features/service";
import styles from "./serviceList.module.css";
import { useParams } from "react-router-dom";

const ServiceList = () => {
  const carServices = useSelector((state) => state.carService.carServices);
  const token = useSelector((state) => state.authentication.token);
  const carServiceId = useSelector((state) => state.authentication.id);
  const { id } = useParams();
  const carService = carServices.find((carService) => carService._id === id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadService());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteService(id));
  };

  const loading = useSelector((state) => state.service.loading);

  return (
    <>
      <Input />
      <div className={styles.services}>
        <div>
          {loading
            ? "идет загрузка..."
            : carService.service.map((service) => {
                return (
                  <div className={styles.service__body} key={service._id}>
                    <div className={styles.service__container}>
                      <div className={styles.service__main}>
                        <div className={styles.name}>
                          <span>{service.name}</span>
                        </div>
                        <div className={styles.div_delete}>
                          <span>от {service.price}₽</span>
                          {carServiceId !==
                          carService._id ? null : !token ? null : (
                            <button
                              className={styles.btn_delete}
                              onClick={() => handleDelete(service._id)}
                            >
                              удалить
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>{" "}
    </>
  );
};

export default ServiceList;
