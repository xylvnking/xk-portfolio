import React from 'react'
import Image from 'next/image'

import styles from './Audio.module.scss'


import spotifyMasteringSmaller from '../../public/static/customicons/SpotifyMasteringSmaller.png'

import spotifyMixingSmaller from '../../public/static/customicons/SpotifyMixingSmaller.png'

export default function Playlists() {
  return (
    <div id={styles["playlistContainer"]}>
        <a className={styles.playlistIconWrapper} href='https://www.google.com/'>
            <Image src={spotifyMixingSmaller} objectFit='contain' className={styles.customIcon}/>
        </a>
        <a className={styles.playlistIconWrapper} href='https://www.google.com/' target="_blank">
            <Image src={spotifyMasteringSmaller} objectFit='contain'className={styles.customIcon}/>
        </a>
    </div>
  )
}
