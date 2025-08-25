import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const Hero = () => (
  <section
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center',
      color: 'white',
      position: 'relative',
      padding: '0 1rem',
    }}
  >
    <StaticImage
      src="../images/photo.jpg"
      alt="Your Name"
      style={{
        borderRadius: '50%',
        width: '160px',
        height: '160px',
        objectFit: 'cover',
        border: '4px solid rgba(255, 255, 255, 0.8)',
        marginBottom: '1.5rem',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
      }}
    />
    <h1 style={{ fontSize: '2.8rem', fontWeight: '700', marginBottom: '0.5rem' }}>
      Hi, I'm <span style={{ color: '#5bc0ff' }}>Dhruv Padam Kumar</span>
    </h1>
    <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '1.5rem', maxWidth: '650px' }}>
      I am a student at <strong>Imperial College London</strong>.
      I'm passionate about building intelligent systems, full-stack applications, and solving complex technical problems.
    </p>
    <button
    // In your Hero component button onClick:
    onClick={() => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        console.log("About section found");
        aboutSection.scrollIntoView({ 
          behavior: "smooth",
          block: "start" 
        });
      } else {
        console.log("About section not found");
      }
    }}
    style={{
      padding: '0.75rem 1.5rem',
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      borderRadius: '999px',
      backdropFilter: 'blur(5px)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      color: 'white',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      zIndex: 1001,
      pointerEvents: 'auto',
      marginTop: '1rem',
    }}
    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)')}
    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)')}
  >
    Learn More ↓
  </button>
  </section>
);

export default Hero;
