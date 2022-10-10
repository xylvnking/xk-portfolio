import React from 'react'
import styles from './Audio.module.scss'

import Image from 'next/image'

import appleMusicLogo from '../../public/static/audiopresslogos/applemusic.png'
import bullettLogo from '../../public/static/audiopresslogos/bullett.png'
import cbcLogo from '../../public/static/audiopresslogos/cbc.png'
import conexLogo from '../../public/static/audiopresslogos/Conex.png'
import dynmkLogo from '../../public/static/audiopresslogos/dynmk.png'
import earmilkLogo from '../../public/static/audiopresslogos/earmilk.png'
import faderLogo from '../../public/static/audiopresslogos/fader.png'
import hillydillyLogo from '../../public/static/audiopresslogos/hillydilly.png'
import hiphopcanadaLogo from '../../public/static/audiopresslogos/hiphopcanada.png'
import kaltbultLogo from '../../public/static/audiopresslogos/kaltbult.png'
import mtvLogo from '../../public/static/audiopresslogos/mtv.png'
import muchLogo from '../../public/static/audiopresslogos/much.png'
import nestLogo from '../../public/static/audiopresslogos/nest.png'
import paperbagLogo from '../../public/static/audiopresslogos/paperbag.png'
import publicspaceLogo from '../../public/static/audiopresslogos/publicspace.png'
import ridethetempoLogo from '../../public/static/audiopresslogos/ridethetempo.png'
import shazamLogo from '../../public/static/audiopresslogos/shazam.png'
import sofarLogo from '../../public/static/audiopresslogos/sofar.png'
import spotifyLogo from '../../public/static/audiopresslogos/spotify.png'
import thissongslapsLogo from '../../public/static/audiopresslogos/thissongslaps.png'
import suicidesheepLogo from '../../public/static/audiopresslogos/suicidesheep.png'
import uberflipLogo from '../../public/static/audiopresslogos/uberflip.png'
import viceLogo from '../../public/static/audiopresslogos/vice.png'

export default function Stats() {
    return (
        <div id={styles["statsPressLogosContainer"]}>
                {/* <div id={styles["stats"]}>
                    <div>
                        <h1>60'000'000+</h1>
                        <h2>streams</h2>
                    </div>
                    <div>
                        <h1>$400'000+</h1>
                        <h2>royalties generated</h2>
                    </div>
                    <div>
                        <h1>700'000+</h1>
                        <h2>monthly listeners</h2>
                    </div>
                    <div>
                        <h1>25000+</h1>
                        <h2>hours of experience</h2>
                    </div>
                </div> */}

                <div id={styles["pressLogosContainer"]}>
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
                    <div className={styles.pressLogoWrapper}>
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
                    </div>
                </div>
            
        </div>
    )
}