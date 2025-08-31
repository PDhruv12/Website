import React, { useState } from 'react';

const Projects = () => {
  const [openIndices, setOpenIndices] = useState([]);

  const projects = [
    {
        name: 'Knit (Designing for Real People)',
        techStack: 'React Native, Django, PostgreSQL',
        duration: 'Human-Centered Design Project',
        highlights: [
            'Designed and developed Knit, a mobile app to strengthen real-world community connections.',
            'Emphasized user-centered design through continuous user feedback.',
            'Focused on inclusivity, intuitive UX, and meaningful engagement.'
        ],
        details: [
            "Built <b>Knit</b> using <b>React Native</b> (frontend) and <b>Django</b> with <b>PostgreSQL</b> (backend) to ensure cross-platform compatibility and reliable data handling.",
            "Applied <b>human-centered design</b> by conducting user interviews, creating personas, and testing paper prototypes.",
            "Refined the interface through iterative usability testing and real-time feedback.",
            "Prioritized accessibility and ease of use for diverse user groups.",
            "Aligned all design decisions with insights from actual community members."
        ]
    },
    {
      name: 'Urban Eyes',
      techStack: 'Django, Airtable, REST API',
      duration: 'Hacktivism Hackathon',
      highlights: [
        'Developed a comprehensive community issue management and reporting app.',
        'Built backend using Django and Airtable.',
        'Designed REST APIs for frontend interaction.'
      ],
      details: [
        "Successfully developed a functional app under strict deadlines, demonstrating <b>adaptability</b>, <b>time management</b>, and <b>teamwork</b>.",
        "Gained experience in <b>REST API design</b> and <b>backend management</b> using Django.",
        "Implemented integration with Airtable for dynamic data storage and retrieval.",
        "Ensured scalability and security for real-time reporting features."
      ]
    },
    {
        name: 'PintOS',
        techStack: 'C',
        duration: 'University Project',
        highlights: [
            'Extended an educational operating system to support advanced OS features.',
            'Implemented priority scheduling with priority donation and a multilevel feedback queue (MLFQ) scheduler.',
            'Added support for user-level system calls and virtual memory management, including paging and memory-mapped files.'
        ],
        details: [
            'Led a team to design and extend the <b>PintOS</b> kernel as part of a systems programming course.',
            'Implemented <b>priority-based scheduling</b> with <b>priority donation</b> to address priority inversion.',
            'Developed a <b>multilevel feedback queues (MLFQs) scheduler</b> to improve CPU scheduling for interactive workloads.',
            'Added <b>system calls</b> for user program execution, argument passing, and safe kernel-user interaction.',
            'Designed and implemented <b>virtual memory</b> features including supplemental page tables, frame allocation, page eviction, and <b>memory-mapped files</b>.',
            'Gained in-depth experience with threads, processes, synchronization primitives, and low-level memory management in C.'
        ]
    },
    {
        name: 'WACC Compiler',
        techStack: 'Scala',
        duration: 'Individual Project',
        highlights: [
            'Built a full-featured compiler for a statically typed language with cross-compilation to AArch64 and x86.',
            'Implemented optimizations such as constant folding, propagation, and peephole optimization.',
            'Extended functionality with an interpreter, interactive REPL, and support for function overloading.'
        ],
        details: [
            "Developed a <b>compiler for the WACC language</b> in <b>Scala</b>, supporting code generation for <b>AArch64</b> and <b>x86</b> architectures.",
            "Used the <b>Parsley</b> parser combinator library to build a modular and maintainable parser.",
            "Implemented an <b>interpreter</b> and <b>interactive REPL</b> for easier testing and debugging.",
            "Optimized performance through <b>constant propagation</b>, <b>constant folding</b>, <b>peephole optimizations</b>, and <b>data flow analysis</b>.",
            "Enabled <b>function overloading</b> and improved <b>error handling</b> for better language usability and debugging."
        ]
    },
    {
        name: 'ARMv8 Emulator & Assembler',
        techStack: 'C',
        duration: 'Group Project',
        highlights: [
            'Designed and implemented an emulator and assembler for a subset of the ARMv8-AArch64 instruction set.',
            'Implemented instruction decoding, execution, and binary translation modules.',
            'Extended the project with a custom JSON visualizer.'
        ],
        details: [
           "Built an <b>ARMv8 emulator</b> in <b>C</b> capable of parsing and executing a simplified subset of <b>AArch64</b> instructions by managing registers and memory.",
            "Created a corresponding <b>assembler</b> to convert assembly source files into machine code compatible with the emulator.",
            "Developed a JSON visualiser using the cJSON library to convert JSON files into an indented table for easy visualization.",
            "Worked collaboratively in a team, with structured project planning and task delegation to meet deadlines."
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
    <section id="projects" style={sectionStyle}>
      <h2 style={headingStyle}>Projects</h2>
      <div style={gridStyle}>
        {projects.map((project, index) => (
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
            <h2 style={{ marginBottom: '0.3rem' }}>{project.name}</h2>
            <p style={{ fontSize: '1.05rem', marginBottom: '0.3rem' }}>
              <strong>{project.techStack}</strong>
            </p>
            <p style={{ fontSize: '0.95rem', opacity: 0.85, marginBottom: '0.8rem' }}>
              {project.duration}
            </p>
            <ul style={listStyle}>
              {project.highlights.map((item, i) => (
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
                  {project.details.map((item, i) => (
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

export default Projects;
