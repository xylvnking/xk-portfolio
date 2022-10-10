import React from 'react'
import styles from './Audio.module.scss'

import Image from 'next/image'

import dummyProfilePhoto from '../../public/static/dummyprofile.jpeg'
// import dummyProfilePhoto from '../../public/static/dummyprofile.jpeg'

// import skipWaitersPhoto from '../../public/static/testimonials/SkipWaitersPressPhoto.jpg'
import skipWaitersPhoto from '../../public/static/testimonials/SkipWaitersPressPhotosmall.jpg'
import millyPhoto from '../../public/static/testimonials/millyphoto.jpg'
import riahPhoto from '../../public/static/testimonials/riahphoto.jpg'


export default function Testimonials() {
  return (
    <div id={styles["testimonialsContainer"]}>
        <div id={styles["testimonialsGridColumns"]}>
            <div className={styles.testimonialsColumn}>
                <div className={`${styles.testimonial} ${styles.testimonialBackgroundUtility}`} id={styles['riah']}>
                    <div className={styles.testimonialPhotoWrapper}>
                        <Image src={riahPhoto} objectFit='contain' />
                    </div>
                    {/* <p>“I{`’`}ve been working with Dylan for over 6 years now and he has always delivered exceptional, industry level mixes and masters. He has an innate sense of what the song needs to bring it to the next level and brings a creative aspect to his mixes that really elevate the record and bring new dimension to the music.”</p> */}
                    <p>“I've been working with Dylan for over 6 years now and he has always delivered exceptional, industry level mixes and masters. He has an innate sense of what the song needs to bring it to the next level and brings a creative aspect to his mixes that really elevate the record and bring new dimension to the music.”</p>
                    <h2>- Zach Pepe</h2>
                    <h3>Recording engineer at <a>Noble Street Studios</a> in Toronto</h3>
                </div>
                
                <div className={styles.testimonial}>
                    <div className={styles.testimonialPhotoWrapper}>
                        <Image src={dummyProfilePhoto} objectFit='contain' />
                    </div>
                    <p>Everyday carry 90's YOLO sriracha pinterest. Raw denim mixtape cred prism waistcoat. Try-hard post-ironic shoreditch, kombucha direct trade ethical hell of gluten-free. Tilde hoodie authentic, DIY banh mi williamsburg gastropub distillery heirloom art party sustainable etsy. Small batch whatever raw denim listicle YOLO etsy. Tumeric crucifix direct trade heirloom street art ethical authentic. Locavore venmo fingerstache cornhole, artisan occupy mustache subway tile retro wolf. Four loko banh mi occupy praxis kogi. Vexillologist stumptown williamsburg ethical, occupy messenger bag vinyl everyday carry ennui. Austin knausgaard try-hard kinfolk four dollar toast man braid live-edge cliche yr. </p>
                    <h2>- Fake Name</h2>
                    <h3>Artist co-signed by all major streaming platforms - multi grant recipient</h3>
                </div>

                <div className={styles.testimonial}>
                    <div className={styles.testimonialPhotoWrapper}>
                        <Image src={dummyProfilePhoto} objectFit='contain' />
                    </div>
                    <p>Everyday carry 90's YOLO sriracha pinterest. Raw denim mixtape cred prism waistcoat. Try-hard post-ironic shoreditch, kombucha direct trade ethical hell of gluten-free. Tilde hoodie authentic, DIY banh mi williamsburg gastropub distillery heirloom art party sustainable etsy. Small batch whatever raw denim listicle YOLO etsy. Tumeric crucifix direct trade heirloom street art ethical authentic. Locavore venmo fingerstache cornhole, artisan occupy mustache subway tile retro wolf. Four loko banh mi occupy praxis kogi. Vexillologist stumptown williamsburg ethical, occupy messenger bag vinyl everyday carry ennui. Austin knausgaard try-hard kinfolk four dollar toast man braid live-edge cliche yr. </p>
                    <h2>- Fake Name</h2>
                    <h3>A short description describing the artist</h3>
                </div>

            </div>





            <div className={styles.testimonialsColumn}>

                <div className={`${styles.testimonial} ${styles.testimonialBackgroundUtility}`} id={styles['skipWaiters']}>
                {/* <div className={styles.testimonial} id={styles['skipWaiters']}> */}
                    <div className={styles.testimonialPhotoWrapper}>
                        <Image src={skipWaitersPhoto} objectFit='contain' />
                    </div>
                    <p>“Being a brand new artist here in Canada we all understand the struggle of finding someone who believes in your music enough to work with you on all aspects of it. Dylan was one of the first engineers I've worked with and since we've met he's been willing to learn and grow together to help me create my sound but also help elevate my initial production and mixing ideas. I'm excited to continue to grow with him and I'm also excited to see what else he works on and accomplishes as an engineer/producer.”</p>
                    <h2>- Skip Waiters</h2>
                    <h3>Artist co-signed by all major streaming platforms - multi grant recipient</h3>
                </div>

                <div className={styles.testimonial}>
                    <div className={styles.testimonialPhotoWrapper}>
                        <Image src={dummyProfilePhoto} objectFit='contain' />
                    </div>
                    <p>Everyday carry 90's YOLO sriracha pinterest. Raw denim mixtape cred prism waistcoat. Try-hard post-ironic shoreditch, kombucha direct trade ethical hell of gluten-free. Tilde hoodie authentic, DIY banh mi williamsburg gastropub distillery heirloom art party sustainable etsy. Small batch whatever raw denim listicle YOLO etsy. Tumeric crucifix direct trade heirloom street art ethical authentic. Locavore venmo fingerstache cornhole, artisan occupy mustache subway tile retro wolf. Four loko banh mi occupy praxis kogi. Vexillologist stumptown williamsburg ethical, occupy messenger bag vinyl everyday carry ennui. Austin knausgaard try-hard kinfolk four dollar toast man braid live-edge cliche yr. </p>
                    <h2>- Fake Name</h2>
                    <h3>A short description describing the artist</h3>
                </div>
                
            </div>




            <div className={styles.testimonialsColumn}>

                <div className={`${styles.testimonial} ${styles.testimonialBackgroundUtility}`} id={styles['milly']}>
                {/* <div className={styles.testimonial} id={styles['skipWaiters']}> */}
                    <div className={styles.testimonialPhotoWrapper}>
                        <Image src={millyPhoto} objectFit='contain' />
                    </div>
                    <p>“Dylan is an exceptional engineer. His attention to detail and ability to make the right call is profound. I have worked with him in many different configurations, and each has been a wonderful experience. He was also a great teacher and encouraged me to learn to produce myself.
                        <br />
                        <br />
                        He takes time efficiency very seriously and will always find a way to ensure your projects move forward at the appropriate speed. As he has taught me over the years, 'mixing is just another level of producing' and that understanding them both can bring your sound to a new level. 
                        <br />
                        <br />
                        He's a kind human who knows how to make people feel comfortable and cared for no matter your gender, ethnicity or age. To him, making good music is why we're all here and making it together in a friendly yet professional environment makes the experience that much better.”
                    </p>
                    <h2>- Milly</h2>
                    <h3>Award winning artist featured on MTV, Much, Shazam, etc.</h3>
                </div>

                <div className={styles.testimonial}>
                    <div className={styles.testimonialPhotoWrapper}>
                        <Image src={dummyProfilePhoto} objectFit='contain' />
                    </div>
                    <p>Everyday carry 90's YOLO sriracha pinterest. Raw denim mixtape cred prism waistcoat. Try-hard post-ironic shoreditch, kombucha direct trade ethical hell of gluten-free. Tilde hoodie authentic, DIY banh mi williamsburg gastropub distillery heirloom art party sustainable etsy. Small batch whatever raw denim listicle YOLO etsy. Tumeric crucifix direct trade heirloom street art ethical authentic. Locavore venmo fingerstache cornhole, artisan occupy mustache subway tile retro wolf. Four loko banh mi occupy praxis kogi. Vexillologist stumptown williamsburg ethical, occupy messenger bag vinyl everyday carry ennui. Austin knausgaard try-hard kinfolk four dollar toast man braid live-edge cliche yr. </p>
                    <h2>- Fake Name</h2>
                    <h3>A short description describing the artist</h3>
                </div>
                
            </div>

        </div>
        
    </div>
  )
}
