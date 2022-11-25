import React from 'react'
import styles from './Audio.module.scss'

export default function Youtube() {
  return (
    <div id={styles["youtubeContainer"]}>
        <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/-iB_CXhMNGk" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            style={{borderRadius: '10px'}}
            className={styles.youtubeIframe}
            allowFullScreen>
                
        </iframe>
    </div>
  )
}
