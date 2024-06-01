import React from 'react'
import hero from '../app/hero.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


const HeroSection = () => {
  return (
    <section className={hero.mainHeroSection}>
        <div className={hero.threeHeroBox}>
            <h1 className={hero.mainHeroText}>WE DESIGN <span className={hero.firstSpan}>CREATIVE</span> IDEAS</h1>
            <p className={hero.heroPasag}>We felt strongly that design was more than pretty pictures, it was a powerful tool that could really transform business.</p>
            <button className={hero.heroBtn}>Learn More</button>
            </div> 
        <div className={hero.threeHeroBox}>
        <Image width={1000} height={1000} src={"/images/features.webp"} className={hero.mainHeroImages}/>
            </div> 
        <div className={hero.threeHeroBox}>
            <div className={hero.heroSmalltext}>
                <p className={hero.textPasag}>
                Strategy, Design, Solution  <br /> Development
                </p>
                <FontAwesomeIcon icon={faArrowUp} className={hero.arrow}/>
            </div>
            <div className={hero.thirdPasag}>
                <p className={hero.innterPasag}>We are a full-service digital agency that builds fascinating user experience. Our team creates an exceptional UI design and functionality. </p>
            </div>
            <div className={hero.customerSection}>
            <p className={hero.customerText}>50 <br />
We Have a Happy Customer</p>
        <Image width={1000} height={1000} src={"/images/image.png"} className={hero.customerImages}/>
            </div>
            </div> 
            

    </section>
  )
}

export default HeroSection