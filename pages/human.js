import React from 'react'
import Nav from '../Components/Nav'
import styles from '../Components/ComingSoon.module.scss'
import Image from 'next/image'

import lost from '../public/static/customicons/lostundraw.png'

export default function human() {
  return (
    <>
        <Nav />
            <section id={styles["container"]}>
                <div>
                    <div id={styles["imageContainer"]}>
                        <Image src={lost} objectFit='contain' />
                    </div>
                    <h1>Personal section coming soon!</h1>
                </div>
            </section>
        </>
  )
}
