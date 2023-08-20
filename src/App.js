import React from "react";
import Hero from "./pages/Hero/Hero";
import Timer from "./pages/Timer/Timer";
import About from "./pages/About/About";
import ProblemStatement from "./pages/ProblemStatement/ProblemStatement";

const App = () => {
  return (
    <div>
      <Hero />
      <Timer />
      <About />
      <ProblemStatement />
    </div>
  );
};

export default App;
