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

description:"Designed and developed a responsive e-commerce website for handcrafted flower bouquets and gift hampers. Focused on intuitive navigation, product discovery, visual hierarchy, shopping cart functionality and seamless user experiences across desktop, tablet and mobile devices while applying modern UI/UX principles.",

tech:[
"HTML",
"CSS",
"JavaScript",
"Responsive Design",
"UI/UX"
],

image:flowercraft,

github:"https://github.com/Saloni-gif/creative-flower-crafts.git",

live:"https://saloni-gif.github.io/creative-flower-crafts/"
},

{
title:"Golden Bean",

featured:true,

description:
"Designed and developed a premium coffee brand website focused on storytelling, visual appeal and user engagement. Implemented responsive layouts, clear content hierarchy and modern UI principles to create an immersive brand experience across all devices.",

tech:[
"React",
"CSS",
"Responsive Design",
"UI Design"
],

image:goldenbean,

github:"https://github.com/Saloni-gif/golden-bean-website.git",

live:"https://golden-bean-website.vercel.app/"
},

{
title:"Movie Search Pro",

featured:true,

description:
"Developed an interactive movie discovery platform using React and the OMDb API. Focused on fast search experiences, intuitive navigation, responsive design, error handling and user-friendly content presentation through a modern interface.",

tech:[
"HTML",
"CSS",
"JavaScript",
"Responsive Design",
"UI Design"
],

image:moviesearch,

github:"https://github.com/Saloni-gif/movie-search-pro",

live:"https://movie-search-pro-virid.vercel.app/"
},

{
title:"Weather Dashboard",

featured:true,

description:
"Built a responsive weather dashboard delivering real-time weather insights through a clean and intuitive interface. Designed data-rich layouts that improve readability while presenting temperature, AQI, UV Index, humidity and weather analytics in an accessible format.",
tech:[
"React",
"Weatherbit API",
"Responsive Design",
"UI Design"
],

image:weatherdashboard,

github:"https://github.com/Saloni-gif/weather-dashboard-react",

live:"https://weather-dashboard-react-eight.vercel.app/"
}

];

const extraProjects = [

  {
    title: "Quiz App",
    description:
    "Built an interactive quiz platform featuring dynamic question rendering, score tracking, instant feedback and responsive user interfaces designed to enhance user engagement and learning experiences.",
    tech:[
  "React",
  "JavaScript",
  "Responsive Design"
],
    github: "https://github.com/Saloni-gif/react-quiz-app.git",
    live: "https://react-quiz-app-henna-phi.vercel.app/"
  },

  {
    title: "User Registration System",
    description:
"Developed a comprehensive user registration system featuring real-time form validation, password confirmation checks, input handling, date selection and user-friendly error prevention. Focused on usability, form accessibility and responsive design.",
   tech: [
  "React",
  "JavaScript",
  "Form Validation",
  "Responsive Design"
],
    github: "https://github.com/Saloni-gif/user-registration-system.git",
    live: "https://user-registration-system-zeta.vercel.app/"
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