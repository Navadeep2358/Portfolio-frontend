import AchievementSection from '../components/AchievementSection'
import './Achievements.css'

/* DTI */
import dti1 from '../assets/blogs/dti/dti1.jpeg'
import dti2 from '../assets/blogs/dti/dti2.jpeg'
import dtiVid from '../assets/blogs/dti/dtiexpovid.mp4'

/* IIT */
import iit1 from '../assets/blogs/iit/iit1.jpeg'
import iit2 from '../assets/blogs/iit/iit2.jpeg'
import iit3 from '../assets/blogs/iit/iit3.jpeg'
import iit4 from '../assets/blogs/iit/iit4.jpeg'

/* IOT */
import iot1 from '../assets/blogs/iot/iot1.jpeg'
import iot2 from '../assets/blogs/iot/iot2.jpeg'
import iotVid from '../assets/blogs/iot/iotvid1.mp4'

/* SIL */
import sil1 from '../assets/blogs/sil/sil1.jpeg'
import sil2 from '../assets/blogs/sil/sil2.jpeg'
import sil3 from '../assets/blogs/sil/sil3.jpeg'
import sil4 from '../assets/blogs/sil/sil4.jpeg'
import sil5 from '../assets/blogs/sil/sil5.jpeg'
import sil6 from '../assets/blogs/sil/sil6.jpeg'
import sil7 from '../assets/blogs/sil/sil7.jpeg'

/* DTW */
import dtw2 from '../assets/blogs/dtw/dtw2.jpeg'
import dtw3 from '../assets/blogs/dtw/dtw3.jpeg'
import dtw4 from '../assets/blogs/dtw/dtw4.jpeg'
import dtwVid from '../assets/blogs/dtw/dtw1vid.mp4'

const Achievements = () => {
   console.log('ACHIEVEMENTS PAGE LOADED')
  return (
    <section className="section achievements-page">

      <AchievementSection
        title="DTI Project Expo – KL University"
        description="Developed a Smart Parking System selected among the Top 10 projects and successfully filed a patent. This project enhanced my system design, innovation, and real-world problem-solving skills."
        items={[dti1, dti2, dtiVid]}
      />

      <AchievementSection
        title="VISA 24-Hour AI Hackathon – IIT Madras"
        description="Worked on real-time problem statements provided by VISA, gaining exposure to industry-level challenges, AI-driven solutions, and high-pressure teamwork."
        items={[iit1, iit2, iit3, iit4]}
      />

      <AchievementSection
        title="IoT Project Expo – Drone-Based Solution"
        description="Built a drone-based IoT solution that won 1st prize among multiple colleges. Strengthened teamwork, automation concepts, and real-time system integration."
        items={[iot1, iot2, iotVid]}
      />

      <AchievementSection
        title="Social Immersive Learning Program"
        description="Collected real-world data through community interaction to understand social challenges and explore future technology-driven solutions."
        items={[sil1, sil2, sil3, sil4, sil5, sil6, sil7]}
      />

      <AchievementSection
        title="DTW Project Expo"
        description="Showcased a project selected as Top 3 in class, improving technical communication, presentation skills, and confidence."
        items={[dtw2, dtw3, dtw4, dtwVid]}
      />

    </section>
  )
}

export default Achievements
