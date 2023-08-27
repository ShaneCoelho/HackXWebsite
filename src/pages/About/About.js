import React from "react";
import "./About.css";


const About = () => {
  return (
    <section id="about-section" class="about-container">
      <h1 class="header-text">
        About Hack<span class="orange">X</span>
      </h1>

      <div class="content">
        <div class="information">
          <p>
            Welcome to{" "}
            <span class="font-big">
              Hack<span class="orange">X</span> 1.0
            </span>
            , the <span class="font-big orange"> National-Level</span> Hackathon
            proudly organized by St. Francis Institute of Technology, Mumbai, as
            part of our iconic{" "}
            <span class="font-big orange">25th anniversary</span> techfest,
            Mosaic.
          </p>

          <p>
            This extraordinary event gathers the sharpest minds from across the
            nation in a vibrant celebration of{" "}
            <span class="font-big orange">innovation</span> and{" "}
            <span class="font-big orange">collaboration</span>. Aspiring
            developers, designers, and problem solvers will showcase their
            skills and <span class="font-big orange">creativity</span> , taking
            on <span class="font-big orange">real-world challenges</span> that
            will <span class="font-big orange">redefine</span> the tech
            landscape.
          </p>

          <p>
            <span class="font-big orange">Network</span> with industry leaders,
            fuel your passion for technology, and be part of a grand celebration
            of Mumbai's tech excellence.
          </p>

          <p>
            HackX is your <span class="font-big orange">gateway</span> to
            becoming the tech titans that will shape our nation's{" "}
            <span class="font-big orange">future</span> .
          </p>
        </div>

        {/* <div class="object">
          <div>3d object</div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
