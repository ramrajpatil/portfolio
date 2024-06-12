import React from "react";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";


const Contact = () => {
  return (
    <div className="contact container" id="contact">
      <h1 className="text-center" >CONTACT ME</h1>
      <div className="contact-icon"
      data-aos="zoom-in"
      data-aos-duration="1000"
      >
        <a href="mailto:ramrajpatil24@gmail.com" target="_blank" className="items">
        <BiLogoGmail className="icons"/>
        </a>
        <a href="https://github.com/ramrajpatil" target="_blank" className="items">
          <FaGithub className="icons"/>
        </a>
        <a href="https://www.linkedin.com/in/ramraj-patil-6152a0190/" target="_blank" className="items">
          <FaLinkedinIn className="icons"/>
        </a>
      </div>
    </div>
  );
};

export default Contact;
