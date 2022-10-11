import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import styles from './Audio.module.scss'



import contactBlue from '../../public/static/customicons/contactBlue.png'
import contactPurple from '../../public/static/customicons/contactPurple.png'
import uploadPurple from '../../public/static/customicons/uploadFilesPurple.png'
// import downloadUndraw from '../../public/static/customicons/downloadUndraw.png'
import examinationUndraw from '../../public/static/customicons/examinationUndraw.png'
import collectingUndraw from '../../public/static/customicons/collectingUndraw.png'
// import natureUndraw from '../../public/static/customicons/natureUndraw.png'
import natureUndraw from '../../public/static/customicons/amongnatureundraw.png'
import launchUndraw from '../../public/static/customicons/launchundraw.png'

export default function Working() {
  return (
    <div id={styles["workingContainer"]}>
        <div className={styles.grid}>
            <div className={styles.step}>
                <div className={styles.iconWrapper}>
                    {/* <Image src={contactBlue} objectFit='contain' /> */}
                    <Image src={contactPurple} objectFit='contain' />
                </div>
                <h1><span className={styles.purpleText}><span className={styles.underline}><a target='_blank' href='https://www.instagram.com/xylvnking/'>Contact me</a></span></span> to talk about your music, budget, and timeline</h1>
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
                    <Image src={natureUndraw} objectFit='contain' />
                </div>
                <h1><span className={styles.purpleText}>Live your life</span> while I work on your music</h1>
            </div>
            
            
            <div className={styles.arrowContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 40q-.65 0-1.075-.425-.425-.425-.425-1.075V13.7L11.15 25.05q-.45.45-1.05.45-.6 0-1.05-.45Q8.6 24.6 8.6 24q0-.6.45-1.05l13.9-13.9q.25-.25.525-.35.275-.1.525-.1.3 0 .55.1.25.1.5.35l13.9 13.9q.45.45.45 1.05 0 .6-.45 1.05-.45.45-1.05.45-.6 0-1.05-.45L25.5 13.7v24.8q0 .65-.425 1.075Q24.65 40 24 40Z"/></svg>
            </div>
            <div></div>
            <div></div>
            <div></div>
            
            <div className={styles.arrowContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 39.4q-.25 0-.525-.1t-.525-.35l-13.9-13.9Q8.6 24.6 8.6 24q0-.6.45-1.05.45-.45 1.05-.45.6 0 1.05.45L22.5 34.3V9.5q0-.65.425-1.075Q23.35 8 24 8q.65 0 1.075.425.425.425.425 1.075v24.8l11.35-11.35q.45-.45 1.05-.45.6 0 1.05.45.45.45.45 1.05 0 .6-.45 1.05l-13.9 13.9q-.25.25-.5.35-.25.1-.55.1Z"/></svg>
            </div>
            <div className={styles.step}>
                <div className={styles.iconWrapper}>
                    {/* <Image src={contactBlue} objectFit='contain' /> */}
                    <Image src={launchUndraw} objectFit='contain' />
                </div>
                <h1>Release your song, and <span className={styles.purpleText}>plan the next!</span></h1>
            </div>
            <div className={styles.arrowContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m22.35 38.95-13.9-13.9q-.25-.25-.35-.5Q8 24.3 8 24q0-.3.1-.55.1-.25.35-.5L22.4 9q.4-.4 1-.4t1.05.45q.45.45.45 1.05 0 .6-.45 1.05L13.1 22.5h24.8q.65 0 1.075.425.425.425.425 1.075 0 .65-.425 1.075-.425.425-1.075.425H13.1l11.4 11.4q.4.4.4 1t-.45 1.05q-.45.45-1.05.45-.6 0-1.05-.45Z"/></svg>
            </div>
            <div className={styles.step}>
                <div className={styles.iconWrapper}>
                    <Image src={collectingUndraw} objectFit='contain' />
                </div>
                {/* files */}
                <h1><span className={styles.purpleText}>Receive all deliverables</span> after you approve the final master</h1>
            </div>
            <div className={styles.arrowContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m22.35 38.95-13.9-13.9q-.25-.25-.35-.5Q8 24.3 8 24q0-.3.1-.55.1-.25.35-.5L22.4 9q.4-.4 1-.4t1.05.45q.45.45.45 1.05 0 .6-.45 1.05L13.1 22.5h24.8q.65 0 1.075.425.425.425.425 1.075 0 .65-.425 1.075-.425.425-1.075.425H13.1l11.4 11.4q.4.4.4 1t-.45 1.05q-.45.45-1.05.45-.6 0-1.05-.45Z"/></svg>
            </div>
            <div className={styles.step}>
                <div className={styles.iconWrapper}>
                    {/* <Image src={contactBlue} objectFit='contain' /> */}
                    <Image src={examinationUndraw} objectFit='contain' />
                </div>
                <h1><span className={styles.purpleText}>Download the mix</span> and mark any revision notes</h1>
            </div>
           
        </div>


    </div>
  )
}
