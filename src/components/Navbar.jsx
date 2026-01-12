import { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({ isUpside, setIsUpside }) => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const close = e => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    if (open) document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [open])

  return (
    <>
      <header className="top-navbar">
        <NavLink to="/" className="logo">
          Navadeep’s Portfolio
        </NavLink>

        <div className="nav-actions">
          <button
            className="nav-upside-btn"
            onClick={() => setIsUpside(p => !p)}
          >
            {isUpside ? 'Right Side Up' : 'Upside Down'}
          </button>

          <a href="/resume.pdf" download className="resume-btn">
            Resume
          </a>

          <button className="hamburger" onClick={() => setOpen(p => !p)}>
            ☰
          </button>
        </div>
      </header>

      {open && (
        <div ref={menuRef} className="floating-menu">
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/projects" onClick={() => setOpen(false)}>Projects</NavLink>
          <NavLink to="/tech" onClick={() => setOpen(false)}>Tech</NavLink>
          <NavLink to="/certifications" onClick={() => setOpen(false)}>Certifications</NavLink>
          <NavLink to="/blogs" onClick={() => setOpen(false)}>Blogs & Achievements</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
        </div>
      )}
    </>
  )
}

export default Navbar
