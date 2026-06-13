import "./About.css";
import profile from "../assets/profile.jpg";
import { FaLaptopCode, FaPalette, FaLightbulb } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">

      <h2 className="section-title">
        About Me
      </h2>

      <div className="about-container">

        <div className="about-image">

          <div className="about-glow"></div>

          <img
            src={profile}
            alt="Saloni"
          />

        </div>

        <div className="about-content">

          <h3>
            I'm Saloni Verma
          </h3>

          <p>
            Frontend Developer with experience building responsive websites and user-focused web applications using React, JavaScript, WordPress and modern UI principles. I am passionate about creating intuitive digital experiences that balance functionality, usability and visual appeal.
          </p>

          <p>
            Along with frontend development, I have a
            strong interest in UI/UX design, responsive
            layouts, visual hierarchy and user-centered
            design. I enjoy transforming ideas into
            engaging web experiences while focusing on
            accessibility, performance and clean code.
          </p>

          <div className="about-cards">

            <div className="about-card">

              <FaLaptopCode />

              <span>
                Frontend Development
              </span>

            </div>

            <div className="about-card">

              <FaPalette />

              <span>
                UI / UX Design
              </span>

            </div>

            <div className="about-card">

              <FaLightbulb />

              <span>
                Creative Problem Solving
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;