import React from "react";
import Hero from "./pages/Hero/Hero";
import Timer from "./pages/Timer/Timer";
import About from "./pages/About/About";
import ProblemStatement from "./pages/ProblemStatement/ProblemStatement";
import PrizePool from "./pages/PrizePool/PrizePool";
import Timeline from "./pages/Timeline/Timeline";

const App = () => {
  return (
    <div>
      <Hero />
      <Timer />
      <About />
      <Timeline />
      <PrizePool />
      <ProblemStatement />
    </div>
  );
};

export default App;
