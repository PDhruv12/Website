import React, { useState } from 'react';

const WorkExperience = () => {
  const [openIndices, setOpenIndices] = useState([]);

  const experiences = [
    {
      company: 'Arctic Lake Technology',
      role: 'Electronic Trading Developer Intern',
      duration: '30 June 2025 - 25 September 2025',
      highlights: [
        'Developed an AI agent for initial alert diagnosis with multiple tools.',
        'Worked with Kubernetes, Docker, Helm, and cloud-based deployments.',
        'Collaborated in an Agile team using Kanban and sprint planning.'
      ],
      details: [
        "Gained hands-on experience in managing and scaling containerized applications using <b>Kubernetes</b>, deploying and managing microservices in existing clusters using <b>Helm</b> for streamlined application delivery.",
        "Built and deployed web services with <b>FastAPI</b> and <b>Docker</b>, ensuring environment consistency and optimizing performance with asynchronous handling and efficient API endpoints.",
        "Worked with <b>Alertmanager</b> and <b>Elasticsearch</b> for monitoring, log aggregation, and alert routing, enabling quick diagnostics of alerts and reducing troubleshooting time.",
        "Developed a <b>Kibana</b> dashboard for visualizing and analyzing <b>Elasticsearch</b> data, helping the team monitor system performance, detect anomalies, and respond to issues more effectively.",
        "Learned how to chunk and vectorize code using <b>LangChain</b> and a <b>text-embedding model</b>, optimizing the processing and analysis of large codebases to enhance the AI agent's performance in diagnosing alerts.",
        "Overcame challenges in optimizing the AI agent's token usage, response times, and improving the accuracy of alert diagnosis, fine-tuning the system for better performance.",
        "Developed a frontend in Python using <b>Bulma</b>, improving user interface interactions for internal tools."
      ]
    },
    {
      company: 'The Takshilah Global School',
      role: 'Internship',
      duration: '15 July 2024 - 10 September 2024',
      highlights: [
        'Organized Model UN sessions for students.',
        'Conducted a workshop on cybersecurity and cyber safety.',
        'Observed computer science classes and school administration workflows.'
      ],
      details: [
        'Led the planning and execution of Model UN sessions, overseeing logistics, coordinating teams, and ensuring smooth event flow.',
        'Conducted a comprehensive workshop on cybersecurity and cyber safety, educating students on the importance of online privacy and security practices.',
        'Observed and gained insights into the school administration workflows, analyzing the use of technology in managing daily operations and improving efficiency.'
      ]
    }
  ];

 const toggleDetails = (index) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter(i => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section id="work-experience" style={sectionStyle}>
      <h2 style={headingStyle}>Work Experience</h2>
      <div style={gridStyle}>
        {experiences.map((exp, index) => (
          <div
            key={index}
            style={{
              ...cardStyle,
              cursor: 'pointer',
              border: openIndices.includes(index)
                ? '1px solid rgba(91,192,255,0.6)'
                : '1px solid rgba(255,255,255,0.3)',
              transform: openIndices.includes(index) ? 'scale(1.02)' : 'scale(1)',
              transition: 'all 0.3s ease',
            }}
            onClick={() => toggleDetails(index)}
          >
            <h2 style={{ marginBottom: '0.3rem' }}>{exp.company}</h2>
            <p style={{ fontSize: '1.05rem', marginBottom: '0.3rem' }}>
              <strong>{exp.role}</strong>
            </p>
            <p style={{ fontSize: '0.95rem', opacity: 0.85, marginBottom: '0.8rem' }}>
              {exp.duration}
            </p>
            <ul style={listStyle}>
              {exp.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <p style={{ fontSize: '0.9rem', marginTop: '1rem', opacity: 0.8 }}>
              {openIndices.includes(index) ? 'Click to hide details ↑' : 'Click to view full details ↓'}
            </p>

            {openIndices.includes(index) && (
              <div style={detailsStyle}>
                <p style={{ marginBottom: '0.5rem' }}><strong>Details:</strong></p>
                <ul style={listStyle}>
                  {exp.details.map((item, i) => (
                    <li
                      key={i}
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
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

export default WorkExperience;
