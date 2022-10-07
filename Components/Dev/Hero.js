import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './Dev.module.scss'

import pp from '../../public/static/pp.png'

import githubIcon from '../../public/static/githubIcon.png'
import githubIconGif from '../../public/static/githubgif.gif'
import githubIconBlack from '../../public/static/githubblackicon.png'
import githubText from '../../public/static/githubText.png'
import githubTextBlack from '../../public/static/githubblacktext.png'



import reactLogo from '../../public/static/React-icon.svg.png'
import firebaseLogo from '../../public/static/fblogo.webp'
import sassLogo from '../../public/static/sass.png'

// import nextLogo from '../../public/static/next.webp'
import nextLogo from '../../public/static/nextBlack.png'
// import nextLogo from '../../public/static/nextText.png'

import gitLogo from '../../public/static/git.png'
import threeLogo from '../../public/static/three.png'
import blenderLogo from '../../public/static/blender.png'
import photoshoplogo from '../../public/static/photoshop.png'


export default function Hero() {
  return (
      <>
        <div id={styles["profilePhotoContainer"]}>
            <Image src={pp} objectFit='contain' />
        </div>
        <h1>Dylan King</h1>
        <h2>Front-End Developer</h2>
        <div id={styles["techLogos"]}>
            <div className={styles.techGridItem}>
                <div className={styles.techLogoContainer}>
                    <Image src={reactLogo} objectFit='contain' />
                </div>
                <p>React</p>    
            </div>
            <div className={styles.techGridItem}>
                <div className={styles.techLogoContainer} >
                    <Image src={firebaseLogo} objectFit='contain' height={200} />
                </div>
                <p>Firebase</p>    
            </div>
            <div className={styles.techGridItem}>
                <div className={styles.techLogoContainer}>
                    <Image src={sassLogo} objectFit='contain' />
                </div>
                <p>Sass</p>    
            </div>
            <div className={styles.techGridItem}>
                <div className={styles.techLogoContainer}>
                    <Image src={threeLogo} objectFit='contain' />
                </div>
                <p>Three.js</p>    
            </div>
            <div className={styles.techGridItem}>
                <div className={styles.techLogoContainer}>
                    <Image src={gitLogo} objectFit='contain' />
                </div>
                <p>GIT</p>    
            </div>
            <div className={styles.techGridItem}>
                {/* <div className={styles.techLogoContainer} style={{opacity: .7}}> */}
                <div className={styles.techLogoContainer} style={{opacity: .85}}>
                    <Image src={nextLogo} objectFit='contain' />
                </div>
                <p>Next</p>    
            </div>
            <div className={styles.techGridItem}>
                <div className={styles.techLogoContainer}>
                    <Image src={photoshoplogo} objectFit='contain' />
                </div>
                <p>Photoshop</p>    
            </div>
            <div className={styles.techGridItem}>
                <div className={styles.techLogoContainer}>
                    <Image src={blenderLogo} objectFit='contain' />
                </div>
                <p>Blender</p>    
            </div>
        </div>
        <a target='_blank' href='https://github.com/xylvnking'>
        <div id={styles["githubLinkContainer"]}>
            <div id={styles["githubIconContainer"]}>
                {/* <Image src={githubIconBlack} objectFit='contain' /> */}
                <Image src={githubIconGif} objectFit='contain' />
            </div>
            <div id={styles["githubTextContainer"]}>
                <Image src={githubTextBlack} objectFit='contain' />
            </div>
            <svg fill='black' xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h7v2H5v14h14v-7h2v7q0 .825-.587 1.413Q19.825 21 19 21Zm4.7-5.3-1.4-1.4L17.6 5H14V3h7v7h-2V6.4Z"/></svg>
        </div>
        </a>
      </>
  )
}
