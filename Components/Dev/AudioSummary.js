import React from 'react'

import Image from 'next/image'

import styles from './Dev.module.scss'

import appleMusicLogo from '../../public/static/audiopresslogos/applemusic.png'
// import bullettLogo from '../../public/static/audiopresslogos/bullett.png'
import cbcLogo from '../../public/static/audiopresslogos/cbc.png'
// import conexLogo from '../../public/static/audiopresslogos/Conex.png'
import dynmkLogo from '../../public/static/audiopresslogos/dynmk.png'
import earmilkLogo from '../../public/static/audiopresslogos/earmilk.png'
import faderLogo from '../../public/static/audiopresslogos/fader.png'
import hillydillyLogo from '../../public/static/audiopresslogos/hillydilly.png'
// import hiphopcanadaLogo from '../../public/static/audiopresslogos/hiphopcanada.png'
// import kaltbultLogo from '../../public/static/audiopresslogos/kaltbult.png'
import mtvLogo from '../../public/static/audiopresslogos/mtv.png'
import muchLogo from '../../public/static/audiopresslogos/much.png'
import nestLogo from '../../public/static/audiopresslogos/nest.png'
import paperbagLogo from '../../public/static/audiopresslogos/paperbag.png'
// import publicspaceLogo from '../../public/static/audiopresslogos/publicspace.png'
// import ridethetempoLogo from '../../public/static/audiopresslogos/ridethetempo.png'
import shazamLogo from '../../public/static/audiopresslogos/shazam.png'
// import sofarLogo from '../../public/static/audiopresslogos/sofar.png'
import spotifyLogo from '../../public/static/audiopresslogos/spotify.png'
import thissongslapsLogo from '../../public/static/audiopresslogos/thissongslaps.png'
import suicidesheepLogo from '../../public/static/audiopresslogos/suicidesheep.png'
// import uberflipLogo from '../../public/static/audiopresslogos/uberflip.png'
import viceLogo from '../../public/static/audiopresslogos/vice.png'

export default function AudioSummary() {
  return (
    <>
        <p id={styles['paragraph1']}>
            During my 
            <span className={styles.blueText}> 10 years </span>
            of professional freelance experience as an audio engineer I've learned a lot about 
            <span className={styles.blueText}> people, communication, time management, and expectations.</span>
        </p>
             <br />
        <p id={styles['paragraph2']}>
            Songs I've engineered have amassed 
            <span className={styles.greenText}> 60'000'000 </span> 
            streams and earned more than 
            <span className={styles.greenText}> $400'000 </span> 
            for my clients who have over 
            <span className={styles.greenText}> 700,000 </span> monthly listeners and consistently get featured on major platforms:
        </p>
            <br />
        <section id={styles["pressLogosContainer"]}>
            <div className={styles.pressLogoWrapper}>
                <Image src={muchLogo} objectFit='contain' />
            </div>
            <div className={styles.pressLogoWrapper}>
                <Image src={viceLogo} objectFit='contain' />
            </div>
            <div className={styles.pressLogoWrapper}>
                <Image src={spotifyLogo} objectFit='contain' />
            </div>
            <div className={styles.pressLogoWrapper}>
                <Image src={faderLogo} objectFit='contain' />
            </div>
            <div className={styles.pressLogoWrapper}>
                <Image src={dynmkLogo} objectFit='contain' />
            </div>
            <div className={styles.pressLogoWrapper}>
                <Image src={earmilkLogo} objectFit='contain' />
            </div>
            <div className={styles.pressLogoWrapper}>
                <Image src={faderLogo} objectFit='contain' />
            </div>
            <div className={styles.pressLogoWrapper}>
                <Image src={mtvLogo} objectFit='contain' />
            </div>
            <div className={styles.pressLogoWrapper}>
                <Image src={appleMusicLogo} objectFit='contain' />
            </div>
            <div className={styles.pressLogoWrapper}>
                <Image src={shazamLogo} objectFit='contain' />
            </div>
            <div className={styles.pressLogoWrapper}>
                <Image src={thissongslapsLogo} objectFit='contain' />
            </div>
            <div className={styles.pressLogoWrapper}>
                <Image src={suicidesheepLogo} objectFit='contain' />
            </div>
            <div className={styles.pressLogoWrapper}>
                <Image src={nestLogo} objectFit='contain' />
            </div>
            <div className={styles.pressLogoWrapper}>
                <Image src={paperbagLogo} objectFit='contain' />
            </div>
            <div className={styles.pressLogoWrapper}>
                <Image src={hillydillyLogo} objectFit='contain' />
            </div>
            <div className={styles.pressLogoWrapper}>
                <Image src={cbcLogo} objectFit='contain' />
            </div>
            {/* <div className={styles.pressLogoWrapper}>
                <Image src={sofarLogo} objectFit='contain' />
            </div>
            <div className={styles.pressLogoWrapper}>
                <Image src={uberflipLogo} objectFit='contain' />
            </div>
            <div className={styles.pressLogoWrapper}>
                <Image src={publicspaceLogo} objectFit='contain' />
            </div>
            <div className={styles.pressLogoWrapper}>
                <Image src={bullettLogo} objectFit='contain' />
            </div>
            <div className={styles.pressLogoWrapper}>
                <Image src={conexLogo} objectFit='contain' />
            </div>
            <div className={styles.pressLogoWrapper}>
                <Image src={hiphopcanadaLogo} objectFit='contain' />
            </div>
            <div className={styles.pressLogoWrapper}>
                <Image src={kaltbultLogo} objectFit='contain' />
            </div>
            <div className={styles.pressLogoWrapper}>
                <Image src={ridethetempoLogo} objectFit='contain' />
            </div> */}
        </section>
        <br />
    </>
  )
}
