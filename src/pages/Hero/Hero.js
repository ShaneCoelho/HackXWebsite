import React, { useEffect, useState } from "react";
import "./Hero.css";
import devfolio from "../../assets/Hero/devfolio.png";
import mainTitle from "../../assets/Hero/hero-main-title.png";
import logoHeader from "../../assets/Hero/logo-header.png";
import Arrow from "../../assets/Hero/arrow.svg";
import bgImage from "../../assets/Hero/hero.png";

// import Wow from "../../assets/Wow";

const Hero = () => {
  const [isToggleBoxVisible, setIsToggleBoxVisible] = useState(false);

  const toggleBox = () => {
    setIsToggleBoxVisible(!isToggleBoxVisible);
  };

  return (
    <>
      <div id="toggleButton" class="hamburger-icon" onClick={toggleBox}>
        ☰
      </div>
      <section
        className={`toggle-box ${isToggleBoxVisible ? "show-toggle-box" : ""}`}
      >
        <div id="close-menu" class="close-icon" onClick={toggleBox}>
          ✕
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Prizes</li>
          <li>Problems</li>
          <li>Rules</li>
          <li>Sponsors</li>
        </ul>
      </section>

      <section class="hero">
        <nav>
          <img class="logo-header" src={logoHeader} />

          <ul>
            <li class="nav-menu">Home</li>
            <li class="nav-menu">About</li>
            <li class="nav-menu">Prizes</li>
            <li class="nav-menu">Problems</li>
            <li class="nav-menu">Rules</li>
            <li class="nav-menu">Sponsors</li>
          </ul>
        </nav>

        <div>
          <img class="hero-title-logo" src={mainTitle} />
          <p>Hackers Assemble</p>
          <div class="devfolio-tile">
            <img class="devfolio-logo" src={devfolio} />
            <h3>Apply with Devfolio</h3>

            <a href="https://hackx-1.devfolio.co/" target="blank">
              <img class="svg" src={Arrow} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
