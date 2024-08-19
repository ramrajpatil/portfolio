import "./App.css";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects"
import Contact from "./components/Contact"

import Aos from "aos";
import "aos/dist/aos.css"



function App() {




  useEffect(()=>{

    Aos.init();



  },[])
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Home />
      </div>
      <div className="container">
        <Skills/>
      </div>
      <div className="container pb-5">
        <Experience />
      </div>
      <div className="container pb-5">
        <Projects/>
      </div>
      <div className="container">
        <Contact/>
      </div>
    </div>
  );
}

export default App;
