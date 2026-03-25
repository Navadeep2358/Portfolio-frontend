import "./Projects.css";

const Projects = () => {
  return (
    <section className="section projects-page">
      <h2 className="projects-title">Projects</h2>

      <div className="project-row">
  <div className="project-content">
    <h3>Pranamithra – Doctor Appointment Booking System (AWS)</h3>

    <p>
      Pranamithra is a cloud-based doctor appointment booking system designed
      to provide seamless healthcare access. The application is deployed on AWS
      using EC2 with Load Balancing and Auto Scaling to ensure high availability,
      scalability, and fault tolerance. It also integrates an intelligent chatbot
      powered by Amazon Lex, enabling users to interact, book appointments, and
      receive assistance through conversational AI.
    </p>

    <div className="project-links">
       <a href="https://pranamithra.netlify.app/" target="_blank" rel="noopener noreferrer">
        🌐 Live Demo
      </a> 

      <a
        href="https://github.com/Navadeep2358/Pranamithra---frontend.git"
        target="_blank"
        rel="noopener noreferrer"
      >
        🚀 View on GitHub
      </a>
    </div>
  </div>
</div>

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
              🚀 View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* PROJECT 2 */}
     <div className="project-row">
  <div className="project-content">
    <h3>BusBay – Bus Ticket Booking System (AWS)</h3>

    <p>
      BusBay is a cloud-based bus ticket booking system developed using modern
      web technologies and deployed on AWS. The application is built using a
      vibe coding approach, focusing on clean design and smooth user experience.
      It utilizes AWS services such as EC2, Load Balancer, and Auto Scaling to
      ensure high availability, scalability, and reliable performance under
      varying user traffic.
    </p>

    <div className="project-links">
      <a
        href="https://busbay.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        🌐 Live Demo
      </a>

      <a
        href="https://github.com/Navadeep2358/bookmybus.git"
        target="_blank"
        rel="noopener noreferrer"
      >
        🚀 View on GitHub
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
              🚀 View on GitHub
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
              🚀 View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
