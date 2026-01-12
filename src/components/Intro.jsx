import { useEffect, useRef } from 'react'
import introVideo from '../assets/intro.mp4'
import './Intro.css'

const Intro = ({ onFinish }) => {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Autoplay-safe playback
    video.muted = true
    video.play().catch(() => {})

    // When video ends → show website
    video.onended = () => {
      onFinish()
    }
  }, [onFinish])

  return (
    <div className="intro-root">
      <video
        ref={videoRef}
        className="intro-video"
        src={introVideo}
        autoPlay
        muted
        playsInline
        preload="auto"
      />
    </div>
  )
}

export default Intro
