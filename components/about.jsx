import React from 'react'
import about from '../app/about.module.css'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <section className={about.mainAboutSection} id='about'>

   <div className={about.leftAbout} >
    <div className={about.smallImagebox}>
    <Image width={1000} height={1000} src={"/images/Image-1.webp"} className={about.aboutoneImagesone}/>
    </div>
    <div className={about.aboutsmallBox}>
        <p className={about.aboutleftPasag}>We Deploy World-Class Creative Design Team On Demand. That Can Design, Build, Ship And Scale Your Vision In The Most Efficient Way. We Believe That The Surest Measure Of Success Is When A Client Partners With Us More Than Once. Over Half Our Clients Stay With Us For Longer Than A Single Project.</p>
    </div>
    <Image width={1000} height={1000} src={"/images/about-4.jpg"} className={about.aboutoneImagestwo}/>
   </div>

   <div className={about.rightAbout}>
   <Image width={1000} height={1000} src={"/images/hero-4-1.png"} className={about.aboutoneImagesthree}/>

    <h1 className={about.AboutH1}>Our Introduction</h1>

    <p className={about.rightAboutPasag}>BIKALP is a company specializing in the IT sector. We are hard working, creative and passionate in the field of website design, development and software development. We also include services like logo design and website redesign. We will help you grow your business digitally.</p>

    <p className={about.rightAboutPasag}>BIKALP is well-established and trusted IT company for high quality services with modern and custom design for reasonable cost and with high efficiency. We try our best to make our clients happy and satisfy with our creations.</p>

     <Link href={"/about"}className={about.aboutloadBtn}> <button className={about.loadbtn}>View More</button> </Link> 
   </div>

    </section>
  )
}

export default About