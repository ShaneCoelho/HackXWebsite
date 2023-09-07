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
import avatar_9 from "../../assets/Speakers/avatar9.jpeg"
import avatar_10 from "../../assets/Speakers/avatar-10.png"
import avatar_11 from "../../assets/Speakers/avatar-11.png"
import avatar_12 from "../../assets/Speakers/avatar-12.png"
import avatar_13 from "../../assets/Speakers/avatar-13.png"
import avatar_14 from "../../assets/Speakers/avatar-14.png"
import avatar_15 from "../../assets/Speakers/avatar-15.png"
import background from "../../assets/Speakers/background.jpeg"
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

const Speakers = () => {
    return (
        <div className="bodies">

            <header>
                <h1>Speakers and Judges</h1>
            </header>
            <section className="carda-container">

                <div className="carda">
                    <img src={avatar_7} alt="Speaker 1" />
                    <h2>Royston Dsilva</h2>
                    <p>Consultant | Ex-Techlead Disney DS Smith</p>

                    <SocialIcon url="https://linkedin.com/in/dsilvaroyston/" />
                </div>

                <div className="carda">
                    <img src={avatar} alt="Speaker 8" />
                    <h2>Nimish Jain</h2>
                    <p>SDE || at Microsoft</p>

                    <SocialIcon url="https://www.linkedin.com/in/nimishjain1000/" />
                </div>


                <div className="carda">
                    <img src={avatar_5} alt="Speaker 2" />
                    <h2>Srinivas Konduri</h2>
                    <p>SDE | BITS Pilani Hyderabad '22</p>
                    <SocialIcon url="https://www.linkedin.com/in/srinivas-konduri/" />
                </div>
                <div className="carda">
                    <img src={avatar_3} alt="Speaker 3" />
                    <h2>Pranav Malik</h2>
                    <p>SDE || at Microsoft</p>
                    <SocialIcon url="https://www.linkedin.com/in/candidatepstx-95adfsdk23/" />
                </div>

                <div className="carda">
                    <img src={avatar_9} alt="Speaker 9" />
                    <h2>Lekhraj Varahney</h2>
                    <p>Senior Associate JP Morgan Chase & CO</p>
                    <SocialIcon url="https://www.linkedin.com/in/lekhrajvarshney/" />
                </div>


                <div className="carda">
                    <img src={avatar_1} alt="Speaker 4" />
                    <h2>Dishant Zaveri</h2>
                    <p>Singapore India hackathon '23 winner | SIH '22 winner</p>
                    <SocialIcon url="https://www.linkedin.com/in/dishant-zaveri-4301471b9/" />
                </div>


                <div className="carda">
                    <img src={avatar_6} alt="Speaker 4" />
                    <h2>Vishek Pratak</h2>
                    <p>Co-Founder & CMO of TechValley | DevRel Evangelist mentor</p>
                    <SocialIcon url="https://www.linkedin.com/in/vishekpratap/" />
                </div>

                <div className="carda">
                    <img src={avatar_2} alt="Speaker 7" />
                    <h2>Yash Joshi</h2>
                    <p>Smart India hackathon '22 winner | 9x hackathon winner</p>
                    <SocialIcon url="https://www.linkedin.com/in/yash-joshi-3444a420b/" />
                </div>


                <div className="carda">
                    <img src={avatar_4} alt="Speaker 6" />
                    <h2>Prajakta Kadam</h2>
                    <p>Co-founder TechValley and Microsoft Student Ambasador</p>
                    <SocialIcon url="https://www.linkedin.com/in/prajaktak8/" />
                </div>

                <div className="carda">
                    <img src={avatar_10} alt="Speaker 10" />
                    <h2>Chirag Shetty</h2>
                    <p>Engineer at BrowserStack</p>

                    <SocialIcon url="https://www.linkedin.com/in/chiragshetty98/" />
                </div>

                <div className="carda">
                    <img src={avatar_11} alt="Speaker 11" />
                    <h2>Kaivan Shah</h2>
                    <p>Software Development Engineer at Morgan Stanley</p>

                    <SocialIcon url="https://www.linkedin.com/in/kaivan-shah14/" />
                </div>


                <div className="carda">
                    <img src={avatar_12} alt="Speaker 12" />
                    <h2>Jay Malave</h2>
                    <p>Google DSC Lead at KJSCE | Committee Head at KJSCE CodeCell | Leading Tech at Kaamyup | Software Developer at iGEM 2 IISER Pune | Flutter Developer at Paisa | Freelancer</p>

                    <SocialIcon url="https://www.linkedin.com/in/jay-malave/" />
                </div>

                <div className="carda">
                    <img src={avatar_13} alt="Speaker 13" />
                    <h2>Sahil Nirkhe</h2>
                    <p>Engineer at BrowserStack</p>

                    <SocialIcon url="https://www.linkedin.com/in/sahil-nirkhe/" />
                </div>

                <div className="carda">
                    <img src={avatar_14} alt="Speaker 14" />
                    <h2>Siddhant Mishra</h2>
                    <p>Senior Analyst at Capgemini | Software Engineer</p>

                    <SocialIcon url="https://www.linkedin.com/in/siddhant-mishra-021726181/" />
                </div>

                <div className="carda">
                    <img src={avatar_15} alt="Speaker 15" />
                    <h2>Harshal Dave</h2>
                    <p>Full Stack Geek | Founder - Maalvo Learners | Finalist at SIH2022, Kavach2023 | Won 5+ national hackathons</p>

                    <SocialIcon url="https://www.linkedin.com/in/harshalhdave/" />
                </div>


            </section>
        </div>
    )

}

export default Speakers