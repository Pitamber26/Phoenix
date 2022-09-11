import React from "react";
import About2CSS from "./About2.module.css"

export default function About2(){
    return (
        <section className={About2CSS.about_container}>
            <div className={About2CSS.content}>
           <p>The <b>Phoenix</b> as a club brings together like minded people to convert <b>ideas into reality. </b>
           <br></br>
           <br></br>
           <br></br>
            Our Main Motive is to bring out the feeling of <b>togetherness</b> among the students of LNMIIT and to spread the culture of <b>Robotics, DIP, Embedded System</b> .</p>
           </div>
          <div className={About2CSS.about_img_row}>
            <div className={About2CSS.about_img}>
            <img src="./images/rect.png" alt="Pheonix image"/>
            </div>
            <div className={About2CSS.about_img2}>
            <img src="./images/rect.png" alt="Pheonix image"/>
            </div>
            <div className={About2CSS.about_img}>
            <img src="./images/rect.png" alt="Pheonix image"/>
            </div>
          </div>
          
        </section>
    )
}