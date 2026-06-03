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
            Frontend Developer passionate about building
            beautiful, responsive and user-friendly web
            applications using React, JavaScript and
            modern UI design principles.
          </p>

          <p>
            I enjoy transforming ideas into interactive
            digital experiences while focusing on
            performance, accessibility and clean code.
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