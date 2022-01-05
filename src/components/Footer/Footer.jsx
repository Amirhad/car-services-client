import React from 'react'
import { YMaps, Map } from 'react-yandex-maps';
import styles from './footer.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <YMaps>
                <div>
                    <h1 className={styles.footer__title}>Карта</h1>
                    <Map
                        width={"100%"}
                        height={"250px"}
                        defaultState={{ center: [55.75, 37.57], zoom: 9 }}></Map>
                </div>
            </YMaps>
            <div className={styles.bgFooter}></div>
        </div>
    )
}
export default Footer;