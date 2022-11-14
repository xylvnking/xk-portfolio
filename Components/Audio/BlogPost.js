import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from './Audio.module.scss'

/* <BlogPost 
    title={'some title here'}
    img='someimagelink'
    date='date'
    snippet='this is a snippet of an article that will come from sanity'
/> */


export default function BlogPost(props) {
  return (
    <div className={styles.gridItem}>
        
        {/* {props.someimagelink} */}
        <div className={styles.blogImageWrapper}>
            <Image 
                src={props.img}
                objectFit='cover'
                // layout='fill'
                width={200}
                height={100}
                className={styles.blogImage}
                
                />
        </div>


        <h1>{props.title}</h1>
        {/* <h6>{props.date}</h6> */}
        <h6>January 1st 2023</h6>
        <p>{props.snippet}</p>

    </div>
  )
}
