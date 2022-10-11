import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import ppgif from '../../public/static/profilephotos/lilgif.gif'

import styles from './Audio.module.scss'

export default function Contact() {
  return (
    <div id={styles["contactContainer"]}>
        <article id={styles["contactCard"]}>
            <div id={styles["contactPhoto"]}>
                {/* <Image src={ppgif} objectFit='contain'   width={500}   height={500}/> */}
                <Image src={ppgif} objectFit='contain'  />
                {/* <Image src={ppgif} objectFit='cover'/> */}
            </div>
            <div id={styles["contactText"]}>
                <a id={styles["contactButton"]}>
                    <h1 style={{cursor: 'text'}}>xylvnking@gmail.com</h1>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M9 18q-.825 0-1.412-.587Q7 16.825 7 16V4q0-.825.588-1.413Q8.175 2 9 2h9q.825 0 1.413.587Q20 3.175 20 4v12q0 .825-.587 1.413Q18.825 18 18 18Zm0-2h9V4H9v12Zm-4 6q-.825 0-1.413-.587Q3 20.825 3 20V7q0-.425.288-.713Q3.575 6 4 6t.713.287Q5 6.575 5 7v13h10q.425 0 .713.288.287.287.287.712t-.287.712Q15.425 22 15 22ZM9 4v12V4Z"/></svg> */}
                </a>
                <h1 id={styles["contactButton"]} >
                    <a className={styles.underline} target='_blank' href='https://www.instagram.com/xylvnking/'>Instagram</a>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M9 18q-.825 0-1.412-.587Q7 16.825 7 16V4q0-.825.588-1.413Q8.175 2 9 2h9q.825 0 1.413.587Q20 3.175 20 4v12q0 .825-.587 1.413Q18.825 18 18 18Zm0-2h9V4H9v12Zm-4 6q-.825 0-1.413-.587Q3 20.825 3 20V7q0-.425.288-.713Q3.575 6 4 6t.713.287Q5 6.575 5 7v13h10q.425 0 .713.288.287.287.287.712t-.287.712Q15.425 22 15 22ZM9 4v12V4Z"/></svg> */}
                </h1>
                
            
                {/* <p>Please note: In order to keep my schedule flexible so that I provide the quality I do at the price I offer, <strong>I don't do sessions over zoom.</strong> If you're looking to work with somebody who you can schedule sessions with, I'm happy to put you in contact with some other engineers anywhere in Canada that I can vouch for.</p> */}
            </div>

        </article>


    </div>
  )
}
