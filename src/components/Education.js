import React, { useState } from 'react';

const Education = () => {
  const [showImperialDetails, setShowImperialDetails] = useState(false);

  return (
    <section id="education" style={sectionStyle}>
      <h2 style={headingStyle}>Education</h2>
      <div style={gridStyle}>
        
        {/* Imperial College London */}
        <div
          style={{
            ...cardStyle,
            cursor: 'pointer',
            border: showImperialDetails
              ? '1px solid rgba(91,192,255,0.6)'
              : '1px solid rgba(255,255,255,0.3)',
            transform: showImperialDetails ? 'scale(1.02)' : 'scale(1)',
            transition: 'all 0.3s ease',
          }}
          onClick={() => setShowImperialDetails(!showImperialDetails)}
        >
          <h2 style={{ marginBottom: '0.3rem' }}>Imperial College London</h2>
          <p style={{ fontSize: '1.05rem', marginBottom: '0.3rem' }}>
            <strong>MEng Computing (AI & Machine Learning)</strong>
          </p>
          <p style={{ fontSize: '0.95rem', opacity: 0.85, marginBottom: '0.8rem' }}>
            2023 – 2027
          </p>
          <ul style={listStyle}>
            <li>Year 1: 87.38% — Dean’s List</li>
            <li>Year 2: 87.96% — Dean’s List, G-Research Award</li>
          </ul>
          <p style={{ fontSize: '0.9rem', marginTop: '1rem', opacity: 0.8 }}>
            {showImperialDetails ? 'Click to hide details ↑' : 'Click to view full details ↓'}
          </p>

          {showImperialDetails && (
            <div style={detailsStyle}>
              <p style={{ marginBottom: '0.5rem' }}><strong>Modules (Year 1):</strong></p>
              <p>Databases, Computer Systems, Computer Architecture, Haskell, Kotlin, Graphs and Algorithms, Linear Algebra, Calculus, Discrete Mathematics</p>
              <p style={{ margin: '1rem 0 0.5rem' }}><strong>Modules (Year 2):</strong></p>
              <p>Networks and Communication, Operating Systems, Software Engineering Design, Algorithm Design and Analysis, Models of Computation, Compilers, Computational Techniques, Probability and Statistics</p>
            </div>
          )}
        </div>

        {/* Greenwood High School */}
        <div style={cardStyle}>
          <h2 style={{ marginBottom: '0.3rem' }}>Greenwood High School</h2>
          <p style={{ fontSize: '1.05rem', marginBottom: '0.3rem' }}>
            <strong>12th Standard</strong>
          </p>
          <p style={{ fontSize: '0.95rem', opacity: 0.85, marginBottom: '0.8rem' }}>
            Completed: 2023
          </p>
          <ul style={listStyle}>
            <li>Score: 97.75%</li>
            <li>Subjects: Mathematics, Physics, Chemistry, Computer Science, English</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const sectionStyle = {
  paddingTop: '0rem',
  paddingBottom: '6rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  marginTop: '-1rem',
  color: 'white',
};

const headingStyle = {
  textAlign: 'center',
  fontSize: '2.2rem',
  marginBottom: '2.5rem',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: '2rem',
  justifyContent: 'center',
  maxWidth: '1000px',
  margin: '0 auto',
};

const cardStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.08)',
  padding: '2rem',
  borderRadius: '16px',
  backdropFilter: 'blur(12px)',
  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)',
  position: 'relative',
};

const listStyle = {
  margin: 0,
  paddingLeft: '1.2rem',
  lineHeight: '1.6',
  fontSize: '0.95rem',
};

const detailsStyle = {
  marginTop: '1rem',
  fontSize: '0.95rem',
  lineHeight: '1.6',
  opacity: 0.95,
};

export default Education;
