import Link from 'next/link'
import React from 'react'

import styles from './Nav.module.scss'

export default function Nav() {

    /*
    svg params::

    fill: 0
    weight: 400
    grade: 0
    optical scale: 40px

    */

  return (
    <div id={styles['container']}>
        <nav>
            <Link href='/' >
                {/* <p className={styles.link}>Home</p> */}
                {/* Home */}
                <div className={styles.link}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="M9.458 32.208h5.834v-10.25h9.416v10.25h5.834V16.375L20 8.458 9.458 16.375Zm0 2.792q-1.166 0-1.979-.812-.812-.813-.812-1.98V16.375q0-.667.291-1.25.292-.583.834-.958L18.333 6.25q.375-.292.792-.417.417-.125.875-.125t.875.125q.417.125.792.417l10.541 7.917q.542.375.834.958.291.583.291 1.25v15.833q0 1.167-.812 1.98-.813.812-1.979.812h-8.584V24.708h-3.916V35ZM20 20.333Z"/></svg>
                </div>
            </Link>
            <Link href='/dev' >
                {/* <p className={styles.link}>DEV</p> */}
                {/* software (terminal) */}
                <div className={styles.link}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="M21.667 28.125q-.584 0-.979-.396-.396-.396-.396-1.021 0-.583.396-.979.395-.396.979-.396h6.666q.584 0 .979.396.396.396.396.979 0 .625-.396 1.021-.395.396-.979.396Zm-10.125-1.083q-.417-.417-.396-.98.021-.562.396-.979l3.291-3.375-3.333-3.333q-.417-.417-.396-.979.021-.563.438-.979.416-.417.958-.417t.958.417l4.334 4.333q.25.208.312.458.063.25.063.5 0 .292-.063.521-.062.229-.312.479l-4.334 4.334q-.375.375-.937.396-.563.02-.979-.396Zm-5.417 6.291q-1.125 0-1.958-.833-.834-.833-.834-1.958V9.458q0-1.125.834-1.958.833-.833 1.958-.833h27.75q1.125 0 1.958.833.834.833.834 1.958v21.084q0 1.125-.834 1.958-.833.833-1.958.833Zm0-2.791h27.75V12.875H6.125v17.667Z"/></svg>
                </div>
            </Link>
            <Link href='/audio'>
                {/* <p className={styles.link}>audio</p> */}
                {/* SPeaker */}
                <div className={styles.link}>                
                    <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="M28.875 36.667h-17.75q-1.167 0-1.979-.813-.813-.812-.813-1.979V6.125q0-1.167.813-1.979.812-.813 1.979-.813h17.75q1.167 0 1.979.813.813.812.813 1.979v27.75q0 1.167-.813 1.979-.812.813-1.979.813Zm0-2.792V6.125h-17.75v27.75Zm-8.833-19q1.333 0 2.27-.937.938-.938.938-2.271 0-1.334-.938-2.271-.937-.938-2.27-.938-1.375 0-2.313.938-.937.937-.937 2.271 0 1.333.937 2.271.938.937 2.313.937ZM20 31.792q2.833 0 4.812-1.98 1.98-1.979 1.98-4.812t-1.98-4.812q-1.979-1.98-4.812-1.98t-4.813 1.98Q13.208 22.167 13.208 25t1.979 4.812q1.98 1.98 4.813 1.98ZM20 29q-1.667 0-2.833-1.167Q16 26.667 16 25q0-1.667 1.167-2.833Q18.333 21 20 21q1.667 0 2.833 1.167Q24 23.333 24 25q0 1.667-1.167 2.833Q21.667 29 20 29ZM11.125 6.125v27.75-27.75Z"/></svg>
                </div>
            </Link>
            {/* <Link href='/three'> */}
            <Link href='/comingsoon'>
                {/* <p className={styles.link}>three</p> */}
                {/* 3d */}
                <div className={styles.link}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="M3.042 9.708q-.584 0-.98-.416-.395-.417-.395-1V6.458q0-2 1.395-3.395 1.396-1.396 3.396-1.396h1.834q.583 0 1 .396.416.395.416.979 0 .625-.416 1.021-.417.395-1 .395H6.458q-.875 0-1.437.563-.563.562-.563 1.437v1.834q0 .583-.416 1-.417.416-1 .416Zm3.416 28.625q-2 0-3.396-1.395-1.395-1.396-1.395-3.396v-1.834q0-.583.395-1 .396-.416.98-.416.625 0 1.02.416.396.417.396 1v1.834q0 .875.563 1.437.562.563 1.437.563h1.834q.583 0 1 .416.416.417.416 1 0 .584-.416.98-.417.395-1 .395Zm25.25-.125q-.583 0-1-.396-.416-.395-.416-.979 0-.583.416-.979.417-.396 1-.396h1.834q.875 0 1.437-.583.563-.583.563-1.417v-1.875q0-.583.416-.979.417-.396 1-.396.584 0 .98.396.395.396.395.979v1.875q0 1.959-1.395 3.354-1.396 1.396-3.396 1.396Zm5.25-28.5q-.625 0-1.02-.416-.396-.417-.396-1V6.458q0-.875-.563-1.437-.562-.563-1.437-.563h-1.834q-.583 0-1-.416-.416-.417-.416-1 0-.584.416-.979.417-.396 1-.396h1.834q2 0 3.396 1.396 1.395 1.395 1.395 3.395v1.834q0 .583-.395 1-.396.416-.98.416ZM18.542 32.875l-8.875-5.167q-.667-.375-1.021-1.02-.354-.646-.354-1.396V14.958q0-.75.354-1.395.354-.646 1.021-1.021l8.916-5.209q.667-.375 1.417-.375t1.417.375l8.916 5.209q.667.375 1.021 1.021.354.645.354 1.395v10.334q0 .75-.375 1.396-.375.645-1.041 1.02l-8.959 5.167q-.666.375-1.395.375-.73 0-1.396-.375Zm.083-3.167v-8.791l-7.5-4.292v8.625Zm2.75 0 7.542-4.458v-8.625l-7.542 4.292ZM20 18.458l7.5-4.333L20 9.792l-7.5 4.333Zm.042 2.459ZM20 18.458Zm1.375 2.459Zm-2.75 0Z"/></svg>
                </div>
            </Link>
            {/* <Link href='/human'> */}
            <Link href='/comingsoon'>
                {/* <p className={styles.link}>human</p> */}
                {/* happy */}
                {/* https://fonts.google.com/icons?icon.query=happy&icon.style=Rounded */}
                <div className={styles.link}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="M26 17.958q1 0 1.667-.646.666-.645.666-1.687 0-1-.666-1.667Q27 13.292 26 13.292t-1.667.666q-.666.667-.666 1.667 0 1.042.666 1.687.667.646 1.667.646Zm-12 0q1 0 1.667-.646.666-.645.666-1.687 0-1-.666-1.667Q15 13.292 14 13.292t-1.667.666q-.666.667-.666 1.667 0 1.042.666 1.687.667.646 1.667.646Zm6 11.167q2.375 0 4.396-1.063 2.021-1.062 3.187-2.854.375-.583.084-1.125-.292-.541-.917-.541-.25 0-.542.166-.291.167-.458.375-1 1.375-2.5 2.125t-3.25.75q-1.75 0-3.25-.75t-2.458-2.083q-.167-.25-.459-.417-.291-.166-.583-.166-.583 0-.875.52-.292.521.125 1.188 1.125 1.75 3.125 2.812 2 1.063 4.375 1.063Zm0 7.542q-3.458 0-6.479-1.313-3.021-1.312-5.292-3.583t-3.583-5.292Q3.333 23.458 3.333 20t1.313-6.5q1.312-3.042 3.583-5.292t5.292-3.562Q16.542 3.333 20 3.333t6.5 1.313q3.042 1.312 5.292 3.562t3.562 5.292q1.313 3.042 1.313 6.5t-1.313 6.479q-1.312 3.021-3.562 5.292T26.5 35.354q-3.042 1.313-6.5 1.313ZM20 20Zm0 13.875q5.792 0 9.833-4.063Q33.875 25.75 33.875 20q0-5.792-4.042-9.833Q25.792 6.125 20 6.125q-5.75 0-9.812 4.042Q6.125 14.208 6.125 20q0 5.75 4.063 9.812Q14.25 33.875 20 33.875Z"/></svg>
                </div>
            </Link>
        </nav>
    </div>
  )
}