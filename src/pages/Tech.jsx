import { useEffect, useRef, useState } from "react";
import "./Tech.css";

/* TECH LOGOS */
import reactLogo from "../assets/tech/react.webp";
import javaLogo from "../assets/tech/java.jpg";
import springLogo from "../assets/tech/spring.jpg";
import mysqlLogo from "../assets/tech/mysql.jpg";
import jsLogo from "../assets/tech/js.webp";
import awsLogo from "../assets/tech/aws.webp";
import gcpLogo from "../assets/tech/gcp.webp";

/* TECH STACK */
const techs = [
  { name: "React.js", logo: reactLogo },
  { name: "Java", logo: javaLogo },
  { name: "Spring Boot", logo: springLogo },
  { name: "MySQL", logo: mysqlLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "AWS / Cloud", logo: awsLogo },
  { name: "Google Cloud (GCP)", logo: gcpLogo },
];

/* CODING PROFILES */
const profiles = [
  {
    name: "CodeChef",
    link: "https://www.codechef.com/users/klu_2300030831",
  },
  {
    name: "LeetCode",
    link: "https://leetcode.com/u/KLU2300030831/",
  },
  {
    name: "HackerRank",
    link: "https://www.hackerrank.com/profile/KLU2300030831",
  },
  {
    name: "Codeforces",
    link: "https://codeforces.com/profile/KLU2300030831",
  },
];

const Tech = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAuto();
    return stopAuto;
    // eslint-disable-next-line
  }, []);

  const startAuto = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % techs.length);
    }, 2600);
  };

  const stopAuto = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <section className="section tech-page">
      {/* TECH STACK */}
      <h2 className="tech-title">Tech Stack</h2>

      <div className="tech-carousel">
        <div
          className="tech-track"
          style={{
            transform: `translateX(calc(50% - ${(index + 0.5) * 220}px))`,
          }}
        >
          {techs.map((tech, i) => (
            <div
              key={i}
              className={`tech-card ${i === index ? "active" : ""}`}
              onMouseEnter={stopAuto}
              onMouseLeave={startAuto}
              onClick={() => setIndex(i)}
            >
              <img src={tech.logo} alt={tech.name} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CODING PROFILES */}
      <h2 className="tech-title scores-title">Coding Profiles</h2>

      <div className="scores-grid">
        {profiles.map((profile, i) => (
          <a
            key={i}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="score-card profile-card"
          >
            <h3>{profile.name}</h3>
            <p>Tap to visit profile →</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Tech;
