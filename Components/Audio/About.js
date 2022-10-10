import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import pp3Photo from '../../public/static/profilephotos/pp3.jpg'
import pp3nobackPhoto from '../../public/static/profilephotos/pp3noback.png'

import styles from './Audio.module.scss'

export default function About() {
  return (
    <div id={styles["aboutContainer"]}>
        <div className={styles.profilePhotoWrapper}>
            {/* <Image src={pp3Photo} objectFit='contain' /> */}
            <Image src={pp3nobackPhoto} objectFit='contain' />
        </div>
        <div className={styles.aboutText}>
            <h2>I've been working as an audio engineer across Ontario for over 10 years, and been involved with music my entire life.</h2>
            <h2>I've been in drumlines, punk bands, indie bands, school bands, an emo rap duo, pop-electronica duos, produced endless amounts of beats, embraced noise, and really have seen it all. Underground music in Ontario is the sountrack to my life.</h2>
            {/* <h2>I pride myself on having a very wide musical background, both in my experience as a creative/producer, and engineer.</h2> */}
            {/* <h2>I went to school for audio in London before moving to Toronto, where my primary focus has been mixing rap, rnb, electronic, and indie music.</h2> */}
            <h2>After gradutating from college in London I moved to Toronto, where my primary focus has been mixing rap, rnb, electronic, and indie music.</h2>
            <h2>I work remotely, which means I don't run a public studio and book sessions. You make the music, and I take your files and guarantee it will compete with the majors, at a low cost.</h2>
            {/* <h2><span>Let me know when you're ready to work.</span></h2> */}
            <a>Let me know when you're ready to work.</a>
            {/* <h2>Working the way I do allows me to keep costs as low as possible, because I can keep my schedule very flexible - which also allows for me to handle rush jobs and personal issues.</h2> */}

            {/* <h2>From making beats on an MPC500 in my friend's basement in highschool </h2> */}

            {/* <h2>My career works because I know what I'm good at. </h2> */}
            {/* <h2>After graduating from college in London, I moved to Toronto. I stayed there until 2021 before coming to my hometown, Ottawa.</h2> */}

    {/* <p>You hire me when you want your music to sound amazing - if you're looking to book sessions let me know and I'll get you in touch with a great engineer in your city.</p> */}
            {/* <h2>After graduating from college in London, I moved to Toronto where I did what I needed to do in order to make this happen full time.</h2> */}
            {/* <p>I went to an audio program at a college in London where I was almost kicked out because they caught me sleeping inside the studio facilities to get more hours in.</p> */}
        </div>
        
    </div>
  )
}
