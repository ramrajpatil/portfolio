import React from "react";
import projects from "./Data/projects.json";

const Projects = () => {
  return (
    <div className="container projects my-3 mt-5 pt-5" id="projects">
      <h1 className="text-center">PROJECTS</h1>

      <div className="row d-flex justify-content-center align-items-center ">
        {projects.map((project, index) => (
          <div className="my-5 col-md-4 col-sm-6 col-lg-3 mx-5" key={index}
          data-aos="zoom-in"
      data-aos-duration="1000"
          >
            <div
              className="card bg-dark text-light"
              style={{
                width: "18rem",
                border: "1px solid red",
                borderRadius: "10px",
                boxShadow: "5px 5px 10px 10px rgb(206, 35, 35)",
              }}
            >
              <div className="img d-flex justify-content-center align-items-center p-3">
                <img
                  src={`/assets/${project.imageSrc}`}
                  className="card-img-top"
                  alt="..."
                  style={{
                    maxWidth: "280px",
                    maxHeight: "180px",
                    border: "2px solid red",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <div className="card-body text-center">
                <h2 className="card-title">{project.title}</h2>
                <p className="card-text">{project.techStack}</p>
                <p className="card-text">{project.description}</p>
                <a
                  href={project.source}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
