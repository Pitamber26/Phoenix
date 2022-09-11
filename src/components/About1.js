import React from "react";
import AboutCSS from "./About1.module.css"

export default function About1(){
    return (
        <section className={AboutCSS.about_container}>
          <div className={AboutCSS.about_img_row}>
            <div className={AboutCSS.about_img}>
            <img src="./images/rect.png" alt="Pheonix image"/>
            </div>
            <div className={AboutCSS.about_img2}>
            <img src="./images/rect.png" alt="Pheonix image"/>
            </div>
            <div className={AboutCSS.about_img}>
            <img src="./images/rect.png" alt="Pheonix image"/>
            </div>
          </div>
          <div className={AboutCSS.content}>
           <p>We also <b>organize events </b>throughout the year with varying levels of target crowd.
           <br></br>
           <br></br>
           <br></br>
           Be a part of the evergrowing plethora of <b>events </b>and <b>projects</b>. You can <b>participate </b>in our events and <b>submit</b> your projects on the portal.</p>
           </div>
        </section>
    )
}