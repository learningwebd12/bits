import React from 'react'
import digital from '../digital.module.css'
import Image from 'next/image'

const Digital = () => {
  return (
    <section className={digital.maindigitalSection}>

<div className={digital.firstDigital}>
    <div className={digital.rightDigital}>
        <h1 className={digital.digitalh1}>Digital Marketing</h1>
        <p className={digital.digitalpasag} >Struggling to find PPC experts who really understand your business our world-class marketers would love to help.</p>
    </div>
    <div className={digital.leftDigital}>
        <Image width={1000} height ={1000} className={digital.digitalMarketingImages} src={"/images/vecteezy_isometric-illustration-concept-digital-marketing-strategy_5638545-removebg.png"}/>
    </div>
</div>

<div className={digital.allDigitalServices}>
    <div className={digital.firstServices}>
        <h4 className={digital.digitalh4}>Search Engine Optimization (SEO):</h4>
        <article className={digital.digitalPasag} >SEO involves optimizing a website to improve its visibility in search engine results pages (SERPs). This includes keyword research, on-page optimization, technical optimization, and link building to increase organic (non-paid) traffic.</article>
    </div>

   
   
</div>

    </section>
  )
}

export default Digital