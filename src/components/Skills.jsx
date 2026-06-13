import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaFigma
} from "react-icons/fa";

function Skills() {

  const skills = [

    {
      icon: <FaHtml5 />,
      name: "HTML",
      desc: "Semantic, accessible and SEO-friendly web structures",
      level: 9
    },

    {
      icon: <FaCss3Alt />,
      name: "CSS",
      desc: "Responsive layouts, modern UI styling and mobile-first design",
      level: 9
    },

    {
      icon: <FaJs />,
      name: "JavaScript",
      desc: "Interactive user experiences and dynamic web applications",
      level: 8
    },

    {
      icon: <FaReact />,
      name: "React",
      desc: "Component-based frontend development and SPA architecture",
      level: 8
    },

    {
      icon: <FaGitAlt />,
      name: "Git",
      desc: "Version control, collaboration and project management",
      level: 7
    },

    {
      icon: <FaFigma />,
      name: "UI/UX Design",
      desc: "Responsive design, visual hierarchy, usability principles and user-centered interfaces",
      level: 7
    }

  ];

  return (

    <section
      id="skills"
      className="skills"
    >

      <h2 className="skills-title">
        My Skills
      </h2>

      <div className="skills-grid">

        {skills.map((skill, index) => (

          <div
            key={index}
            className="skill-card"
          >

            <div className="skill-top">

              <div
                className="skill-icon"
              >
                {skill.icon}
              </div>

              <div>

                <h3>
                  {skill.name}
                </h3>

                <p>
                  {skill.desc}
                </p>

              </div>

            </div>

            <div
              className="dots"
            >

              {[...Array(10)].map((_, i) => (

                <span
                  key={i}
                  className={
                    i < skill.level
                      ? "dot active"
                      : "dot"
                  }
                >
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Skills;