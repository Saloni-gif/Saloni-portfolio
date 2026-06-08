import { useState } from "react";
import "./Projects.css";

import flowercraft from "../assets/projects/flowercraft.png";
import goldenbean from "../assets/projects/goldenbean.png";
import moviesearch from "../assets/projects/moviesearch.png";
import weatherdashboard from "../assets/projects/weatherdashboard.png";

const projects = [

{
title:"Creative Flower Crafts",

featured:true,

description:"Built a responsive ecommerce flower store with modern UI, product showcases, category navigation and mobile-first design principles.",


tech:[
"HTML",
"CSS",
"JavaScript",
"Responsive Design"
],

image:flowercraft,

github:"#",

live:"#"
},

{
title:"Golden Bean",

featured:true,

description:
"Designed and developed a premium coffee brand website featuring modern layouts, engaging visuals and responsive user experiences.",

tech:[
"React",
"CSS",
"Responsive Design"
],

image:goldenbean,

github:"#",

live:"#"
},

{
title:"Movie Search App",

featured:false,

description:
"Search and discover movies using the OMDB API with dynamic search functionality and movie information display.",

tech:[
"React",
"OMDB API",
"JavaScript"
],

image:moviesearch,

github:"#",

live:"#"
},

{
title:"Weather Dashboard",

featured:true,

description:
"Modern weather dashboard built with React and Weatherbit API. Displays real-time weather data including temperature, humidity, wind speed, AQI, UV Index, visibility, cloud cover, and responsive glassmorphism UI design.",

tech:[
"React",
"Vite",
"Weatherbit API",
"CSS3"
],

image:weatherdashboard,

github:"https://github.com/Saloni-gif/weather-dashboard-react",

live:"https://weather-dashboard-react-eight.vercel.app/"
}

];

const extraProjects = [
  {
    title: "Authentication App",
    description: "Login and authentication flow with protected routes.",
    tech: ["React", "React Router"],
    github: "https://github.com/Saloni-gif"
  },

  {
    title: "Quiz App",
    description: "Interactive quiz application with score tracking.",
    tech: ["React", "JavaScript"],
    github: "https://github.com/Saloni-gif"
  },

  {
    title: "React Form Validation",
    description: "Dynamic forms with custom validation rules.",
    tech: ["React", "Validation"],
    github: "https://github.com/Saloni-gif"
  },

  {
    title: "Calculator Pro",
    description: "A modern React calculator featuring keyboard support, local storage history, dark/light mode, responsive design, and an intuitive glassmorphism UI.",
    tech: ["React", "JavaScript", "CSS3", "Local Storage"],
    github: "https://github.com/Saloni-gif/my-react-calculator.git",
     live: "https://my-react-calculator-nine.vercel.app/"
  }
  
];

function Projects() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="projects"
      className="projects"
    >
      <h2>Projects</h2>

      <div className="projects-container">

        {projects.map((project, index) => (

          <div
            key={index}
            className={`project-card ${
              index % 2 !== 0 ? "reverse" : ""
            }`}
          >

            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="project-content">

              {project.featured && (
                <span className="featured">
                  FEATURED PROJECT
                </span>
              )}

              <h3>{project.title}</h3>

              <div className="tech-stack">

                {project.tech.map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}

              </div>

              <p>{project.description}</p>

              <div className="project-buttons">

               <div className="project-links">

  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    className="project-link"
  >
    View Code
  </a>

  <a
    href={project.live}
    target="_blank"
    rel="noreferrer"
    className="project-link live"
  >
    Live Demo
  </a>

</div>

              </div>

            </div>

          </div>

        ))}

      </div>

      <button
        className="view-more"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Show Less" : "View More Projects"}
      </button>

      {showMore && (
        <>
          <h3 className="other-projects-title">
            Additional Projects
          </h3>

          <div className="extra-projects">

            {extraProjects.map((project, index) => (

              <div
                key={index}
                className="extra-card"
              >

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="extra-tech">

                  {project.tech.map((item, i) => (
                    <span key={i}>
                      {item}
                    </span>
                  ))}

                </div>

                <div className="extra-buttons">

  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    className="small-github-btn"
  >
    View Code
  </a>

  {project.live && (
    <a
      href={project.live}
      target="_blank"
      rel="noreferrer"
      className="small-live-btn"
    >
      Live Demo
    </a>
  )}

</div>

              </div>

            ))}

          </div>
        </>
      )}

    </section>
  );
}

export default Projects;