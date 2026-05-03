import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({ isUpside, setIsUpside }) => {
  return (
    <header className="top-navbar">
      <NavLink to="/" className="logo">
        Navadeep's Portfolio
      </NavLink>

      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
          About
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>
          Projects
        </NavLink>
        <NavLink to="/tech" className={({ isActive }) => isActive ? 'active' : ''}>
          Tech
        </NavLink>
        <NavLink to="/certifications" className={({ isActive }) => isActive ? 'active' : ''}>
          Certifications
        </NavLink>
        <NavLink to="/blogs" className={({ isActive }) => isActive ? 'active' : ''}>
          Blogs & Achievements
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
          Contact
        </NavLink>

        <a href="/resume.pdf" download className="resume-btn">
          Resume
        </a>

        <button
          className="nav-upside-btn"
          onClick={() => setIsUpside(p => !p)}
        >
          {isUpside ? 'Right Side Up' : 'Upside Down'}
        </button>
      </nav>
    </header>
  )
}

export default Navbar