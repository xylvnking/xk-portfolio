import React from 'react'
import Image from 'next/image'
import lost from '../public/static/customicons/lostundraw.png'

import styles from './ComingSoon.module.scss'
import Nav from './Nav'

export default function PageNotFound() {
    return (
        <>
        <Nav />
            <section id={styles["container"]}>
                <div>
                    <div id={styles["imageContainer"]}>
                        <Image src={lost} objectFit='contain' />
                    </div>
                    <h1>Coming soon!</h1>
                </div>
            </section>
        </>
        // <div>PageNotFound</div>
    )
}


