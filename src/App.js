import React from "react";
import Hero from "./pages/Hero/Hero";
import Timer from "./pages/Timer/Timer";
import About from "./pages/About/About";
import ProblemStatement from "./pages/ProblemStatement/ProblemStatement";
import PrizePool from "./pages/PrizePool/PrizePool";
import Timeline from "./pages/Timeline/Timeline";
import Rules from "./pages/Rules/Rules";
import Sponsors from "./pages/Sponsors/Sponsors";
import Speakers from "./pages/Speakers/Speakers";
import Accordion from "./pages/Accordion/Accordion";
import ChiefGuest from "./pages/ChiefGuest/ChiefGuest";
import Footer from "./pages/Footer/Footer";

const App = () => {
  return (
    <div>
      <Hero />
      <Timer />
      <About />
      <Timeline />
      <PrizePool />
      <ProblemStatement />
      <ChiefGuest />
      <Rules />
      <Speakers />

      <Accordion />
      <Footer />
    </div>
  );
};

export default App;
