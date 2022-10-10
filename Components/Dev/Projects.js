import React from 'react'
import Image from 'next/image'

import styles from './Dev.module.scss'


import githubIconGif from '../../public/static/githubgif.gif'
import transferss from '../../public/static/projects/transferss.png'
import screenshot2 from '../../public/static/projects/ss2.png'
import screenshot4 from '../../public/static/projects/ss4.png'
import screenshot5 from '../../public/static/projects/ss5.png'
import hookdemosSS from '../../public/static/projects/hookdemosscreenshot.png'
import markdownEditorSS from '../../public/static/projects/markdowneditorss.png'
import handdetectionSS from '../../public/static/projects/handdetectionss.png'
import cultOfThreeSS from '../../public/static/projects/cultofthreess.png'
import threeDeeEditorSS from '../../public/static/projects/threeeditorss.png'

import reactLogo from '../../public/static/React-icon.svg.png'
import firebaseLogo from '../../public/static/fblogo.webp'
import sassLogo from '../../public/static/sass.png'
import typescriptLogo from '../../public/static/tslogo.png'
import tensorflowLogo from '../../public/static/tflogo.png'
import markdownLogo from '../../public/static/mdlogo.png'
import gatsbyLogo from '../../public/static/gatsbylogo.png'
import howlerLogo from '../../public/static/howlerlogo.png'
import substanceLogo from '../../public/static/substancelogo.png'





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
            <div id={styles["mainProjectContainer"]}>
                {/* <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 42 4 18l6-12h28l6 12Zm-5.6-25.5h11.2L25.85 9h-3.7Zm4.1 19.05V19.5H9.15Zm3 0L38.85 19.5H25.5Zm7.45-19.05h6.8L36 9h-6.8Zm-24.7 0h6.8L18.8 9H12Z"/></svg> */}
                {/* <h3>fullstack SaaS</h3> */}

                {/* <div  id={styles['nextImageWrapper']}> */}
                <section id={styles['mainProject']}>

                    <h2>Pro Audio Project Collaboration Platform v3</h2>
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
                                <Image src={nextLogo} objectFit='contain' height={250} />
                            </div>
                            {/* <p>Next</p> */}
                        </div>
                    </section>
                    <section className={styles.description}>
                        <p>
                            This app <strong>allows users to create accounts, upload songs, write revision notes, and invite others to do the same.</strong> When a user uploads a song they become an <em>admin</em> who can then grant other users either the admin or <em>access</em> role, with the latter only allowing read priviledges.
                        </p>
                        <p>
                            Although my main focus long-term is front-end development, I'm still working as a freelance audio engineer while building this new branch of my career. <strong>This application is also to help fascilitate my audio work</strong> - streamlining the workflow of transfering file versions to clients and having them sending back revision notes, all while giving me a practical real-world opportunity to make great use of my front-end development skills.
                        </p>
                    </section>

                    <section className={styles.projectLinks}>
                        <div className={styles.projectLinkButton}>
                            <a className={styles.liveSiteLink}>Visit the live site</a>
                            <svg fill='#1e1e1e' xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M4.5 17q-.625 0-1.062-.438Q3 16.125 3 15.5v-11q0-.625.438-1.062Q3.875 3 4.5 3H10v1.5H4.5v11h11V10H17v5.5q0 .625-.438 1.062Q16.125 17 15.5 17Zm3.562-4L7 11.938 14.438 4.5H12V3h5v5h-1.5V5.562Z" /></svg>
                        </div>
                        <div className={styles.projectLinkButton}>
                            <a className={styles.liveSiteLink} target='_blank' href='https://github.com/xylvnking/xk-audio-filesharing'>View code on GitHub</a>
                            <svg fill='#1e1e1e' xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M4.5 17q-.625 0-1.062-.438Q3 16.125 3 15.5v-11q0-.625.438-1.062Q3.875 3 4.5 3H10v1.5H4.5v11h11V10H17v5.5q0 .625-.438 1.062Q16.125 17 15.5 17Zm3.562-4L7 11.938 14.438 4.5H12V3h5v5h-1.5V5.562Z" /></svg>
                        </div>
                    </section>

                    <div className={styles.nextImageWrapperScreenshot}>
                        <Image src={transferss} objectFit='contain' />
                    </div>

                    <section className={styles.projectInfo}>
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
                    </section>
                    <>
                        {/* <section className={styles.projectLinks}>

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


                    </section> */}
                    </>
                </section>

                <div className={styles.decoGif} style={{backgroundColor: '#050505'}}>
                    <Image src={'https://media3.giphy.com/media/05dgux7TEBbY4VxAlb/giphy.gif?cid=ecf05e477f5c2d7c1601cf3f11b94c77054e6c65347220a4&rid=giphy.gif&ct=g'} objectFit='contain' layout='fixed' height={300} width={300} />
                </div>

            </div>


            <div id={styles["secondaryProjectsContainer"]}>
                <section id={styles["secondaryProjects"]}>


                    <div className={styles.secondaryProjectsGridColumn}>


                        <article className={styles.secondaryProject}>
                            <header className={styles.secondaryProjectTitles}>
                                <h1>React Hook TypeScript Demos</h1>
                                <h2>Interactive documentation demonstrating how to use all the built-in React Hooks with Typescript</h2>
                            </header>
                            <div className={styles.secondaryProjectTechLogos}>
                                <div className={styles.nextImageWrapperTechLogo}>
                                    <Image src={reactLogo} objectFit='contain' />
                                </div>
                                <div className={styles.nextImageWrapperTechLogo}>
                                    <Image src={typescriptLogo} objectFit='contain' />
                                </div>
                                <div className={styles.nextImageWrapperTechLogo}>
                                    <Image src={sassLogo} objectFit='contain' />
                                </div>
                                <div className={styles.nextImageWrapperTechLogo}>
                                    <Image src={nextLogo} objectFit='contain' />
                                </div>
                            </div>
                            <div className={styles.secondaryProjectDescription}>
                                <p>Pop-up hella vinyl asymmetrical try-hard shabby chic, mustache meggings. Authentic kitsch polaroid kickstarter vice ugh affogato umami same pour-over food truck banh mi jianbing. Shaman normcore DSA pickled. </p>
                            </div>
                            <div className={styles.screenshotImageWrapper}>
                                <Image src={hookdemosSS} objectFit='contain' />
                            </div>
                            <footer>
                                <div>
                                    <a target='_blank' href='https://xk-react-hooks-demos.vercel.app/'>Visit the live site</a>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M4.5 17q-.625 0-1.062-.438Q3 16.125 3 15.5v-11q0-.625.438-1.062Q3.875 3 4.5 3H10v1.5H4.5v11h11V10H17v5.5q0 .625-.438 1.062Q16.125 17 15.5 17Zm3.562-4L7 11.938 14.438 4.5H12V3h5v5h-1.5V5.562Z"/></svg>
                                </div>
                                <div>
                                    <a target='_blank' href='https://github.com/xylvnking/xk-react-hooks-demos'>View the source code on GitHub</a>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M4.5 17q-.625 0-1.062-.438Q3 16.125 3 15.5v-11q0-.625.438-1.062Q3.875 3 4.5 3H10v1.5H4.5v11h11V10H17v5.5q0 .625-.438 1.062Q16.125 17 15.5 17Zm3.562-4L7 11.938 14.438 4.5H12V3h5v5h-1.5V5.562Z"/></svg>
                                </div>
                            </footer>
                        </article>


                        <article className={styles.secondaryProject}>
                            <header className={styles.secondaryProjectTitles}>
                                <h1>FullStack Markdown Editor</h1>
                                <h2>Basic cloud storage CRUD app with Markdown parsing/preview</h2>
                            </header>
                            <div className={styles.secondaryProjectTechLogos}>
                                <div className={styles.nextImageWrapperTechLogo}>
                                    <Image src={reactLogo} objectFit='contain' />
                                </div>
                                <div className={styles.nextImageWrapperTechLogo}>
                                    <Image src={firebaseLogo} objectFit='contain'  height={200}/>
                                </div>
                                <div className={styles.nextImageWrapperTechLogo}>
                                    <Image src={markdownLogo} objectFit='contain' />
                                </div>
                                <div className={styles.nextImageWrapperTechLogo}>
                                    <Image src={gatsbyLogo} objectFit='contain' />
                                </div>
                            </div>
                            <div className={styles.secondaryProjectDescription}>
                                <p>Intelligentsia humblebrag occupy yr, leggings chartreuse vinyl hexagon polaroid ethical readymade palo santo selvage. Jianbing dreamcatcher vibecession Brooklyn meh mustache hashtag taiyaki readymade.</p>
                            </div>
                            <div className={styles.screenshotImageWrapper}>
                                <Image src={markdownEditorSS} objectFit='contain' />
                            </div>
                            <footer>
                                <div>
                                    <a target='_blank' href='https://enchanting-kataifi-62b291.netlify.app/'>Visit the live site</a>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M4.5 17q-.625 0-1.062-.438Q3 16.125 3 15.5v-11q0-.625.438-1.062Q3.875 3 4.5 3H10v1.5H4.5v11h11V10H17v5.5q0 .625-.438 1.062Q16.125 17 15.5 17Zm3.562-4L7 11.938 14.438 4.5H12V3h5v5h-1.5V5.562Z"/></svg>
                                </div>
                                <div>
                                    <a target='_blank' href='https://github.com/xylvnking/markdown-editor'>View the source code on GitHub</a>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M4.5 17q-.625 0-1.062-.438Q3 16.125 3 15.5v-11q0-.625.438-1.062Q3.875 3 4.5 3H10v1.5H4.5v11h11V10H17v5.5q0 .625-.438 1.062Q16.125 17 15.5 17Zm3.562-4L7 11.938 14.438 4.5H12V3h5v5h-1.5V5.562Z"/></svg>
                                </div>
                            </footer>
                        </article>


                        <article className={styles.secondaryProject}>
                            <header className={styles.secondaryProjectTitles}>
                                <h1>3D Material Creator & Editor</h1>
                                <h2>Custom editor created for Three.js to create and edit physically based materials</h2>
                            </header>
                            <div className={styles.secondaryProjectTechLogos}>
                                <div className={styles.nextImageWrapperTechLogo}>
                                    <Image src={reactLogo} objectFit='contain' />
                                </div>
                                <div className={styles.nextImageWrapperTechLogo}>
                                    <Image src={threeLogo} objectFit='contain' />
                                </div>
                                <div className={styles.nextImageWrapperTechLogo}>
                                    <Image src={substanceLogo} objectFit='contain' />
                                </div>
                                <div className={styles.nextImageWrapperTechLogo}>
                                    <Image src={blenderLogo} objectFit='contain' />
                                </div>
                            </div>
                            <div className={styles.secondaryProjectDescription}>
                                <p>Umami narwhal franzen, affogato selvage green juice tumeric direct trade semiotics aesthetic live-edge. Slow-carb raclette seitan single-origin coffee, tilde messenger bag dreamcatcher affogato hella photo booth.</p>
                            </div>
                            <div className={styles.screenshotImageWrapper}>
                                <Image src={threeDeeEditorSS} objectFit='contain' />
                            </div>
                            <footer>
                                <div>
                                    <a target='_blank' href='https://voluble-sorbet-78b709.netlify.app/'>Visit the live site</a>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M4.5 17q-.625 0-1.062-.438Q3 16.125 3 15.5v-11q0-.625.438-1.062Q3.875 3 4.5 3H10v1.5H4.5v11h11V10H17v5.5q0 .625-.438 1.062Q16.125 17 15.5 17Zm3.562-4L7 11.938 14.438 4.5H12V3h5v5h-1.5V5.562Z"/></svg>
                                </div>
                                <div>
                                    <a target='_blank' href='https://github.com/xylvnking/3D-Asset-Editor'>View the source code on GitHub</a>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M4.5 17q-.625 0-1.062-.438Q3 16.125 3 15.5v-11q0-.625.438-1.062Q3.875 3 4.5 3H10v1.5H4.5v11h11V10H17v5.5q0 .625-.438 1.062Q16.125 17 15.5 17Zm3.562-4L7 11.938 14.438 4.5H12V3h5v5h-1.5V5.562Z"/></svg>
                                </div>
                            </footer>
                        </article>


                        




                    </div>





                    <div className={styles.secondaryProjectsGridColumn}>

                    <article className={styles.secondaryProject}>
                            <header className={styles.secondaryProjectTitles}>
                                <h1>Hand Detection & 3D Object Manipulation using TF Machine Learning Models</h1>
                                <h2>Interactive documentation demonstrating how to use all the built-in React Hooks with Typescript</h2>
                            </header>
                            <div className={styles.secondaryProjectTechLogos}>
                                <div className={styles.nextImageWrapperTechLogo}>
                                    <Image src={reactLogo} objectFit='contain' />
                                </div>
                                <div className={styles.nextImageWrapperTechLogo}>
                                    <Image src={threeLogo} objectFit='contain' />
                                </div>
                                <div className={styles.nextImageWrapperTechLogo}>
                                    <Image src={tensorflowLogo} objectFit='contain' />
                                </div>
                                <div className={styles.nextImageWrapperTechLogo}>
                                    <Image src={sassLogo} objectFit='contain' />
                                </div>
                                <div className={styles.nextImageWrapperTechLogo}>
                                    <Image src={nextLogo} objectFit='contain' />
                                </div>
                            </div>
                            <div className={styles.secondaryProjectDescription}>
                                <p>Jean shorts cronut plaid wayfarers. Fit Brooklyn pok pok meggings, chartreuse DSA paleo distillery taiyaki ethical vegan drinking vinegar. Cray wolf freegan venmo 3 wolf moon fixie.</p>
                            </div>
                            <div className={styles.screenshotImageWrapper}>
                                <Image src={handdetectionSS} objectFit='contain' />
                            </div>
                            <footer>
                                <div>
                                    <a target='_blank' href='https://xk-tensorflow-threejs-hand-detection.vercel.app/'>Visit the live site</a>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M4.5 17q-.625 0-1.062-.438Q3 16.125 3 15.5v-11q0-.625.438-1.062Q3.875 3 4.5 3H10v1.5H4.5v11h11V10H17v5.5q0 .625-.438 1.062Q16.125 17 15.5 17Zm3.562-4L7 11.938 14.438 4.5H12V3h5v5h-1.5V5.562Z"/></svg>
                                </div>
                                <div>
                                    <a target='_blank' href='https://github.com/xylvnking/xk-tensorflow-threejs-hand-detection'>View the source code on GitHub</a>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M4.5 17q-.625 0-1.062-.438Q3 16.125 3 15.5v-11q0-.625.438-1.062Q3.875 3 4.5 3H10v1.5H4.5v11h11V10H17v5.5q0 .625-.438 1.062Q16.125 17 15.5 17Zm3.562-4L7 11.938 14.438 4.5H12V3h5v5h-1.5V5.562Z"/></svg>
                                </div>
                            </footer>
                            {/* https://xk-tensorflow-threejs-hand-detection.vercel.app/ */}
                        </article>

                        


                        <article className={styles.secondaryProject}>
                            <header className={styles.secondaryProjectTitles}>
                                <h1>Audio-Only Game Engine</h1>
                                <h2>Proof of concept for a larger future passion project</h2>
                            </header>
                            <div className={styles.secondaryProjectTechLogos}>
                                <div className={styles.nextImageWrapperTechLogo}>
                                    <Image src={reactLogo} objectFit='contain' />
                                </div>
                                <div className={styles.nextImageWrapperTechLogo}>
                                    <Image src={typescriptLogo} objectFit='contain' />
                                </div>
                                <div className={styles.nextImageWrapperTechLogo}>
                                    <Image src={howlerLogo} objectFit='contain' />
                                </div>
                                <div className={styles.nextImageWrapperTechLogo}>
                                    <Image src={nextLogo} objectFit='contain' />
                                </div>
                            </div>
                            <div className={styles.secondaryProjectDescription}>
                                <p>Shoreditch pug truffaut wolf tilde kickstarter. Echo park raclette farm-to-table hella cliche. Vinyl master cleanse tacos authentic deep v try-hard. Hoodie DIY migas hella freegan offal paleo unicorn.</p>

                            </div>
                            <div className={styles.screenshotImageWrapper}>
                                <Image src={cultOfThreeSS} objectFit='contain' />
                            </div>
                            <footer>
                                <div>
                                    <a target='_blank' href='https://cult-of-three.vercel.app/'>Visit the live site</a>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M4.5 17q-.625 0-1.062-.438Q3 16.125 3 15.5v-11q0-.625.438-1.062Q3.875 3 4.5 3H10v1.5H4.5v11h11V10H17v5.5q0 .625-.438 1.062Q16.125 17 15.5 17Zm3.562-4L7 11.938 14.438 4.5H12V3h5v5h-1.5V5.562Z"/></svg>
                                </div>
                                <div>
                                    <a target='_blank' href='https://github.com/xylvnking/cult-of-three'>View the source code on GitHub</a>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M4.5 17q-.625 0-1.062-.438Q3 16.125 3 15.5v-11q0-.625.438-1.062Q3.875 3 4.5 3H10v1.5H4.5v11h11V10H17v5.5q0 .625-.438 1.062Q16.125 17 15.5 17Zm3.562-4L7 11.938 14.438 4.5H12V3h5v5h-1.5V5.562Z"/></svg>
                                </div>
                            </footer>
                        </article>


                        


                    </div>




                    {/* <div id={styles['shapeGif']}> */}
                    

                </section>
                    {/* <div className={styles.decoGif} style={{backgroundColor: '#F9F9F9'}}> */}
                    <div className={styles.decoGif} style={{backgroundColor: '#000000'}}>
                        {/* <Image src={'https://media0.giphy.com/media/IwSG1QKOwDjQk/giphy.gif?cid=ecf05e47abb600e25495e0e25cfe3bb0fd1b331624bd9c24&rid=giphy.gif&ct=g'} objectFit='contain' layout='fixed' height={300} width={300} /> */}
                        <Image src={'https://media1.giphy.com/media/uGz9OvQL8eSSu47pCi/giphy.gif?cid=ecf05e47922ba08e65e3964885ab185da0b440528182a9ba&rid=giphy.gif&ct=g'} objectFit='contain' layout='fixed' height={300} width={300} />
                    </div>
            </div>

            <div id={styles["tertiaryProjectsContainer"]}>
                <section id={styles["tertiaryProjects"]}>
                    <ul>
                        <li>
                                <a target='_blank' href='https://github.com/xylvnking/xk-portfolio'>Portfolio v2 (this website)</a>
                                <h2>Lo-fi austin poke irony copper mug gatekeep offal ugh, waistcoat narwhal prism.Drinking vinegar farm-to-table synth four loko tacos hexagon irony man braid bushwick venmo copper mug vinyl pickled mlkshk literally.</h2>
                        </li>
                        <li>
                            
                                <a target='_blank' href='https://github.com/xylvnking/xk-portfolio'>Portfolio v1</a>
                                <h2>Drinking vinegar farm-to-table synth four loko tacos hexagon irony man braid bushwick venmo copper mug vinyl pickled mlkshk literally.</h2>
                        </li>
                        <li>
                                <a target='_blank' href='https://github.com/xylvnking/xk-tensorflow-face-detection'>Tensorflow face detection</a>
                                <h2>Drinking vinegar farm-to-table synth four loko tacos hexagon irony man braid bushwick venmo copper mug vinyl pickled mlkshk literally. Drinking vinegar farm-to-table synth four loko tacos hexagon irony man braid bushwick venmo copper mug vinyl pickled mlkshk literally.</h2>
                        </li>
                        <li>
                                <a target='_blank' href='https://github.com/xylvnking/dashboardV1'>Audio collaboration platform v2</a>
                                <h2>The second iteration of my main project. I learned a lot from the other times and structured my data in a much more sensible way. Ultimately it was still wrong, so I restarted it. The problem was that I was storing too much data in a single firestore document, meaning that updating any single field (especially nested arrays) required a lot of boilerplate-ish code to accomplish. I planned out the routing and pages/component structure better in this one, but again I improved on it a lot for the current iteration. The UI is also very bad, but I didn't bother with it much since it's what I do last and I realized I needed to restart from scratch anyways.</h2>
                        </li>
                        <li>
                                <a target='_blank' href='https://github.com/xylvnking/xktransfer'>Audio collaboration platform v1</a>
                                <h2>The first iteration of my main project. I didn't really know how to do this going into it, so this was really more of a learning experience than a deliberate attempt to make something worth showcasing. The biggest problem (which I didn't solve until v3) was that I was storing songs as user data, instead of as their own independent documents which then have permissions set to allow users to access them. The data structure was not good either, which was partially addressed in v2 but fixed entirely in v3. The UI was alright, but nowhere near v3.</h2>
                        </li>
                        <li>
                                <a target='_blank' href='https://github.com/xylvnking/FCC-File-Metadata-Microservice'>File metadata microservice</a>
                                <h2>From FreeCodeCamp's <em>Back End Development and APIs</em> certification course. Uses Express to receive a file and return metadata as JSON.</h2>
                        </li>
                        <li>
                                <a target='_blank' href='https://github.com/xylvnking/FCC-Exercise-Tracker'>Exercise tracker</a>
                                <h2>From FreeCodeCamp's <em>Back End Development and APIs</em> certification course. Uses Express to create users then receive and store information about exercises they log.</h2>
                        </li>
                        <li>
                                <a target='_blank' href='https://github.com/xylvnking/FCC-URL-Shortener-Microservice'>URL shortener microservice</a>
                                <h2>From FreeCodeCamp's <em>Back End Development and APIs</em> certification course. Uses Express to receive a URL, store it, and return a shortened version which can then be posted to server to receive back the full URL.</h2>
                        </li>
                        <li>
                                <a target='_blank' href='https://github.com/xylvnking/FCC-Request-Header-Parser-Microservice'>Request header parser microservice</a>
                                <h2>From FreeCodeCamp's <em>Back End Development and APIs</em> certification course. Uses Express to receive a request, parse the header for data, and return JSON.</h2>
                        </li>
                        <li>
                                <a target='_blank' href='https://github.com/xylvnking/FCC-Timestamp-Microservice'>Timestamp microservice</a>
                                <h2>From FreeCodeCamp's <em>Back End Development and APIs</em> certification course. Uses Express to receive a request and return a timestamp as JSON.</h2>
                        </li>
                        <li>
                                <a target='_blank' href='https://github.com/xylvnking/CyberPokeAPI'><em>CyberPokeAPI</em> rest API</a>
                                <h2>Unfinished. I was having a lot of fun with Midjourney and wanted to get cyberpunk versions of the original 151 pokemon and make an API similar to the popular pokemon api lots of new devs use for projects. I shelved the project because creating that much artwork with midjourney would have taken at least two weeks and there were better projects for me to build to showcase my skills. I'd love to make it in the future though.</h2>
                        </li>
                        <li>
                                <a target='_blank' href='https://github.com/xylvnking/Firebase-Blog'>Firebase blog</a>
                                {/* <p>Firebase blog</p> */}
                                <h2>This was a learning experience. It was my first time using firebase and it worked! But I had no use for the project and wanted to create something more unique for my portfolio projects so I shelved it.</h2>
                        </li>
                    </ul>
                </section>
            </div>
        </>
    )
}
