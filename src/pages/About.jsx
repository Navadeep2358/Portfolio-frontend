import './About.css'

import myPic from '../assets/about/pic2.jpg'
import schoolImg from '../assets/about/school.png'
import interImg from '../assets/about/inter.jpg'
import kluImg from '../assets/about/klu.jpg'

const About = () => {
  return (
    <section className="section about-page">

      {/* ABOUT TOP */}
      <div className="about-top">
        <div className="about-text">
          <h2 className="about-title">About Me</h2>

          {/* PERSONAL DETAILS */}
          <ul className="about-details">
            <li><strong>Name:</strong>Pentela Navadeep</li>
            <li><strong>Age:</strong> 20</li>
            <li><strong>Gender:</strong> Male</li>
            <li><strong>Work:</strong> Student </li>
            <li><strong>Email:</strong> 2300030831CSEH1@gmail.com</li>
            <li><strong>Country:</strong> India</li>
          </ul>

          {/* SHORT BIO */}
         <p className="about-desc">
  I am a Computer Science Engineering student at KL University with a strong
  interest in building real-world, scalable applications using modern
  technologies. My journey into software development started with curiosity
  and gradually evolved into a passion for full-stack development, cloud
  computing, and problem-solving.

  <br /> <br />

  I have hands-on experience working on projects that involve frontend
  development using React, backend development with Spring Boot, and database
  management. I enjoy converting ideas into functional products and focusing
  on clean architecture, performance, and user experience.

  <br />
</p>

        </div>

        {/* IMAGE CARD */}
        <div className="about-image-card">
          <img src={myPic} alt="Navadeep Pentela" />
        </div>
      </div>

      {/* EDUCATION */}
      <div className="about-section">
        <h3 className="section-title">My Education</h3>

        <div className="education-grid">
          <div className="edu-card">
            <img src={kluImg} alt="KL University" />
            <h4>KL University</h4>
            <p>B.Tech – Computer Science Engineering</p>
            <span>CGPA: 9.37</span>
          </div>

          <div className="edu-card">
            <img src={interImg} alt="Sri Chaitanya College" />
            <h4>Sri Chaitanya Co-Ed College</h4>
            <p>Intermediate</p>
            <span>CGPA: 9.01</span>
          </div>

          <div className="edu-card">
            <img src={schoolImg} alt="Sri Chaitanya School" />
            <h4>Sri Chaitanya School</h4>
            <p>SSC</p>
            <span>CGPA: 9.96</span>
          </div>
        </div>
      </div>

      {/* SKILLS */}
      <div className="about-section">
        <h3 className="section-title">My Skills</h3>

        <div className="skills-list">
          <Skill label="Competitive Programming" value={83} />
          <Skill label="Full Stack Web Development" value={80} />
          <Skill label="Cloud Computing" value={85} />
          <Skill label="Database Management" value={80} />
        </div>
      </div>

    </section>
  )
}

/* SKILL BAR */
const Skill = ({ label, value }) => (
  <div className="skill-row">
    <div className="skill-top">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="skill-bar">
      <div className="skill-fill" style={{ width: `${value}%` }} />
    </div>
  </div>
)

export default About
