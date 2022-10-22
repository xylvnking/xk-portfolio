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

// import ppgif from '../../public/static/profilephotos/lilgif.gif'

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
        {/* <div id={styles["profilePhotoContainer"]}>
            <Image src={pp} objectFit='contain' style={{ zIndex: 2}}/>            
        </div> */}
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
        <div className={styles.githubLinkContainer}>
            <div className={styles.githubIconContainer}>
                {/* <Image src={githubIconBlack} objectFit='contain' /> */}
                <Image src={githubIconGif} objectFit='contain' />
            </div>
            <div className={styles.githubTextContainer}>
                <Image src={githubTextBlack} objectFit='contain' />
            </div>
            <svg fill='black' xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h7v2H5v14h14v-7h2v7q0 .825-.587 1.413Q19.825 21 19 21Zm4.7-5.3-1.4-1.4L17.6 5H14V3h7v7h-2V6.4Z"/></svg>
        </div>
        </a>
        <a className={styles.resume} download href='/static/Dylan-King-Front-End-Resume.pdf'>
            <p>resume</p>
            <svg fill='#5f5f5f' xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M10 12.917q-.167 0-.323-.063-.156-.062-.302-.208L6.333 9.604q-.271-.271-.271-.625t.271-.625q.271-.271.625-.271t.625.271l1.542 1.542V4.208q0-.354.26-.614.261-.261.615-.261t.615.261q.26.26.26.614v5.688l1.542-1.542q.271-.271.625-.271t.625.271q.271.271.271.625t-.271.625l-3.042 3.042q-.146.146-.302.208-.156.063-.323.063Zm-4.917 3.75q-.729 0-1.239-.511-.511-.51-.511-1.239v-1.542q0-.354.261-.615.26-.26.614-.26t.615.26q.26.261.26.615v1.542h9.834v-1.542q0-.354.26-.615.261-.26.615-.26t.614.26q.261.261.261.615v1.542q0 .729-.511 1.239-.51.511-1.239.511Z"/></svg>
        </a>
      </>
  )
}
