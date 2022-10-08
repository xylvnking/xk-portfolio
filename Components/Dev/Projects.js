import React from 'react'
import Image from 'next/image'

import styles from './Dev.module.scss'


import githubIconGif from '../../public/static/githubgif.gif'
import transferss from '../../public/static/projects/transferss.png'

import reactLogo from '../../public/static/React-icon.svg.png'
import firebaseLogo from '../../public/static/fblogo.webp'
import sassLogo from '../../public/static/sass.png'

// import nextLogo from '../../public/static/next.webp'
import nextLogo from '../../public/static/nextBlack.png'
// import nextLogo from '../../public/static/nextText.png'

import gitLogo from '../../public/static/git.png'
import threeLogo from '../../public/static/three.png'
import blenderLogo from '../../public/static/blender.png'
import photoshoplogo from '../../public/static/photoshop.png'
import githubTextBlack from '../../public/static/githubblacktext.png'


export default function Projects() {
  return (
    <>
        {/* <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 42 4 18l6-12h28l6 12Zm-5.6-25.5h11.2L25.85 9h-3.7Zm4.1 19.05V19.5H9.15Zm3 0L38.85 19.5H25.5Zm7.45-19.05h6.8L36 9h-6.8Zm-24.7 0h6.8L18.8 9H12Z"/></svg> */}
        {/* <h3>fullstack SaaS</h3> */}

        {/* <div id={styles['nextImageWrapper']}> */}
        <section className={styles.mainProject}>
            
                <h2>Pro Audio Project Collaboration Platform</h2>
                <h3>Fullstack SaaS application for asynchronous workflows</h3>
                
                <section className={styles.projectTechLogoGrid}>
                    <div className={styles.projectTechLogoGridItem}>
                        <div className={styles.nextImageWrapperTechLogo}>
                            <Image src={reactLogo} objectFit='contain' />
                        </div>
                        {/* <p>React</p> */}
                    </div>
                    <div className={styles.projectTechLogoGridItem}>
                        <div className={styles.nextImageWrapperTechLogo}>
                            <Image src={firebaseLogo} objectFit='contain' height={200} />
                        </div>
                        {/* <p>Firebase</p> */}
                    </div>
                    <div className={styles.projectTechLogoGridItem}>
                        <div className={styles.nextImageWrapperTechLogo}>
                            <Image src={sassLogo} objectFit='contain' />
                        </div>
                        {/* <p>Sass</p> */}
                    </div>
                    <div className={styles.projectTechLogoGridItem}>
                        <div className={styles.nextImageWrapperTechLogo}>
                            <Image src={nextLogo} objectFit='contain' height={250}/>
                        </div>
                        {/* <p>Next</p> */}
                    </div>
                </section>
                <section className={styles.description}>
                    <p>
                        This app <strong>allows users to create accounts, upload songs, write revision notes, and invite others to do the same.</strong> When a user uploads a song they become an <em>admin</em> who can then grant other users either the admin or <em>access</em> role, with the latter only allowing read priviledges.
                    </p>
                    <p>
                        Although my main focus long-term is front-end development, I'm still working as a freelance audio engineer while building that new branch of my career. <strong>This application is also to help fascilitate my audio work</strong> - streamlining the workflow of transfering file versions to clients and having them sending back revision notes, all while giving me a practical real-world opportunity to make great use of my front-end development skills.
                    </p>
                </section>
                <section className={styles.projectLinks}>

                    {/* <div className={styles.githubLinkContainer} style={{border: 'none', boxShadow: 'none'}}> */}
                    <div className={styles.projectLinkButton}>
                        <a className={styles.liveSiteLink}>Visit the live site</a>
                        {/* <svg fill='black' xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h7v2H5v14h14v-7h2v7q0 .825-.587 1.413Q19.825 21 19 21Zm4.7-5.3-1.4-1.4L17.6 5H14V3h7v7h-2V6.4Z"/></svg> */}
                        <svg fill='#1e1e1e'  xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M4.5 17q-.625 0-1.062-.438Q3 16.125 3 15.5v-11q0-.625.438-1.062Q3.875 3 4.5 3H10v1.5H4.5v11h11V10H17v5.5q0 .625-.438 1.062Q16.125 17 15.5 17Zm3.562-4L7 11.938 14.438 4.5H12V3h5v5h-1.5V5.562Z"/></svg>
                    </div>
                    {/* <div className={styles.githubLinkContainer} style={{border: 'none', boxShadow: 'none'}}> */}
                    {/* <div className={styles.githubLinkContainer} style={{border: 'none', boxShadow: 'none'}}> */}
                    <div className={styles.projectLinkButton}>
                        <a className={styles.liveSiteLink}>View code on GitHub</a>
                        {/* <svg fill='black' xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h7v2H5v14h14v-7h2v7q0 .825-.587 1.413Q19.825 21 19 21Zm4.7-5.3-1.4-1.4L17.6 5H14V3h7v7h-2V6.4Z"/></svg> */}
                        <svg fill='#1e1e1e' xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M4.5 17q-.625 0-1.062-.438Q3 16.125 3 15.5v-11q0-.625.438-1.062Q3.875 3 4.5 3H10v1.5H4.5v11h11V10H17v5.5q0 .625-.438 1.062Q16.125 17 15.5 17Zm3.562-4L7 11.938 14.438 4.5H12V3h5v5h-1.5V5.562Z"/></svg>
                    </div>

                    


                </section>
                <div className={styles.nextImageWrapperScreenshot}>
                    <Image src={transferss} objectFit='contain' />
                    <Image src={transferss} objectFit='contain' />
                </div>
                {/* <p className={styles.description}>yeah</p> */}
               
            
            

                <section className={styles.projectInfo}>
                    {/* <details>
                        <summary>
                            User authentication 
                            <svg fill=' rgb(30, 30, 30)'xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 30.1 12.7 18.75l1.6-1.6 9.7 9.7 9.7-9.7 1.6 1.65Z"/></svg>
                        </summary>
                        <div>
                            <p>User authentication was implemented using firebase.</p>
                            <p>Although I have plans to have public facing user-generated-content in the future, right now everything on the website requires an authenticated account.</p>
                            <p>This will eventually be a paid platform, so users won't be allowed to freely sign up as they are now.</p>
                        </div>
                    </details>
                    <details>
                        <summary>File Storage</summary>
                        <div>
                            <p>User authentication was implemented using firebase.</p>
                            <p>Although I have plans to have public facing user-generated-content in the future, right now everything on the website requires an authenticated account.</p>
                            <p>This will eventually be a paid platform, so users won't be allowed to freely sign up as they are now.</p>
                        </div>
                    </details> */}
                        <div>
                            <h4>User Authentication</h4>
                            <p>Users have personal data which only they can alter, backed up by server-side security rules.</p>
                        </div>
                        <div>
                            <h4>File Storage</h4>
                            <p>Users can upload and download files to folders associated with songs they have admin priviledges on, backed up by server-side security rules.</p>
                        </div>
                        <div>
                            <h4>NoSQL Cloud Backend</h4>
                            <p>Listicle put a bird on it irony roof party bitters freegan. Next level af jean shorts, air plant kinfolk mlkshk cold-pressed keffiyeh la croix slow-carb plaid gastropub ugh letterpress.</p>
                        </div>
                        <div>
                            <h4>Custom React Hooks</h4>
                            <p>Gatekeep tote bag live-edge kickstarter seitan bicycle rights. Wayfarers subway tile fanny pack gluten-free, next level freegan locavore iceland. </p>
                        </div>
                        <div>
                            <h4>User-configurable Priviledges</h4>
                            <p>Organic tonx pork belly praxis meditation chillwave unicorn neutra hell of. Tofu paleo pok pok vegan, 3 wolf moon hexagon praxis iceland blog unicorn church-key farm-to-table ascot direct trade. </p>
                        </div>
                        <div>
                            <h4>Realtime Data Updates</h4>
                            <p>Gluten-free celiac same keffiyeh, tacos succulents deep v meggings fixie fanny pack blog. Shoreditch live-edge affogato before they sold out, fingerstache cronut wayfarers cornhole gentrify whatever echo park air plant master cleanse.</p>
                        </div>
                        <div>
                            <h4>CRUD Functionality</h4>
                            <p>Wolf bicycle rights schlitz, fixie marfa sustainable chambray plaid farm-to-table. Master cleanse 8-bit fashion axe gluten-free crucifix. Biodiesel whatever seitan la croix retro. </p>
                        </div>
                        <div>
                            <h4>Page Routing</h4>
                            <p>Banh mi thundercats crucifix selfies paleo intelligentsia roof party readymade JOMO coloring book godard hexagon shaman lumbersexual kitsch. Bodega boys poke VHS retro.</p>
                        </div>
                    

                        {/* <p>User Authentication</p>
                        <p>File Storage</p>
                    
                        <p>NoSQL Cloud Backend</p>
                        <p>Custom React Hooks</p>
                    
                        <p>User-configurable Priviledges</p>
                        <p>Realtime Data Updates</p>
                    
                        <p>CRUD Functionality</p>
                        <p>Page Routing</p> */}
                    

                </section>
                <section className={styles.projectLinks}>

                    <div className={styles.githubLinkContainer} style={{border: 'none', boxShadow: 'none'}}>
                        <div className={styles.githubIconContainer}>
                            
                            <Image src='https://media1.giphy.com/media/IwSG1QKOwDjQk/giphy.gif?cid=ecf05e47pg01o3h9fgdjg0sfdx96ltc5oe5pvvi41j6w8vfw&rid=giphy.gif&ct=g' objectFit='contain' height={150} width={150}/>
                        </div>
                        <a className={styles.liveSiteLink}>Visit the live site</a>
                        <svg fill='black' xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h7v2H5v14h14v-7h2v7q0 .825-.587 1.413Q19.825 21 19 21Zm4.7-5.3-1.4-1.4L17.6 5H14V3h7v7h-2V6.4Z"/></svg>
                    </div>

                    <a target='_blank' href='https://github.com/xylvnking'>
                    <div className={styles.githubLinkContainer}>
                        <div className={styles.githubIconContainer}>
                            <Image src={githubIconGif} objectFit='contain' />
                        </div>
                        <div className={styles.githubTextContainer}>
                            <Image src={githubTextBlack} objectFit='contain' />
                        </div>
                        <svg fill='black' xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h7v2H5v14h14v-7h2v7q0 .825-.587 1.413Q19.825 21 19 21Zm4.7-5.3-1.4-1.4L17.6 5H14V3h7v7h-2V6.4Z"/></svg>
                    </div>
                    </a>


                </section>


            
            
              

            
        </section>


        

                        <div style={{height: '400px', width: '100%', backgroundColor: '#050505', display: 'flex', alignItems: 'center', justifyContent: 'center',  filter: 'grayscale(100%', borderRadius: '10px'}}>
                            <Image src={'https://media3.giphy.com/media/05dgux7TEBbY4VxAlb/giphy.gif?cid=ecf05e477f5c2d7c1601cf3f11b94c77054e6c65347220a4&rid=giphy.gif&ct=g'} objectFit='contain' layout='fixed' height={300} width={300}/>
                        </div>


    </>
  )
}
