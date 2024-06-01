import React from 'react'
import innerserv from '../innerserv.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'

const InnerServices = () => {
  return (
   <section className={innerserv.mainInnerServices}>
    <div className={innerserv.firstServices}>
        <div className={innerserv.mainTextservices}>
            <h1 className={innerserv.mainH1} >WE MAKE THE SERVICE BETTER.</h1>
        </div>
        <div className={innerserv.servicesImages}>
            <p className={innerserv.innerPasagText} >We’re designing digital experiences that enrich human lives and it helps to grow your business globally trends.</p>
            <Image height={10000} width={10000} src={"/images/pexels-golnar-sabzpoush-rashidi-2772913.jpg"} className={innerserv.innermainImages} />
        </div>
    </div>

    <div className={innerserv.AllservicesBox}>

    <div className={innerserv.ServicesBox}>
        <div className={innerserv.oneServices}>
        <h1 className={innerserv.servh1}>
        Branding <br /> Design
        </h1>
        <p className={innerserv.servicesPasag}>We help brands stand out through aweful elegant visual design</p>
        <div className={innerserv.twoBtnArrow}>
    <Link href={"#"}> <button className={innerserv.servicesBtn}>Read More</button> </Link> 
    <FontAwesomeIcon icon={faArrowUp} className={innerserv.servicesArrow}/>
    </div>
        </div>

        <div className={innerserv.oneServices}>
        <h1 className={innerserv.servh1}>
        Digital
        <br />  Marketing
        </h1>
        <p className={innerserv.servicesPasag}>We help brands stand out through aweful elegant visual design</p>
        <div className={innerserv.twoBtnArrow}>
    <Link href={"/digitalmarketing"}> <button className={innerserv.servicesBtn}>Read More</button> </Link> 
    <FontAwesomeIcon icon={faArrowUp} className={innerserv.servicesArrow}/>
    </div>
        </div>

    </div>

    <div className={innerserv.ServicesBox}>
        <div className={innerserv.oneServices}>
        <h1 className={innerserv.servh1middle}>
        UI
        <br />   Design
        </h1>
        <p className={innerserv.servicesPasagmiddle}>We help brands stand out through aweful elegant visual design</p>
        <div className={innerserv.twoBtnArrow}>
    <Link href={"#"}> <button className={innerserv.servicesBtncolor}>Read More</button> </Link> 
    <FontAwesomeIcon icon={faArrowUp} className={innerserv.servicesArrow}/>
    </div>
        </div>

        <div className={innerserv.oneServices}>
        <h1 className={innerserv.servh1middle}>
        Branding
         <br />  Design
        </h1>
        <p className={innerserv.servicesPasagmiddle}>We help brands stand out through aweful elegant visual design</p>
        <div className={innerserv.twoBtnArrow}>
    <Link href={"#"}> <button className={innerserv.servicesBtncolor}>Read More</button> </Link> 
    <FontAwesomeIcon icon={faArrowUp} className={innerserv.servicesArrow}/>
    </div>
        </div>

    </div>

    <div className={innerserv.ServicesBox}>
        <div className={innerserv.oneServices}>
        <h1 className={innerserv.servh1}>
        Branding
        <br />   Design
        </h1>
        <p className={innerserv.servicesPasag}>We help brands stand out through aweful elegant visual design</p>
        <div className={innerserv.twoBtnArrow}>
    <Link href={"#"}> <button className={innerserv.servicesBtn}>Read More</button> </Link> 
    <FontAwesomeIcon icon={faArrowUp} className={innerserv.servicesArrow}/>
    </div>
        </div>

        <div className={innerserv.oneServices}>
        <h1 className={innerserv.servh1}>
        Branding
        <br />   Design
        </h1>
        <p className={innerserv.servicesPasag}>We help brands stand out through aweful elegant visual design</p>
        <div className={innerserv.twoBtnArrow}>
    <Link href={"#"}> <button className={innerserv.servicesBtn}>Read More</button> </Link> 
    <FontAwesomeIcon icon={faArrowUp} className={innerserv.servicesArrow}/>
    </div>
        </div>

    </div>

    </div>
   </section>
  )
}

export default InnerServices