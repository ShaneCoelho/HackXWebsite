import React, { useEffect, useState } from "react";
import "./ChiefGuest.css";
import background from "../../assets/ChiefGuest/background.jpeg";
import instagram from "../../assets/ChiefGuest/instagram-icon.png";
import linkedin from "../../assets/ChiefGuest/linkedin-icon.jpg";
import youtube from "../../assets/ChiefGuest/youtube-icon.png";
import profile from "../../assets/ChiefGuest/profile.jpeg";


const ChiefGuest =()=>{
    return(
<section className="bodyb">
    <header>
        <h1>Guest</h1>
    </header>
    <main>
        <div className="cardb">
            <div className="profile-image">
                <img src={profile} alt="Profile Image"/>
            </div>
            <div className="profile-info">
                <h2>Arsh Goyal</h2>
                <p>Software Engineer</p>
                <p>Samsung | Ex- ISRO | Gold Medalist - NIT Jalandhar | Educator-Unacademy | CodeChef</p>
            </div>
            <div className="social-icons">
                <a href="https://www.youtube.com/channel/UCJqx8MM4gDPDy8TqVVlPyLw"><img src={youtube} alt="YouTube"/></a>
                <a href="https://www.instagram.com/arshgoyalyt/?hl=en"><img src={instagram} alt="Instagram"/></a>
                <a href="https://www.linkedin.com/in/arshgoyal/"><img src={linkedin} alt="LinkedIn"/></a>
            </div>
        </div>
    </main>
</section>
    )
}

export default ChiefGuest;