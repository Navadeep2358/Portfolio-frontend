import { useEffect, useRef, useState } from "react";
import "./Certifications.css";

const CertificationCarousel = ({ title, items }) => {
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
      setIndex((prev) => (prev + 1) % items.length);
    }, 2800);
  };

  const stopAuto = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <>
      <h2 className="cert-title">{title}</h2>

      <div className="cert-carousel">
        <div
          className="cert-track"
          style={{
            transform: `translateX(calc(50% - ${(index + 0.5) * 260}px))`,
          }}
        >
          {items.map((cert, i) => {
            const isActive = i === index;

            return (
              <div
                key={i}
                className={`cert-circle ${isActive ? "active" : ""}`}
                onMouseEnter={stopAuto}
                onMouseLeave={startAuto}
                onClick={() => setIndex(i)}
              >
                <img src={cert.logo} alt={cert.title} />
                <span>{cert.title}</span>

                {isActive && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="cert-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Certificate
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const Certifications = () => {
  return (
    <section className="section certs-page">
      {/* GLOBAL CERTIFICATIONS */}
      <CertificationCarousel
        title="Global Certifications"
        items={[
          { title: "AWS", logo: "/certs/aws.jpg", link: "/certs/aws.pdf" },
          {
            title: "Salesforce",
            logo: "/certs/salesforce.png",
            link: "/certs/salesforce.pdf",
          },
          {
            title: "Cisco",
            logo: "/certs/cisco.png",
            link: "/certs/cisco.pdf",
          },
          {
            title: "Linguaskill",
            logo: "/certs/linguaskill.png",
            link: "/certs/linguaskill.pdf",
          },
          {
            title: "NPTEL – Cloud Computing",
            logo: "/certs/nptel.png",
            link: "/certs/cloud-computing.pdf",
          },
          {
            title: "Smart Interviews",
            logo: "/certs/silogo.png",
            link: "https://smartinterviews.in/certificate/fe20ff6c",
          },
        ]}
      />

      {/* INTERNSHIPS */}
      <CertificationCarousel
        title="Internships"
        items={[
          {
            title: "Azure Internship",
            logo: "/certs/azure.png",
            link: "/certs/azure.pdf",
          },
        ]}
      />

      {/* HACKATHONS */}
      <CertificationCarousel
        title="Hackathons"
        items={[
          {
            title: "DTI Expo – KL University",
            logo: "/certs/klu.jpg",
            link: "/certs/dti-expo.pdf",
          },
        ]}
      />
    </section>
  );
};

export default Certifications;
