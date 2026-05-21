import resume from "../assets/Resume.pdf";

function Resume() {
  return (
    <section id="resume">
      <h2>Resume</h2>

      <a
        href={resume}
        download
        className="resume-btn"
      >
        Download Resume
      </a>

    </section>
  );
}

export default Resume;