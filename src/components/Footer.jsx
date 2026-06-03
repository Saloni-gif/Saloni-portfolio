import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h2>Saloni Verma Portfolio</h2>

        <p>
          Frontend Developer passionate about creating
          responsive and user-friendly web experiences.
        </p>

        <div className="footer-links">

          <a
            href="https://github.com/Saloni-gif"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/saloni-verma-973835296"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:vermasaloni0786@gmail.com">
            Email
          </a>

        </div>

        <p className="copyright">
          © 2026 Saloni Verma. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;