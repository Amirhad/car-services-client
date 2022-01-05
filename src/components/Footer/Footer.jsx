import React from 'react'
import { YMaps, Map } from 'react-yandex-maps';
import styles from './footer.module.css'

function Footer() {
    return (
        <YMaps>
            <div>
                <h1>Карта</h1>
                <Map className={styles.map} defaultState={{center: [55.75, 37.57], zoom: 9}}></Map>
            </div>
        </YMaps>
    )
}
export default Footer;