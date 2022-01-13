import React, { useEffect } from "react";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { deleteService, loadService } from "../../../redux/features/service";
import styles from "./serviceList.module.css";

const ServiceList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadService());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteService(id));
  };

  const services = useSelector((state) => state.service.services);
  const loading = useSelector((state) => state.service.loading);

  return (
    <>
      <Input />
      <div className={styles.services}>
        <div>
          {loading
            ? "идет загрузка..."
            : services.map((service) => {
                return (
                  <div className={styles.service__body}>
                    <div className={styles.service__container}>
                      <div className={styles.service__main}>
                        <div className={styles.name}>
                          <span>{service.name}</span>
                        </div>
                        <div className={styles.div_delete}>
                          <span>от {service.price}₽</span>
                          <button
                            className={styles.btn_delete}
                            onClick={() => handleDelete(service._id)}
                          >
                            удалить
                          </button>
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
