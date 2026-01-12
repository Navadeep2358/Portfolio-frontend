import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Intro from './components/Intro.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Tech from './pages/Tech.jsx'
import Certifications from './pages/Certifications.jsx'
import Achievements from './pages/Achievements.jsx'
import Contact from './pages/Contact.jsx'

import upsideAudio from './assets/01.mp3'

import './App.css'

function App() {
  /* INTRO STATE */
  const [showIntro, setShowIntro] = useState(true)

  /* YOUR ORIGINAL STATES */
  const [isUpside, setIsUpside] = useState(false)
  const location = useLocation()
  const audioRef = useRef(null)

  const isHome = location.pathname === '/'

  /* LOCK SCROLL DURING INTRO */
  useEffect(() => {
    document.body.style.overflow = showIntro ? 'hidden' : 'auto'
  }, [showIntro])

  /* APPLY UPSIDE MODE CLASS */
  useEffect(() => {
    document.body.classList.toggle('upside', isUpside)
  }, [isUpside])

  /* LOCK SCROLL ONLY ON HOME */
  useEffect(() => {
    if (!showIntro) {
      document.body.style.overflow = isHome ? 'hidden' : 'auto'
    }
  }, [isHome, showIntro])

  /* UPSIDE MODE AUDIO CONTROL */
  useEffect(() => {
    if (!audioRef.current) return

    if (isUpside) {
      audioRef.current.volume = 0.4
      audioRef.current.loop = true
      audioRef.current.play().catch(() => {})
    } else {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
  }, [isUpside])

  /* SHOOTING STARS — NORMAL MODE ONLY */
  useEffect(() => {
    if (isUpside || showIntro) return

    const createStar = () => {
      const star = document.createElement('div')
      star.className = 'shooting-star'
      star.style.top = Math.random() * 100 + 'vh'
      star.style.left = Math.random() * 100 + 'vw'
      document.body.appendChild(star)
      setTimeout(() => star.remove(), 3000)
    }

    const interval = setInterval(createStar, 5000)
    return () => clearInterval(interval)
  }, [isUpside, showIntro])

  /* REAL THUNDER — UPSIDE MODE ONLY */
  useEffect(() => {
    if (!isUpside || showIntro) return

    const createThunder = () => {
      const svgNS = 'http://www.w3.org/2000/svg'
      const svg = document.createElementNS(svgNS, 'svg')
      svg.setAttribute('class', 'thunder-svg')
      svg.setAttribute('width', '300')
      svg.setAttribute('height', window.innerHeight)
      svg.style.left = Math.random() * 100 + 'vw'

      let mainPath = 'M150 0'
      let x = 150
      for (let y = 40; y < window.innerHeight; y += 40) {
        x += Math.random() * 70 - 35
        mainPath += ` L ${x} ${y}`
      }

      const main = document.createElementNS(svgNS, 'path')
      main.setAttribute('d', mainPath)
      main.setAttribute('class', 'thunder-main')
      svg.appendChild(main)

      const branches = Math.floor(Math.random() * 3) + 2
      for (let i = 0; i < branches; i++) {
        let bx = 150 + Math.random() * 100 - 50
        let by = Math.random() * window.innerHeight * 0.6
        let branchPath = `M ${bx} ${by}`

        for (let j = 0; j < 3; j++) {
          bx += Math.random() * 60 - 30
          by += Math.random() * 50 + 20
          branchPath += ` L ${bx} ${by}`
        }

        const branch = document.createElementNS(svgNS, 'path')
        branch.setAttribute('d', branchPath)
        branch.setAttribute('class', 'thunder-branch')
        svg.appendChild(branch)
      }

      document.body.appendChild(svg)
      document.body.classList.add('thunder-flash')
      setTimeout(() => document.body.classList.remove('thunder-flash'), 200)
      setTimeout(() => svg.remove(), 1800)
    }

    const interval = setInterval(createThunder, 5000)
    return () => clearInterval(interval)
  }, [isUpside, showIntro])

  return (
    <>
      {/* INTRO OVERLAY */}
      {showIntro && <Intro onFinish={() => setShowIntro(false)} />}

      {/* MAIN APP */}
      {!showIntro && (
        <>
          {/* STAR BACKGROUND (NORMAL MODE ONLY) */}
          {!isUpside && (
            <div className="star-bg">
              {Array.from({ length: 80 }).map((_, i) => (
                <div
                  key={i}
                  className="star"
                  style={{
                    top: Math.random() * 100 + 'vh',
                    left: Math.random() * 100 + 'vw',
                    animationDelay: Math.random() * 4 + 's',
                    opacity: Math.random()
                  }}
                />
              ))}
            </div>
          )}

          {/* NAVBAR */}
          <Navbar isUpside={isUpside} setIsUpside={setIsUpside} />

          {/* PAGE CONTENT */}
          <div className={`page-content ${isHome ? 'home-layout' : ''}`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/tech" element={<Tech />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/blogs" element={<Achievements />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>

          {/* FOOTER */}
          <Footer />

          {/* UPSIDE MODE AUDIO */}
          <audio ref={audioRef} src={upsideAudio} />
        </>
      )}
    </>
  )
}

export default App
