import AchievementSection from "../components/AchievementSection";
import "./Achievements.css";

const Achievements = () => {
  console.log("ACHIEVEMENTS PAGE LOADED");

  return (
    <section className="section achievements-page">
      <AchievementSection
        title="DTI Project Expo – KL University"
        description="Developed a Smart Parking System selected among the Top 10 projects and successfully filed a patent. This project enhanced my system design, innovation, and real-world problem-solving skills."
        items={[
          "/blogs/dti/dti1.jpeg",
          "/blogs/dti/dti2.jpeg",
          "/blogs/dti/dtiexpovid.mp4",
        ]}
      />

      <AchievementSection
        title="VISA 24-Hour AI Hackathon – IIT Madras"
        description="Worked on real-time problem statements provided by VISA, gaining exposure to industry-level challenges, AI-driven solutions, and high-pressure teamwork."
        items={[
          "/blogs/iit/iit1.jpeg",
          "/blogs/iit/iit2.jpeg",
          "/blogs/iit/iit3.jpeg",
          "/blogs/iit/iit4.jpeg",
        ]}
      />

      <AchievementSection
        title="IoT Project Expo – Drone-Based Solution"
        description="Built a drone-based IoT solution that won 1st prize among multiple colleges. Strengthened teamwork, automation concepts, and real-time system integration."
        items={[
          "/blogs/iot/iot1.jpeg",
          "/blogs/iot/iot2.jpeg",
          "/blogs/iot/iotvid1.mp4",
        ]}
      />

      <AchievementSection
        title="Social Immersive Learning Program"
        description="Collected real-world data through community interaction to understand social challenges and explore future technology-driven solutions."
        items={[
          "/blogs/sil/sil1.jpeg",
          "/blogs/sil/sil2.jpeg",
          "/blogs/sil/sil3.jpeg",
          "/blogs/sil/sil4.jpeg",
          "/blogs/sil/sil5.jpeg",
          "/blogs/sil/sil6.jpeg",
          "/blogs/sil/sil7.jpeg",
        ]}
      />

      <AchievementSection
        title="DTW Project Expo"
        description="Showcased a project selected as Top 3 in class, improving technical communication, presentation skills, and confidence."
        items={[
          "/blogs/dtw/dtw2.jpeg",
          "/blogs/dtw/dtw3.jpeg",
          "/blogs/dtw/dtw4.jpeg",
          "/blogs/dtw/dtw1vid.mp4",
        ]}
      />
    </section>
  );
};

export default Achievements;
