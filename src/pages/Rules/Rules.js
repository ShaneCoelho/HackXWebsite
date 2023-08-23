import "./Rules.css";

import React from "react";
import "./Rules.css"; // Import your CSS file if needed
import devFolio from "../../assets/Rules/dev.png";
import warning from "../../assets/Rules/w.png";

const Rules = () => {
  return (
    <div>
      <header>
        <div className="header-text">
          <p style={{ fontSize: "35px", marginTop: "1rem" }}>
            Hack<span style={{ color: "orange" }}>X</span> Rules/Guidelines
          </p>
        </div>

        {/* <p style={{ fontSize: "35px" }}>HackX Rules/Guidelines</p> */}
        <h4 className="info">
          Before you embark on this exciting journey, familiarize yourself with
          the comprehensive rulebook
        </h4>
        <div className="icon-1">
          <img className="dev" src={devFolio} alt="Icon" />
          <p>Teams should Register only through Devfolio</p>
        </div>
      </header>
      <div className="paras">
        <div className="icon">
          <img src={warning} alt="Icon" className="warning" />
          <p>
            <b>
              <font style={{ color: "#ffd600f2" }}>Event Dates:</font>
            </b>
            Mark your calendars, <b>September 15th & 16th’23</b>, from 12:00 PM
            to 12:00 PM. Get ready to unleash your creativity!
          </p>
        </div>
        <div className="icon">
          <img src={warning} alt="Icon" className="warning" />
          <p>
            <b>
              {" "}
              <font style={{ color: "#ffd600f2" }}>Team Composition:</font>{" "}
            </b>
            Teams can comprise <b>2-4 members</b>, all of whom must be students
            from a university or college. Mix and match talents from different
            institutions to amplify your skills.
          </p>
        </div>

        <div className="icon">
          <img src={warning} alt="Icon" className="warning" />
          <p>
            <b>
              <font style={{ color: "#ffd600f2" }}>Entry Fees:</font>
            </b>
            The best part? Participation is absolutely <b>free!</b> No entry
            fees required just your brilliant ideas and skills.
          </p>
        </div>

        <div className="icon">
          <img src={warning} alt="Icon" className="warning" />
          <p>
            <b>
              <font style={{ color: "#ffd600f2" }}>Resources:</font>
            </b>
            <b>Feel free</b> to utilize open standard repositories, APIs, and
            publicly available libraries to craft your solutions.
          </p>
        </div>

        <div className="icon">
          <img src={warning} alt="Icon" className="warning" />
          <p>
            <b>
              <font style={{ color: "#ffd600f2" }}>Domain Selection:</font>
            </b>
            Instead of abstracts, you'll need to choose your desired domain to
            participate in. Show your prowess in the domain of{" "}
            <b>your choice.</b>
          </p>
        </div>

        <div className="icon">
          <img src={warning} alt="Icon" className="warning" />
          <p>
            <b>
              <font style={{ color: "#ffd600f2" }}>Problem Statements:</font>
            </b>
            Brace yourselves! Problem statements will be revealed live,
            <b>three days after the registration closes.</b>
            Get ready to conquer challenges like never before.
          </p>
        </div>

        <div className="icon">
          <img src={warning} alt="Icon" className="warning" />
          <p>
            <b>
              <font style={{ color: "#ffd600f2" }}>Selection Criteria:</font>
            </b>
            Impress us with your credentials! Selection will be
            <b>based on your resume and past projects.</b>
            Showcase your skills and experiences for a chance to participate.
          </p>
        </div>

        <div className="icon">
          <img src={warning} alt="Icon" className="warning" />
          <p>
            <b>
              <font style={{ color: "#ffd600f2" }}>Decisions:</font>
            </b>
            The decisions made by our <b>organizers and judges</b> are final.
            Trust their expertise in assessing your creations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rules;
