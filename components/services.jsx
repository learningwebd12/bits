import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import services from '../app/services.module.css'
import { faCube } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <section className={services.mainServicesSection} id='services'>
<div className={services.leftservicesText}>
    <h1 className={services.servicesText}>We Provide <span className={services.servicesSpan}>Different</span> Services </h1>
    <div className={services.twoBtnArrow}>
    <Link href={"/ourservices"}> <button className={services.allServicesBtn}>Explore All Services</button> </Link> 
    <FontAwesomeIcon icon={faArrowUp} className={services.servicesArrowBtn}/>
    </div>
</div>

<div className={services.rightServices}>

<div className={services.firstServices}>
    <div className={services.iconServices}>
    <FontAwesomeIcon icon={faCube} className={services.servicesIcon}/>
    </div>
    <div className={services.headingServices}>
        <div className={services.servText}>
            <h1 className={services.servicesTitle}>BRANDING</h1>
            <p className={services.servicesPasag}>We create, products, brands, apps & websites for the companies all around the world class digital products</p>
        </div>
        <FontAwesomeIcon icon={faArrowUp} className={services.servicesArrow}/>
    </div>
</div>

<div className={services.firstServices}>
    <div className={services.iconServices}>
    <FontAwesomeIcon icon={faCube} className={services.servicesIcon}/>
    </div>
    <div className={services.headingServices}>
        <div className={services.servText}>
            <h1 className={services.servicesTitle}>UI DESIGN</h1>
            <p className={services.servicesPasag}>We create, products, brands, apps & websites for the companies all around the world class digital products</p>
        </div>
        <FontAwesomeIcon icon={faArrowUp} className={services.servicesArrow}/>
    </div>
</div>

<div className={services.firstServices}>
    <div className={services.iconServices}>
    <FontAwesomeIcon icon={faCube} className={services.servicesIcon}/>
    </div>
    <div className={services.headingServices}>
        <div className={services.servText}>
            <h1 className={services.servicesTitle}>DIGITAL MARKETING</h1>
            <p className={services.servicesPasag}>We create, products, brands, apps & websites for the companies all around the world class digital products</p>
        </div>
        <FontAwesomeIcon icon={faArrowUp} className={services.servicesArrow}/>
    </div>
</div>

<div className={services.firstServices}>
    <div className={services.iconServices}>
    <FontAwesomeIcon icon={faCube} className={services.servicesIcon}/>
    </div>
    <div className={services.headingServices}>
        <div className={services.servText}>
            <h1 className={services.servicesTitle}>WEB DEVELOPMENT</h1>
            <p className={services.servicesPasag}>We create, products, brands, apps & websites for the companies all around the world class digital products</p>
        </div>
        <FontAwesomeIcon icon={faArrowUp} className={services.servicesArrow}/>
    </div>
</div>

</div>
    </section>
  )
}

export default Services