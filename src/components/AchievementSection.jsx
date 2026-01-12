import { useEffect, useRef, useState } from 'react'
import './AchievementSection.css'

const AchievementSection = ({ title, description, items }) => {
  const [index, setIndex] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    startAuto()
    return stopAuto
    // eslint-disable-next-line
  }, [])

  const startAuto = () => {
    if (intervalRef.current) return
    intervalRef.current = setInterval(() => {
      setIndex(prev => (prev + 1) % items.length)
    }, 2600)
  }

  const stopAuto = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }

  return (
    <div className="achievement-card">

      {/* TOP TEXT */}
      <h3 className="achievement-title">{title}</h3>
      <p className="achievement-desc">{description}</p>

      {/* CERT-STYLE CAROUSEL */}
      <div
        className="cert-carousel"
        onMouseEnter={stopAuto}
        onMouseLeave={startAuto}
      >
        <div
          className="cert-track"
          style={{
            transform: `translateX(calc(50% - ${(index + 0.5) * 260}px))`
          }}
        >
          {items.map((item, i) => {
            const isActive = i === index
            const isVideo = item.endsWith('.mp4')

            return (
              <div
  key={i}
  className={`cert-rect ${isActive ? 'active' : ''}`}
  onClick={() => setIndex(i)}
>

                {isVideo ? (
                  <video
                    src={item}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img src={item} alt={title} />
                )}
              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default AchievementSection
