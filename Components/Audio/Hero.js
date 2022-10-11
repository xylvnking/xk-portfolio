import React from 'react'
import styles from './Audio.module.scss'

export default function Hero() {
    return (
        <div id={styles["heroContainer"]}>
            <div id={styles["taglineIntro"]}>
                <h3 id={styles["taglineLine1"]}><span className={styles.blueText}>Major label</span> sound,</h3>
                <h3 id={styles["taglineLine2"]}>for an <span className={styles.purpleText}>independent price.</span></h3>
            </div>
        </div>
    )
}
