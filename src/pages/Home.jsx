import './Home.css'
import profile from '../assets/profile.jpg'
import TypingText from '../components/TypingText'

const Home = () => {
  return (
    <section className="home-hero">
      <div className="home-wrapper">

        {/* IMAGE */}
        <div className="home-image floating">
          <img src={profile} alt="Navadeep" />
        </div>
        

        {/* TEXT */}
        <div className="home-text">
          <div className="hello">Hi There 👋</div>

          <h1>Pentela Navadeep</h1>

          {/* AUTO TYPING */}
          <TypingText
            texts={[
              'Full Stack Developer',
              'Cloud Enthusiast',
              'Computer Science Student',
              'Problem Solver'
            ]}
          />
        </div>

      </div>
    </section>
  )
}

export default Home
