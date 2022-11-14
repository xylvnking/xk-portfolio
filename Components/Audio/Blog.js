import React from 'react'
import Head from 'next/head'
import Image from 'next/image'



import styles from './Audio.module.scss'
import BlogPost from './BlogPost'

export default function Blog() {
  return (
    <div id={styles["blogContainer"]}>
        <div id={styles["grid"]}>
            <BlogPost 
                title={'some title here'}
                img='https://images.unsplash.com/photo-1531860898813-8cecde84646c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                date='date'
                snippet='this is a snippet of an article that will come from sanity'
            />
            <BlogPost 
                title={'some title here'}
                img='https://images.unsplash.com/photo-1627773755683-dfcf2774596a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80'
                date='date'
                snippet='this is a snippet of an article that will come from sanity'
            />
            <BlogPost 
                title={'some title here'}
                img='https://images.unsplash.com/photo-1560330196-5c63edf7f168?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                date='date'
                snippet='this is a snippet of an article that will come from sanity'
            />
            <BlogPost 
                title={'some title here'}
                img='https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                date='date'
                snippet='this is a snippet of an article that will come from sanity'
            />
            {/* <div className={styles.gridItem}>
                Grid Item 1
            </div> */}
            {/* <div className={styles.gridItem}>
                Grid Item 2
            </div>
            <div className={styles.gridItem}>
                Grid Item 3
            </div>
            <div className={styles.gridItem}>
                Grid Item 4
            </div> */}
        </div>
    </div>
  )
}
