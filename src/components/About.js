import React from 'react';

const About = () => (
  <section id="about" style={sectionStyle}>
    <div style={cardStyle}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>About Me</h2>
      <p style={{ lineHeight: '1.6', fontSize: '1.05rem' }}>
        Hi! I'm a third year student at <strong>Imperial College London</strong>, currently pursuing a <strong>MEng in Computing (Artificial Intelligence and Machine Learning)</strong>. 
        I'm passionate about turning complex problems into innovative solutions with cutting-edge technology.
      </p>
      <p style={{ lineHeight: '1.6', fontSize: '1.05rem' }}>
        I have worked on projects ranging from <em>operating systems </em> 
        and <em>compilers</em> to <em>AI ethics research</em>. I have
        hands-on experience with tools like Kubernetes, Docker, and cloud deployment workflows. 
        I enjoy tackling complex technical challenges, whether through full-stack development,
        cloud deployment, or algorithm design. 
      </p>
      <p style={{ lineHeight: '1.6', fontSize: '1.05rem' }}>
        Along the way, I've been honored with the <strong>Dean's List</strong> in both years of study 
        and received the <strong>G-Research Award</strong> this year. I've developed impactful projects, 
        including an AI agent for debugging and a community-focused app.
      </p>

      <p style={{ lineHeight: '1.6', fontSize: '1.05rem' }}>
        Outside of coding, I enjoy playing chess, taking on leadership roles in student societies, 
        and exploring new ways to solve problems. I'm always excited to learn, experiment, and push 
        the boundaries of what technology can do.
      </p>
    </div>
  </section>
);

const sectionStyle = {
  padding: '6rem 1rem',
  display: 'flex',
  justifyContent: 'center',
  color: 'white',
};

const cardStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.08)',
  padding: '2.5rem',
  borderRadius: '16px',
  maxWidth: '720px',
  backdropFilter: 'blur(12px)',
  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)',
};

export default About;
