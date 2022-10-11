import React from 'react'
import styles from './Audio.module.scss'

import Image from 'next/image'

import dummyProfilePhoto from '../../public/static/dummyprofile.jpeg'
// import dummyProfilePhoto from '../../public/static/dummyprofile.jpeg'

// import skipWaitersPhoto from '../../public/static/testimonials/SkipWaitersPressPhoto.jpg'
import skipWaitersPhoto from '../../public/static/testimonials/SkipWaitersPressPhotosmall.jpg'
import millyPhoto from '../../public/static/testimonials/millyphoto.jpg'
import riahPhoto from '../../public/static/testimonials/riahphoto.jpg'

import boyscout from '../../public/static/testimonials/boyscoutpress.jpg'
import connory from '../../public/static/testimonials/copress.jpg'
import cole from '../../public/static/testimonials/colepress.jpg'
import paul from '../../public/static/testimonials/paulpress.jpg'
import borgers from '../../public/static/testimonials/borgerspress.jpg'
import rari from '../../public/static/testimonials/raripress.jpg'
import max from '../../public/static/testimonials/maxpress.png'
import tevnn from '../../public/static/testimonials/tevnnpress.jpg'
import mappe from '../../public/static/testimonials/mappepress.jpg'

import whitegold from '../../public/static/backgrounds/blackwhitegold.png'

export default function Testimonials() {
  return (
      <>
      <div id={styles["backgroundTest"]}>
            {/* // mobile only */}
            <Image src={whitegold} objectFit='contain'  />
        </div>
        <div id={styles["testimonialsContainer"]}>
            <div id={styles["testimonialsGridColumns"]}>
                <div className={styles.testimonialsColumn}>
                        <div className={`${styles.testimonial} ${styles.testimonialBackgroundUtility}`} id={styles['riah']}>
                            <div className={styles.testimonialPhotoWrapper}>
                                <Image src={riahPhoto} objectFit='contain' />
                            </div>
                            <p>"I've been working with Dylan for over 6 years now and he has always delivered exceptional, industry level mixes and masters. He has an innate sense of what the song needs to bring it to the next level and brings a creative aspect to his mixes that really elevate the record and bring new dimension to the music."</p>
                            <h2>- Riah</h2>
                            <h3>Recording engineer at <a target='_blank' href='https://www.noblestreetstudios.com/'>Noble Street Studios</a> in Toronto</h3>
                        </div>
                    
                        <div className={`${styles.testimonial} ${styles.testimonialBackgroundUtility}`} id={styles['boyscout']}>
                        <div className={styles.testimonialPhotoWrapper}>
                            <Image src={boyscout} objectFit='contain' />
                        </div>
                        <p>"Literally the best experience I've had since working with Dylan. He goes to lengths he really doesn't have to, is very responsive, and honestly deals with all the hassle you send him without a single complaint. Most def recommend if you're looking for someone who cares, has a good ear, and is responsible."</p>
                        <h2>- Boyscoutsam</h2>
                        <h3>Artist co-signed by all major streaming platforms</h3>
                    </div>

                    <div className={`${styles.testimonial} ${styles.testimonialBackgroundUtility}`} id={styles['connory']}>
                        <div className={styles.testimonialPhotoWrapper}>
                            <Image src={connory} objectFit='contain' />
                        </div>
                        <p>"Very few individuals in the Canadian music community so generously balance an ear for the technical and a passion for the explorative. Hearing his work as a mastering and mix engineer on a variety of multi-genre productions over the years, has only solidified my high regard in his ability to simply elevate a mix when needed- or confidently inject it with some of his own production when called upon. Ambient, trap, folk, indie- he comes to every project with a fresh perspective seeking to serve the art.</p>
                        <p>Having worked with Dylan both as a fellow band member and as an engineer- I can without a doubt recommend his ear and creative intuition to anyone- across genre- looking for someone to mix or master their work."</p>
                        <h2>- C. Ballantyne</h2>
                        <h3>Creative Director</h3>
                    </div>

                    <div className={`${styles.testimonial} ${styles.testimonialBackgroundUtility}`} id={styles['rari']}>
                        <div className={styles.testimonialPhotoWrapper}>
                            <Image src={rari} objectFit='contain' />
                        </div>
                        <p>"One of the most professional and kindest engineers I had the pleasure of working with. Dylan genuinely takes his time to understand what I want as an artist. He was one the first engineers I ever got the chance to give my songs to, so naturally I didn't know what to expect at first. Despite my inexperience, he made me feel comfortable and heard throughout the whole process and it was great hearing the finished product on songs I worked really hard on. He has great knowledge on music direction in general, quick and efficient turnaround times, a great price and an awesome ear for effects. My favourite engineer!"</p>
                        <h2>- Rariakari</h2>
                        <h3>Recording artist, Ottawa</h3>
                    </div>


                   

                </div>





                <div className={styles.testimonialsColumn}>

                    <div className={`${styles.testimonial} ${styles.testimonialBackgroundUtility}`} id={styles['skipWaiters']}>
                    {/* <div className={styles.testimonial} id={styles['skipWaiters']}> */}
                        <div className={styles.testimonialPhotoWrapper}>
                            <Image src={skipWaitersPhoto} objectFit='contain' />
                        </div>
                        <p>"Being a brand new artist here in Canada we all understand the struggle of finding someone who believes in your music enough to work with you on all aspects of it. Dylan was one of the first engineers I've worked with and since we've met he's been willing to learn and grow together to help me create my sound but also help elevate my initial production and mixing ideas. I'm excited to continue to grow with him and I'm also excited to see what else he works on and accomplishes as an engineer/producer."</p>
                        <h2>- Skip Waiters</h2>
                        <h3>Artist co-signed by all major streaming platforms - multi grant recipient</h3>
                    </div>

                    <div className={`${styles.testimonial} ${styles.testimonialBackgroundUtility}`} id={styles['cole']}>
                        <div className={styles.testimonialPhotoWrapper}>
                            <Image src={cole} objectFit='contain' />
                        </div>
                        <p>"I have worked with Dylan on a number of projects in a number of different ways for over 6 years now, and I will continue involving him in every project I work on going forward. His talents as a mix and mastering engineer are unmatched. His ear for production is entirely unique, and his attitude and work ethic are truly inspiring to everyone around him. Dylan always finds a way to take a piece of music and bring it to the next level to help you realize the true potential of your art."</p>
                        <h2>- Cole Sefton</h2>
                        <h3>Award winning artist featured on MTV, Much, Shazam, etc.</h3>
                    </div>

                    <div className={`${styles.testimonial} ${styles.testimonialBackgroundUtility}`} id={styles['borgers']}>
                        <div className={styles.testimonialPhotoWrapper}>
                            <Image src={borgers} objectFit='contain' />
                        </div>
                        <p>"Dylan is my go to mastering engineer! He's reliable, accommodating, and really good at what he does. I can always count on him to send me back a great master. I've try many others but my mixes came back sounding worse. Dylan nails it every time! And he keeps on getting better. I highly recommend Dylan to anyone looking for a mastering engineer."</p>
                        <h2>- Dan Borgers</h2>
                        <h3>Producer and engineer, Toronto</h3>
                    </div>

                    <div className={`${styles.testimonial} ${styles.testimonialBackgroundUtility}`} id={styles['max']}>
                        <div className={styles.testimonialPhotoWrapper}>
                            <Image src={max} objectFit='contain' />
                        </div>
                        <p>"Dylan has been an invaluable part of my success as an artist for approximately a decade. As someone who thrives creatively but has struggled with technical aspects of production like mixing/mastering, working with Dylan has been a true blessing. He is the only person I trust to mix my music because of his technical expertise and the perspective he brings as an artist himself. What has impressed me the most about Dylan’s work is his ability to understand my concepts and end goals without even expressing them to him. From the moment I send him a new track, he just gets what I am going for and helps me execute it cleanly every time."</p>
                        <h2>- Max Zims</h2>
                        <h3>DJ and Producer, Ottawa</h3>
                    </div>


                    
                </div>




                <div className={styles.testimonialsColumn}>

                    <div className={`${styles.testimonial} ${styles.testimonialBackgroundUtility}`} id={styles['milly']}>
                    {/* <div className={styles.testimonial} id={styles['skipWaiters']}> */}
                        <div className={styles.testimonialPhotoWrapper}>
                            <Image src={millyPhoto} objectFit='contain' />
                        </div>
                        <p>"Dylan is an exceptional engineer. His attention to detail and ability to make the right call is profound. I have worked with him in many different configurations, and each has been a wonderful experience. He was also a great teacher and encouraged me to learn to produce myself.
                            <br />
                            <br />
                            He takes time efficiency very seriously and will always find a way to ensure your projects move forward at the appropriate speed. As he has taught me over the years, 'mixing is just another level of producing' and that understanding them both can bring your sound to a new level. 
                            <br />
                            <br />
                            He's a kind human who knows how to make people feel comfortable and cared for no matter your gender, ethnicity or age. To him, making good music is why we're all here and making it together in a friendly yet professional environment makes the experience that much better."
                        </p>
                        <h2>- Milly</h2>
                        <h3>Award winning artist featured on MTV, Much, Shazam, etc.</h3>
                    </div>


                    <div className={`${styles.testimonial} ${styles.testimonialBackgroundUtility}`} id={styles['paul']}>
                        <div className={styles.testimonialPhotoWrapper}>
                            <Image src={paul} objectFit='contain' />
                        </div>
                        <p>"Been working with Dylan for almost three years now and that really says it all. He's generous with his rates and his mixes always come out crispy. I'm very particular with my music and will often change things until the last minute, so I really appreciate that he doesn't mind doing as many revisions as I need, because other engineers might not have the patience. Work with Dylan and you won't be disappointed"</p>
                        <h2>- Paul Blue</h2>
                        <h3>Multi-intrumentalist and rapper, Toronto</h3>
                    </div>

                    <div className={`${styles.testimonial} ${styles.testimonialBackgroundUtility}`} id={styles['mappe']}>
                        <div className={styles.testimonialPhotoWrapper}>
                            <Image src={mappe} objectFit='contain' />
                        </div>
                        <p>"Dylan has mastered every one of my releases as Mappe Of, and for good reason. He is professional, communicative and quick with the turnaround! He has helped me hit tight deadlines with low stress.</p>
                        <p>He's a creative mind that I trust and brings a fresh perspective to the project. Above all else, his contribution always pushes the work ahead beyond expectation. Never too much, never too little, always just right."</p>
                        <h2>- Mappe Of</h2>
                        <h3>Multi-instrumentalist, songwriter, sound designer, Ontario</h3>
                    </div>


                    <div className={`${styles.testimonial} ${styles.testimonialBackgroundUtility}`} id={styles['tevnn']}>
                        <div className={styles.testimonialPhotoWrapper}>
                            <Image src={tevnn} objectFit='contain' />
                        </div>
                        <p>"Send your music to this dude. His work can hang with any major studio mix. Super laid back, gives great input, and at a super fair rate! Send. Dylan. Music."</p>
                        <h2>- Tevnn</h2>
                        <h3>Rapper/producer, BC</h3>
                    </div>
                    
                </div>

            </div>
            
        </div>
      </>
      
  )
}
