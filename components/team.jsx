import React from 'react'
import team from '../app/team.module.css'
import Image from 'next/image'

const Team = () => {
  return (
    <section  className={team.teamSection} id="team" >
      <div className={team.twoTeamText}>
        <div className={team.teamTextImages}>
          <h1 className={team.teamH1}>TEAM</h1>
          <Image width={1000} height={1000} src={"/images/19.png"} className={team.teamImagesone}/>
        </div>
        <div className={team.teamText} >
          <p className={team.pasagText}>
          We are here to help you achieve your business goals and the team create an amazing outstanding product for your business.
          </p>
        </div>
      </div>

      <div className={team.allTeamMember}>
      <div className={team.mainMember}>
        <div className={team.teammemberImages}>
        <Image width={1000} height={1000} src={"/images/pexels-photo-17527963.jpeg"} className={team.TarkaImages}/>
        </div>
        <figcaption className={team.figcaption}>
        Tarka Raj Joshi
        </figcaption>
        <p className={team.teamdetails}>Graphic Desinger/Video Editor</p>
      </div>

      <div className={team.mainMember}>
        <div className={team.teammemberImages}>
        <Image width={1000} height={1000} src={"/images/pexels-nuray-yakın-17605383.jpg"} className={team.TarkaImages}/>
        </div>
        <figcaption className={team.figcaption}>
        Birendra Dewal
        </figcaption>
        <p className={team.teamdetails}>Front-end Developer/Ui Designer</p>
      </div>

      <div className={team.mainMember}>
        <div className={team.teammemberImages}>
        <Image width={1000} height={1000} src={"/images/pexels-nana-20640870.jpg"} className={team.TarkaImages}/>
        </div>
        <figcaption className={team.figcaption}>
        Ganesh Regmi
        </figcaption>
        <p className={team.teamdetails}>Front-end Developer/Ui Designer</p>
      </div>

      </div>

    </section>
  )
}

export default Team