import React from 'react'
import Nav from '../Components/Nav'
import styles from '../Components/ComingSoon.module.scss'
import Image from 'next/image'

import designer from '../public/static/customicons/designerUndraw2.png'

export default function three() {
  return (
    <>
        <Nav />
            <section id={styles["container"]}>
                <div>
                    <div id={styles["imageContainer"]}>
                        <Image src={designer} objectFit='contain' />
                    </div>
                    <h1>3D section coming soon!</h1>
                </div>
            </section>
        </>
  )
}
