import { useEffect, useRef, useState } from 'react'
import './Certifications.css'

/* LOGOS */
import awsLogo from '../assets/certs/aws.jpg'
import salesforceLogo from '../assets/certs/salesforce.png'
import ciscoLogo from '../assets/certs/cisco.png'
import linguaskillLogo from '../assets/certs/linguaskill.png'
import azureLogo from '../assets/certs/azure.png'
import nptelLogo from '../assets/certs/nptel.png'
import silogo from '../assets/certs/silogo.png'
import klLogo from '../assets/certs/klu.jpg'

/* FILES / LINKS */
import awsPdf from '../assets/certs/aws.pdf'
import salesforcePdf from '../assets/certs/salesforce.pdf'
import ciscoPdf from '../assets/certs/cisco.pdf'
import linguaskillPdf from '../assets/certs/linguaskill.pdf'
import azurePdf from '../assets/certs/azure.pdf'
import nptelPdf from '../assets/certs/cloud-computing.pdf'
import dtiPdf from '../assets/certs/dti-expo.pdf'

const CertificationCarousel = ({ title, items }) => {
  const [index, setIndex] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    startAuto()
    return stopAuto
    // eslint-disable-next-line
  }, [])

  const startAuto = () => {
    if (intervalRef.current) return
    intervalRef.current = setInterval(() => {
      setIndex(prev => (prev + 1) % items.length)
    }, 2800)
  }

  const stopAuto = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }

  return (
    <>
      <h2 className="cert-title">{title}</h2>

      <div className="cert-carousel">
        <div
          className="cert-track"
          style={{
            transform: `translateX(calc(50% - ${(index + 0.5) * 260}px))`
          }}
        >
          {items.map((cert, i) => {
            const isActive = i === index

            return (
              <div
                key={i}
                className={`cert-circle ${isActive ? 'active' : ''}`}
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
                    onClick={e => e.stopPropagation()}
                  >
                    View Certificate
                  </a>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

const Certifications = () => {
  return (
    <section className="section certs-page">

      {/* GLOBAL CERTIFICATIONS */}
      <CertificationCarousel
        title="Global Certifications"
        items={[
          { title: 'AWS', logo: awsLogo, link: awsPdf },
          { title: 'Salesforce', logo: salesforceLogo, link: salesforcePdf },
          { title: 'Cisco', logo: ciscoLogo, link: ciscoPdf },
          { title: 'Linguaskill', logo: linguaskillLogo, link: linguaskillPdf },
          { title: 'NPTEL – Cloud Computing', logo: nptelLogo, link: nptelPdf },
          {
            title: 'Smart Interviews',
            logo: silogo,
            link: 'https://smartinterviews.in/certificate/fe20ff6c'
          }
        ]}
      />

      {/* INTERNSHIPS */}
      <CertificationCarousel
        title="Internships"
        items={[
          { title: 'Azure Internship', logo: azureLogo, link: azurePdf }
        ]}
      />

      {/* HACKATHONS */}
      <CertificationCarousel
        title="Hackathons"
        items={[
          { title: 'DTI Expo – KL University', logo: klLogo, link: dtiPdf }
        ]}
      />

    </section>
  )
}

export default Certifications
