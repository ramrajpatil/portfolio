// Home.js
import React, { useEffect, useRef } from "react";
import pdf from "../pdf/resume_ramraj.pdf";
import hero from "./Data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typedRefresh = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Hello, I am Ramraj Patil"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(typedRefresh.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container home mt-4" id="home">
      <div className="content-wrapper" data-aos="fade-right" data-aos-duration="1000">
        <div className="left">
          <h1 ref={typedRefresh}></h1>
          <p>A Full Stack Java Developer</p>
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-warning"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img">
            <img src={`/assets/${hero.imgSrc}`} alt="ramraj patil" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
