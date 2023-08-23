import React, { useEffect, useState } from "react";
import "./ChiefGuest.css";
import background from "../../assets/ChiefGuest/background.jpeg";
import instagram from "../../assets/ChiefGuest/instagram-icon.png";
import linkedin from "../../assets/ChiefGuest/linkedin-icon.jpg";
import youtube from "../../assets/ChiefGuest/youtube-icon.png";
import profile from "../../assets/ChiefGuest/arshgoyal.jpg";
import { SocialIcon } from 'react-social-icons';

const ChiefGuest =()=>{
    return(
<section className="bodyb">
    <header>
        <h1>Chief Guest</h1>
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
                <SocialIcon url="https://www.youtube.com/channel/UCJqx8MM4gDPDy8TqVVlPyLw" />
                <SocialIcon url="https://www.instagram.com/arshgoyalyt/?hl=en" />
                <SocialIcon url="https://linkedin.com/in/arshgoyal/" />
            </div>
        </div>
    </main>
</section>
    )
}

export default ChiefGuest;