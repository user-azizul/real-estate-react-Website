import React from "react";
import About from "./Components/About";

import Header from "./Components/Header";
import Projects from "./Components/Projects";
import Testomonial from "./Components/Testomonial";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Projects />
      <Testomonial />
    </div>
  );
}

export default App;
