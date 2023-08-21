import React from "react";
import Hero from "./pages/Hero/Hero";
import Timer from "./pages/Timer/Timer";
import About from "./pages/About/About";
import ProblemStatement from "./pages/ProblemStatement/ProblemStatement";
import PrizePool from "./pages/PrizePool/PrizePool";
import Timeline from "./pages/Timeline/Timeline";
import Speakers from "./pages/Speakers/Speakers";
import Accordion from "./pages/Accordion/Accordion";

const App = () => {
  return (
    <div>
      <Hero />
      <Timer />
      <About />
      <Timeline />
      <PrizePool />
      <ProblemStatement />
      <Speakers />
      <Accordion />
    </div>
  );
};

export default App;
