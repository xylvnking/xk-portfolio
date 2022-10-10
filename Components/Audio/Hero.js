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

export default function Hero() {
    return (
        <div id={styles["heroContainer"]}>

            {/* <h1>Dylan King</h1>
            <h1>Audio Engineer</h1>
            <h1>Ontario, Canada</h1> */}
            <div id={styles["taglineIntro"]}>
                <h3 id={styles["taglineLine1"]}><span className={styles.blueText}>Major label</span> sound,</h3>
                <h3 id={styles["taglineLine2"]}>for an <span className={styles.greenText}>independent price.</span></h3>
            </div>
            
            
        </div>
    )
}
