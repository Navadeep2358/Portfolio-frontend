import './Footer.css'

const Footer = () => {
  return (
    <footer className="fixed-footer">
      <a
        href="https://www.linkedin.com/in/pentela-navadeep-5ba5b6322"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <i className="fab fa-linkedin-in"></i>
      </a>

      <a
        href="https://github.com/Navadeep2358"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <i className="fab fa-github"></i>
      </a>

      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        <i className="fab fa-instagram"></i>
      </a>
    </footer>
  )
}

export default Footer
