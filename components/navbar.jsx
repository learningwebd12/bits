"use client"
import React from 'react'
import navcss from '../app/navbar.module.css'
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from 'next/link'


const Navbar = () => {
  const router = useRouter();
  const [addClass, setAddClass] = useState(true);
  const toggleClass = () => {
    setAddClass(!addClass);
  };
  
  return (
    <header className={navcss.header}>

<div className={navcss.menuIcon} onClick={toggleClass}>
          <svg className={navcss.humburger} viewBox="0 0 110 80" width="40" height="40">
            <rect y1="0" width="90" height="10" fill='white'></rect>
            <rect y="30" width="90" height="10" fill='white'></rect>
            <rect y="60" width="90" height="10" fill='white'></rect>
          </svg>
        </div>
      
        <div className={navcss.logo}>BIKALP</div>
        
        <div className={addClass ? navcss['allNavabdBtn'] :navcss['specific-div'] } >
        <nav className={navcss.nav}>
            <Link href={"/"}className={navcss.navtext}>Home</Link>
            <Link href={"about"}className={navcss.navtext}>About </Link>
            <Link href={"ourservices"}className={navcss.navtext}>SERVICES </Link>
            <Link href={"#team"}className={navcss.navtext}>Our TEAM </Link>
            <Link href={"blog"}className={navcss.navtext}>BLOG </Link>
        </nav>
        <Link href={"/contact"} > <button className={navcss.headerBtn}>Contact us</button> </Link>
        </div>
    </header>
  )
}

export default Navbar