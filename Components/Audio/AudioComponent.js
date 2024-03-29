import React, { useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import styles from './Audio.module.scss'

import Hero from './Hero'
import Stats from './Stats'
import Testimonials from './Testimonials'
import About from './About'
import Playlists from './Playlists'
import Working from './Working'
import Contact from './Contact'
import Nav from '../Nav'
import Blog from './Blog'
import Youtube from './Youtube'



export default function AudioComponent() {

    return (
        <div id={styles["container"]}>
            <Head>
                <title>Dylan King's Portfolio</title>
                <meta name="xk-portfolio" content="Generated by create next app" />
                <link rel="icon" href="favicon.ico?v=1.1" />
            </Head>
            <main>
                {/* <Nav /> */}
                <section id={styles["hero"]}>
                    <Hero />
                </section>
                <section id={styles["stats"]}>
                    <Stats />
                </section>
                {/* <section id={styles["youtube"]}>
                    <Youtube />
                </section> */}
                <section id={styles["about"]}>
                    <About/>
                </section>


                <section id={styles["playlists"]}>
                    <Playlists />
                </section>
                    {/* <section id={styles["blog"]}>
                        <Blog />
                    </section> */}
                {/* <section id={styles["working"]}>
                    <Working />
                </section> */}
                {/* <section id={styles["contact"]}>
                    <Contact />
                </section> */}
                <section id={styles["testimonials"]}>
                    <Testimonials />
                </section>

            </main>
        </div>
    )
}
