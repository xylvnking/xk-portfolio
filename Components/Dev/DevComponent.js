import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import styles from './Dev.module.scss'

import Hero from './Hero'
import AudioSummary from './AudioSummary'
import Projects from './Projects'

export default function DevComponent() {
  return (
    <div id={styles["container"]}>
        {/* <Head>
            <title>Dylan King's Portfolio</title>
            <meta name="xk-portfolio" content="Generated by create next app" />
            <link rel="icon" href="favicon.ico?v=1.1"/>
        </Head> */}
        <main>
            <section id={styles["hero"]}>
                <Hero />
            </section>
            <section id={styles["audioSummary"]}>
                <AudioSummary />
            </section>
            {/* <div style={{height: '50vw'}}></div> */}
            {/* <section id={styles["techstack"]}>
                <h1>Technologies</h1>
            </section> */}
            {/* <hr /> */}
            <section id={styles["projects"]}>
                <Projects />
            </section>
            {/* <section id={styles["futureInterests"]}>
                <h1>future interests</h1>
            </section> */}
        </main>
    </div>
  )
}