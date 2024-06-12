import React from "react";
import skills from "./Data/skills.json";

const Skills = () => {
  return (
    <div className="container skills mt-5 pt-5" id="skills">
      <h1 className="text-center">SKILLS</h1>
      <div className="items">
        {skills.map((s, index) => {
          return (
            <>
              <div className="item" key={index}
              data-aos="flip-left"
      data-aos-duration="1000"
              >
                <img src={`${s.imageSrc}`} alt="" />
                <h3>{s.title}</h3>
              </div>
            </>
          )
        })}
      </div>
    </div>
  );
};

export default Skills;
