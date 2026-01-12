import "./Projects.css";

const Projects = () => {
  return (
    <section className="section projects-page">
      <h2 className="projects-title">Projects</h2>

      {/* PROJECT 1 */}
      <div className="project-row">
        <div className="project-content">
          <h3>Rowdy – E-Commerce Platform</h3>
          <p>
            Rowdy is a full-stack e-commerce platform designed with a modern,
            user-friendly interface. It supports user authentication, product
            browsing, cart and wishlist management, and session-based login.
            The frontend is built using React, while the backend uses Spring Boot
            with MySQL for secure data handling.
          </p>

          <div className="project-links">
            <a
              href="https://github.com/Navadeep2358/fsd-project.git"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </div>

      {/* PROJECT 2 */}
      <div className="project-row">
        <div className="project-content">
          <h3>Cloud-Based Website (AWS)</h3>
          <p>
            This project demonstrates a scalable cloud-based web application
            deployed on AWS. It uses EC2 instances with Load Balancing and
            Auto Scaling to handle traffic efficiently. The setup ensures high
            availability, fault tolerance, and optimized performance under
            varying workloads.
          </p>

          <div className="project-links">
            <a
              href="https://github.com/Navadeep2358/bookmybus.git"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </div>

      {/* PROJECT 3 */}
      <div className="project-row">
        <div className="project-content">
          <h3>Emotion Detection System</h3>
          <p>
            An AI-based system that detects human facial emotions in real time
            using computer vision and deep learning techniques. It processes
            live camera input to classify emotions such as happy, sad, angry,
            and neutral. The project highlights practical applications of CNNs
            in real-world scenarios.
          </p>

          <div className="project-links">
            <a
              href="https://github.com/Navadeep2358/Emotion-Detector.git"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </div>

      {/* PROJECT 4 */}
      <div className="project-row">
        <div className="project-content">
          <h3>Smart Parking System (IoT)</h3>
          <p>
            A smart parking solution that uses IoT sensors to detect vehicle
            availability in parking slots. The system helps reduce congestion
            by providing real-time parking status. It integrates hardware
            sensors with software logic to demonstrate practical IoT
            implementation.
          </p>

          <div className="project-links">
            <a
              href="https://github.com/Navadeep2358/SmartParking.git"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
