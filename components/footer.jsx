import React from 'react'
import Link from 'next/link'
import footer from '../app/footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <>
    <footer className={footer.mainFooter}>
      <div className={footer.innerFooter}>
        <div className={footer.innerFooterBox}>
          <h2 className={footer.h2}>BIkalp</h2>
          <p className={footer.p}>BIKALP is a company specializing in the IT sector. We are hard working, creative and passionate in the field of website design, development and software development. We also include services like logo design and website redesign. We will help you grow your business digitally.</p>
        </div>
        <div className={footer.innerFooterBox}>
          <h2 className={footer.h2}>Quick Links</h2>
         <ul className={footer.unOrder}>
         <Link href={"/career"}className={footer.footertext}>Careers</Link>
         <Link href={"/career"}className={footer.footertext}>Portfolios</Link>
         <Link href={"/career"}className={footer.footertext}>About us</Link>
         </ul>
        </div>
        <div className={footer.innerFooterBox}>
          <h2 className={footer.h2}>Resources</h2>
          <ul className={footer.unOrder}>
         <Link  href={"/career"}className={footer.footertext}>Privacy Policy</Link>
         <Link href={"/career"}className={footer.footertext}>FAQ</Link>
         </ul>
        </div>
        <div className={footer.innerFooterBox}>
          <h2 className={footer.h2}>Contact Us</h2>
          <p className={footer.p} >Kathmandu, Nepal</p>
          <p className={footer.p}>Bikalp.company@gmail.com</p>
          <p className={footer.p}>+977-9800000000</p>
        </div>
      </div>
      <div className={footer.nextFooterBox}>
        <p className={footer.p}>© 2024 | Alrights reserved by Bikalp IT Solution</p>
        <div className={footer.inputType}>
          <input type="text" placeholder='Enter Your email' className={footer.input}/>
          <FontAwesomeIcon icon={faPaperPlane} className={footer.sendIcon} />
        </div>
      </div>
    </footer>

    </>
  )
}

export default Footer