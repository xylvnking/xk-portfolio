import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import styles from './Audio.module.scss'



import contactBlue from '../../public/static/customicons/contactBlue.png'
import contactPurple from '../../public/static/customicons/contactPurple.png'
import uploadPurple from '../../public/static/customicons/uploadFilesPurple.png'
// import downloadUndraw from '../../public/static/customicons/downloadUndraw.png'
import examinationUndraw from '../../public/static/customicons/examinationUndraw.png'

export default function Working() {
  return (
    <div id={styles["workingContainer"]}>

        <div className={styles.step}>
            <div className={styles.iconWrapper}>
                {/* <Image src={contactBlue} objectFit='contain' /> */}
                <Image src={contactPurple} objectFit='contain' />
            </div>
            <h1><span className={styles.purpleText}>Contact me</span> to talk about your music, budget, and timeline</h1>
        </div>

        <div className={styles.arrowContainer}>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M22.95 38.9q-.4-.4-.4-1.05t.4-1.05l11.3-11.3H9.5q-.65 0-1.075-.425Q8 24.65 8 24q0-.65.425-1.075Q8.85 22.5 9.5 22.5h24.75l-11.3-11.3q-.4-.4-.4-1.075 0-.675.4-1.075.4-.4 1.05-.4t1.05.4l13.9 13.9q.25.25.35.5.1.25.1.55 0 .25-.1.525t-.35.525l-13.9 13.9q-.4.4-1.05.375-.65-.025-1.05-.425Z"/></svg>
        </div>

        <div className={styles.step}>
            <div className={styles.iconWrapper}>
                {/* <Image src={contactBlue} objectFit='contain' /> */}
                <Image src={uploadPurple} objectFit='contain' />
            </div>
            <h1>Upload your <span className={styles.purpleText}>well organized</span> files</h1>
        </div>

        <div className={styles.arrowContainer}>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M22.95 38.9q-.4-.4-.4-1.05t.4-1.05l11.3-11.3H9.5q-.65 0-1.075-.425Q8 24.65 8 24q0-.65.425-1.075Q8.85 22.5 9.5 22.5h24.75l-11.3-11.3q-.4-.4-.4-1.075 0-.675.4-1.075.4-.4 1.05-.4t1.05.4l13.9 13.9q.25.25.35.5.1.25.1.55 0 .25-.1.525t-.35.525l-13.9 13.9q-.4.4-1.05.375-.65-.025-1.05-.425Z"/></svg>
        </div>
        
        <div className={styles.step}>
            <div className={styles.iconWrapper}>
                {/* <Image src={contactBlue} objectFit='contain' /> */}
                <Image src={examinationUndraw} objectFit='contain' />
            </div>
            <h1><span className={styles.purpleText}>Download the mix</span> and make any neccesary revision notes</h1>
        </div>
    </div>
  )
}
