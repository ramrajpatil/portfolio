import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container nav-bar"
    data-aos="fade-down"
    data-aos-duration="1000"
    >
      <div className="left nav-item">Portfolio</div>
      <div className="right">
        <a href="#home" className="nav-item">About</a>
        <a href="#projects" className="nav-item">Projects</a>
        <a href="#skills" className="nav-item">Skills</a>
        <a href="#experience" className="nav-item">Experience</a>
        <a href="#contact" className="nav-item">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
