import React from 'react'
import contact from '../contact.module.css'

const Contact = () => {
  return (
   <section className={contact.contactSection}>
   <div className={contact.firstContactBox}>
    <div className={contact.leftContactText}>
        <h1 className={contact.contactH1}>
        Let’s get in touch
        </h1>
    </div>
    <div className={contact.rightContactText}>
        <p className={contact.contactPasag}>
        Have a specific inquiry or message for us? Fill out the form below, and we'll get back to you as soon as possible
        </p>
    </div>
   </div>
   <div className={contact.secondContactBox}>
    <div className={contact.leftinfo}>
        <h3 className={contact.contactH3}>Our Contact information</h3>
        <p className={contact.contactText}>after you submit the form, our team will get back to you within 24 hours</p>
        <h3 className={contact.contactH3}>
        chat with us</h3>
        <p className={contact.contactText}>
        Bikalp.company@gmail.com
        </p>
        <h3 className={contact.contactH3}>
        Head Office</h3>
        <p className={contact.contactText}>
        Lamki, Kailali
        </p>
        
    </div>

    <form action="" className={contact.contactForm}>
     <div className={contact.twoInput}>
        <input className={contact.contactInput} type="text" placeholder='Name*' />
        <input className={contact.contactInput} type="email" placeholder='Email*' />
     </div>
     <div className={contact.twoInput}>
        <input  className={contact.contactInput} type="number" placeholder='Phone*' />
        <input  className={contact.contactInput} type="text" placeholder='Subject*' />
     </div>
     <textarea className={contact.textarea} placeholder='Message*'></textarea>
     <button className={contact.sendMessage}>Send Message</button>
   </form>
   </div>
   
   </section>
  )
}

export default Contact