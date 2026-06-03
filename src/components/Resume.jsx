import "./Resume.css";
import resume from "../assets/Resume.pdf";

function Resume() {
  return (
    <section id="resume" className="resume">

      <div className="resume-card">

        <h2>Resume</h2>

        <p>
          Download my latest resume to explore my skills,
          projects, technical expertise and experience.
        </p>

        <a
          href={resume}
          download
          className="resume-btn"
        >
          Download Resume
        </a>

      </div>

    </section>
  );
}

export default Resume;