import React from 'react'
import Image from 'next/image'

import styles from './Audio.module.scss'


import spotifyMasteringSmaller from '../../public/static/customicons/SpotifyMasteringSmaller.png'

import spotifyMixingSmaller from '../../public/static/customicons/SpotifyMixingSmaller.png'

export default function Playlists() {
  return (
    <div id={styles["playlistContainer"]}>
        <a className={styles.playlistIconWrapper} href='https://open.spotify.com/playlist/6m3GgBW9k5iXVXFEftiAYd?si=89808b6fd1bf4613' target="_blank">
            <Image src={spotifyMixingSmaller} objectFit='contain' className={styles.customIcon}/>
        </a>
        <a className={styles.playlistIconWrapper} href='https://open.spotify.com/playlist/1C6J8h0dY0KTni4zMv2mtf?si=355769e2a32749cc' target="_blank">
            <Image src={spotifyMasteringSmaller} objectFit='contain'className={styles.customIcon}/>
        </a>
    </div>
  )
}
