import React, { useEffect, useState } from "react";
import "./Hero.css";
import devfolio from "../../assets/Hero/devfolio.png";
import mainTitle from "../../assets/Hero/hero-main-title.png";
import logoHeader from "../../assets/Hero/logo-header.png";
import Arrow from "../../assets/Hero/arrow.svg";
import bgImage from "../../assets/Hero/hero.png";
// import Wow from "../../assets/Wow";
import { motion } from "framer-motion";

const Hero = () => {
  const [isToggleBoxVisible, setIsToggleBoxVisible] = useState(false);

  const toggleBox = () => {
    setIsToggleBoxVisible(!isToggleBoxVisible);
  };

  return (
    <div id="hero">
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
          <li onClick={toggleBox}>
            <a href="#hero-section">Home</a>
          </li>
          <li onClick={toggleBox}>
            <a href="#about-section">About</a>
          </li>
          <li>About</li>
          <li>Prizes</li>
          <li>Problems</li>
          <li>Rules</li>
          <li>Sponsors</li>
        </ul>
      </section>

      <section id="hero-section" class="hero">
        <nav>
          <img class="logo-header" src={logoHeader} loading="lazy" />

          <ul>
            <li class="nav-menu">
              <a href="#hero-section">Home</a>
            </li>
            <li class="nav-menu">
              <a href="#about-section">About</a>
            </li>
            <li class="nav-menu">
              <a href="#prizes">Prizes </a></li>
            <li class="nav-menu">
              <a href="#problems">Problems</a></li>
            {/* <li class="nav-menu">
              <a href="#prizes">Rules</a></li> */}
            {/* <li class="nav-menu">
              <a href="#prizes">Sponsors</a></li> */}
          </ul>
        </nav>

        <div>
          <img class="hero-title-logo" src={mainTitle} loading="lazy" />
          <p>Hackers Assemble</p>
          <div class="devfolio-tile">
            <img class="devfolio-logo" src={devfolio} loading="lazy" />
            <h3>Apply with Devfolio</h3>

            <a href="https://hackx-1.devfolio.co/" target="blank">
              <img class="svg" src={Arrow} loading="lazy" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
