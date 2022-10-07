import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from './Dev.module.scss'
import pp from '../../public/static/pp.png'
import githubIcon from '../../public/static/githubIcon.png'
import githubText from '../../public/static/githubText.png'
import reactLogo from '../../public/static/React-icon.svg.png'


export default function Hero() {
  return (
      <>
        <div id={styles["profilePhotoContainer"]}>
            <Image
                // src='/../../public/static/pp.png'
                src={pp}
                // width={50}
                // height={50}
                id={styles["profilePhoto"]}
                // className={styles.nextImage}
                // layout='fixed'
                // layout='fill'
                objectFit='contain'
            />
        </div>
        <h1>Dylan King</h1>
        <h2>Front-End Developer</h2>
        <div id={styles["techLogos"]}>
            <div className={styles.techGridItem}>
                <div className={styles.techLogoContainer}>
                    <Image src={reactLogo} id={styles["githubIcon"]} objectFit='contain' />
                </div>
                <p>React</p>    
            </div>
            <p>Firebase</p>
            <p>Sass</p>
            <p>NextJs</p>
            <p>GIT</p>
            <p>Three.js</p>
        </div>
        {/* <h3>10 yoe pro audio</h3> */}
        <div id={styles["githubLinkContainer"]}>
            <a id={styles["githubIconContainer"]}>
                <Image src={githubIcon} id={styles["githubIcon"]} objectFit='contain' />
            </a>
            <a id={styles["githubTextContainer"]}>
                <Image src={githubText} id={styles["githubText"]} objectFit='contain' />
                {/* Github */}
            </a>
        </div>
        {/* <a className={styles.nextImageContainer}> */}
        {/* </a> */}
        {/* <h3>I'm a front-end developer with 10 years of experience in pro audio</h3> */}
      </>
  )
}
