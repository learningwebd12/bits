import React from 'react'
import Image from 'next/image'
import insideabout from '../innerabout.module.css'

const Aboutus = () => {
  return (
    <section className={insideabout.mainInsideSection}>

      <div className={insideabout.firstAbout}>
        <div className={insideabout.twoText}>
          <h1 className={insideabout.projectText} >500</h1>
          <p className={insideabout.projctPasag} >Project completed</p>
        </div>

        <div className={insideabout.twoText}>
          <h1 className={insideabout.projectText} >50</h1>
          <p className={insideabout.projctPasag} >Happy 
customers</p>
        </div>

        <div className={insideabout.twoText}>
          <h1 className={insideabout.projectText} >5</h1>
          <p className={insideabout.projctPasag} >Years 
Experiences</p>
        </div>

        <div className={insideabout.twoText}>
          <h1 className={insideabout.projectText} >30</h1>
          <p className={insideabout.projctPasag} >Web 
Design</p>
        </div>
      </div>

      <div className={insideabout.TopAbout}>
        <div className={insideabout.topleft}>
          <h1 className={insideabout.topText}>Our story</h1>
          <p className={insideabout.topPasag}>
          Your brand is the most important asset in your company let our team of professionals help you
with a good strategy took the runway next with an edgy collection featuring dyed denim pieces.
The collection included patchwork denim, a trend that has recently exploded in younger
generations. Playing on aspects of sustainability, the pieces appeared to be upcycled to
establish dimension and flair. This take on grunge and streetwear took sustainable fashion to an
entirely new level.
ur specialized team of researchers, strategists, designers, developers, and project managers
work with streamlined processes to break through organizational roadblocks. We translate
research into solutions, crafting thoughtful and unified brands.
          </p>
        </div>
        <div className={insideabout.topImages}>
       <Image height={1000} width={1000} src={"/images/a3.webp"} className={insideabout.aboutMainimages} />
       
        </div>
      </div>

      <div className={insideabout.middleAbout}>
  <div className={insideabout.sideImages}>
  <Image height={1000} width={1000} src={"/images/a1-1.webp"} className={insideabout.secondAboutImages} />
  <h1 className={insideabout.aboutText} >About Us</h1>
  </div>
  <div className={insideabout.rightPasag}>
    <p className={insideabout.middlePasag}>
    Bikalp is well-established and trusted IT company for high quality services with modern and custom design for reasonable cost and with high efficiency. We try our best to make our clients happy and satisfy with our creations.
    </p>
    <p className={insideabout.middlePasag}>
    We provide creative, secure and bug-free websites for you at reasonable cost. Our company has reliable experts, such IT Engineers, Developers, Designers, and more. We work hard for best quality designs. We are your best partner and will help with brilliant, passionate and hard-working team members. We provide with first class service and deliver quality outputs. We work to the highest of standards in providing the best quality.
    </p>
    <p className={insideabout.middlePasag}>
    In terms of Technology, we use the latest tools & technology, dynamic and responsive web design. We use React JS library in Front-End to make your web fast and more interactive and in the backend we use javascript frame work such as NodeJS, ExpressJS to make your API’s to load fast. We also use MongoDB ( A NoSQL database ) for storing your data and also to make your site perform faster.
    </p>

    <p className={insideabout.middlePasag}>
    Our Mission is to design and customize your business platform. We promise you to get the best possible return on your investment with our experienced and passionate team who can bring positive changes to the company’s working conditions. We assure you that we are here to promote your regular and continuous development even in a difficult situation.
    </p>
    
  </div>

      </div>

    </section>
  )
}

export default Aboutus