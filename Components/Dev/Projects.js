import React from 'react'
import transferss from '../../public/static/projects/transferss.png'
import Image from 'next/image'

import styles from './Dev.module.scss'


export default function Projects() {
  return (
    <>
        {/* <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 42 4 18l6-12h28l6 12Zm-5.6-25.5h11.2L25.85 9h-3.7Zm4.1 19.05V19.5H9.15Zm3 0L38.85 19.5H25.5Zm7.45-19.05h6.8L36 9h-6.8Zm-24.7 0h6.8L18.8 9H12Z"/></svg> */}
        <h1>Capstone project:</h1>
        <h2>Audio Collaboration Platform</h2>
        <h3>fullstack</h3>
        {/* <h3>fullstack SaaS</h3> */}

        <div id={styles['nextImageWrapper']}>
            <Image src={transferss} objectFit='contain' />
        </div>
    </>
  )
}
