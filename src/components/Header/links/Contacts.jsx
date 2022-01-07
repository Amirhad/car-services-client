import React from "react";
import styles from "./linksStyles/contacts.module.css";

const Contacts = () => {
  return (
    <div className={styles.contacts__body}>
      <div className={styles.contacts__container}>
        <div className={styles.contacts__header}>
          <h1 className={styles.contacts__title}>Наши контакты</h1>
          <div className={styles.contacts__text}>
            <ul>
              <li>Имя: Iznaur</li>
              <li>Телефон: 7989-878-45-73</li>
              <li>
                Должность: Главный сварщик. Должностные обязанности. Руководит
                технологической подготовкой выполнения сварочных работ,
                обеспечивает изготовление и выпуск высококачественной продукции,
                совершенствование конструкций изделий, их технологичность,
                экологичность, высокую производительность труда
              </li>
            </ul>
          </div>
          <div className={styles.contacts__text}>
            <ul>
              <li>Имя: Ramzan</li>
              <li>Телефон: 7989-545-33-22</li>
              <li>
                Должность: Начальник хозяйственного отдела. Должностные
                обязанности. Обеспечивает хозяйственное обслуживание и
                надлежащее состояние в соответствии с правилами и нормами
                производственной санитарии и противопожарной защиты зданий и
                помещений, в которых расположены подразделения предприятия,
                учреждения, организации, а также контроль за исправностью
                оборудования (лифтов, освещения, систем отопления, вентиляции и
                др.).
              </li>
            </ul>
          </div>
          <div className={styles.contacts__text}>
            <ul>
              <li>Имя: Bilal</li>
              <li>Телефон: 7928-332-99-00</li>
              <li>
                Должность: Директор по связам с инвесторами. Должностные
                обязанности. Осуществляет руководство формированием, реализацией
                и развитием стратегической политики организации в области связей
                с инвесторами.
              </li>
            </ul>
          </div>
          <div className={styles.contacts__text}>
            <ul>
              <li>Имя: Amir</li>
              <li>Телефон: 7828-179-30-09</li>
              <li>
                Должность: Дилер. Должностные обязанности. Обеспечивает развитие
                взаимосвязей с потребителями товаров, выявляет и формирует спрос
                на услуги, выполняет работу по покупке или продаже товаров оптом
                , акций, облигаций, других финансовых документов и ценных бумаг,
                включая иностранную валюту, по предоставлению кредитно-денежных
                и других услуг.
              </li>
            </ul>
          </div>
          <div className={styles.contacts__text}>
            <ul>
              <li>Имя: Adam</li>
              <li>Телефон: 7989-553-78-33</li>
              <li>
                Должность: Ландшафтный архитектор. Должностные обязанности.
                Руководит технологической подготовкой выполнения сварочных
                работ.
              </li>
            </ul>
          </div>
          <button className={styles.contacts__button}>
            {" "}
            <a className={styles.contacts__toHome} href="/">
              {" "}
              На главную{" "}
            </a>
          </button>
          <div className={styles.contacts__footer}>
            Cover template for Bootstrap, by @mdo.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
