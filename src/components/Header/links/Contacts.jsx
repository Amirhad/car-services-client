import React from 'react'
import styles from "./linksStyles/contacts.module.css";

const Contacts = () => {
  return (
    <div className={styles.contacts__body}>
      <div className={styles.contacts__container}>
        <div className={styles.contacts__header}>
          <h1 className={styles.contacts__title}>Наши контакты</h1>
          <div className={styles.contacts__text}>
            <p>
              Cover is a one-page template for building simple and beautiful
              home pages. Download, edit the text, and add your own fullscreen
              background photo to make it your own.
            </p>
          </div>
          <div className={styles.contacts__text}>
            <p>
              Cover is a one-page template for building simple and beautiful
              home pages. Download, edit the text, and add your own fullscreen
              background photo to make it your own.
            </p>
          </div>
          <div className={styles.contacts__text}>
            <p>
              Cover is a one-page template for building simple and beautiful
              home pages. Download, edit the text, and add your own fullscreen
              background photo to make it your own.
            </p>
          </div>
          <div className={styles.contacts__text}>
            <p>
              Cover is a one-page template for building simple and beautiful
              home pages. Download, edit the text, and add your own fullscreen
              background photo to make it your own.
            </p>
          </div>
          <div className={styles.contacts__text}>
            <p>
              Cover is a one-page template for building simple and beautiful
              home pages. Download, edit the text, and add your own fullscreen
              background photo to make it your own.
            </p>
          </div>
          <button className={styles.contacts__button}> <a className={styles.contacts__toHome} href="/"> На главную </a></button>
          <div className={styles.contacts__footer}>
            Cover template for Bootstrap, by @mdo.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
