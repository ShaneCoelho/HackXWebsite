import React from "react";
import "./Speakers.css";
import avatar from "../../assets/Speakers/avatar.png"
import avatar_1 from "../../assets/Speakers/avatar-1.png"
import avatar_2 from "../../assets/Speakers/avatar-2.png"
import avatar_3 from "../../assets/Speakers/avatar-3.png"
import avatar_4 from "../../assets/Speakers/avatar-4.png"
import avatar_5 from "../../assets/Speakers/avatar-5.png"
import avatar_6 from "../../assets/Speakers/avatar-6.png"
import avatar_7 from "../../assets/Speakers/avatar-7.png"
import background from "../../assets/Speakers/background.jpeg"


const Speakers = () => {
    return (
        <div className="bodies">
        
        <header>
          <h1>Speakers and Judges</h1>
        </header>
        <section className="carda-container">
          
          <div className="carda">
            <img src={avatar_7} alt="Speaker 1"/>
            <h2>Royston Dsilva</h2>
            <p>Consultant, Ex-Techlead Disney DS Smith</p>
            <a href="https://www.linkedin.com/in/dsilvaroyston/" target="_blank">LinkedIn</a>
          </div>
          <div className="carda">
              <img src={avatar_5} alt="Speaker 2"/>
              <h2>Srinivas Konduri</h2>
              <p>SDE,BITS Pilani Hyderabad '22</p>
              <a href="https://www.linkedin.com/in/srinivas-konduri/" target="_blank">LinkedIn</a>
          </div>
          <div className="carda">
              <img src={avatar_3} alt="Speaker 3"/>
              <h2>Pranav Malik</h2>
              <p>SDE || at Microsoft</p>
              <a href="https://www.linkedin.com/in/candidatepstx-95adfsdk23/" target="_blank">LinkedIn</a>
          </div> 
          <div className="carda">
              <img src={avatar_1} alt="Speaker 4"/>
              <h2>Dishant Zaveri</h2>
              <p>Singapore India hackathon '23 winner, SIH '22 winner</p>
              <a href="https://www.linkedin.com/in/dishant-zaveri-4301471b9/" target="_blank">LinkedIn</a>   
          </div>
          <div className="carda">
              <img src={avatar_6} alt="Speaker 4"/>
              <h2>Vishek Pratak</h2>
              <p>Co-Founder & CMO of TechValley, DevRel Evangelist mentor</p>
              <a href="https://www.linkedin.com/in/vishekpratap/" target="_blank">LinkedIn</a>
          </div>
          <div className="carda">
              <img src={avatar_4} alt="Speaker 6"/>
              <h2>Prajakta Kadam</h2>
              <p>Co-founder TechValley and Microsoft Student Ambasador</p>
              <a href="https://www.linkedin.com/in/prajaktak8/" target="_blank">LinkedIn</a>
          </div>
          <div className="carda">
              <img src={avatar_2} alt="Speaker 7"/>
              <h2>Yash Joshi</h2>
              <p>Smart India hackathon '22 winner, 9x hackathon winner</p>
              <a href="https://www.linkedin.com/in/yash-joshi-3444a420b/" target="_blank">LinkedIn</a>
          </div>
          <div className="carda">
              <img src={avatar} alt="Speaker 8"/>
              <h2>Nimish Jain</h2>
              <p>SDE || at Microsoft</p>
              <a href="https://www.linkedin.com/in/nimishjain1000/" target="_blank">LinkedIn</a>
          </div>     
          
        </section>
        </div>
     )

}

export default Speakers