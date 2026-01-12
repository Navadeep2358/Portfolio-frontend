import { useEffect, useState } from 'react'
import './TypingText.css'

const words = [
  'Full Stack Developer',
  'CSE Student',
  'Cloud Enthusiast',
  'Programmer'
]

export default function TypingText() {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]
    let timeout

    if (!isDeleting) {
      // Typing
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, charIndex + 1))
        setCharIndex(prev => prev + 1)

        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 800)
        }
      }, 100)
    } else {
      // Deleting
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, charIndex - 1))
        setCharIndex(prev => prev - 1)

        if (charIndex === 1) {
          setIsDeleting(false)
          setWordIndex(prev => (prev + 1) % words.length)
        }
      }, 60)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, wordIndex])

  return <span className="typing">{text}</span>
}
