import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Skillwise.ai - Assessment Platform',
      description: 'Multilingual backend services for 100K+ simultaneous users. Optimized database queries and managed cloud infrastructure (GCP). Implemented CRUD operations, file/video uploads, and AI-driven question generation.',
      tech: ['Node.js', 'PostgreSQL', 'GCP', 'AI Integration'],
      company: 'NG - Next Tech Pvt Ltd',
      status: 'Production',
      githubLink: 'https://github.com/prajwal-nayak'
    },
    {
      title: 'KnowledgeHub Chatbot',
      description: 'Developed a chatbot that summarizes documents in various formats (Excel, PDF, .doc), generating concise summaries, graphs, and table analysis. Designed modularized pipelines for reusable features.',
      tech: ['Python', 'NLP', 'Document Processing', 'API Development'],
      company: 'NG - Next Tech Pvt Ltd',
      status: 'Production',
      githubLink: 'https://github.com/prajwal-nayak'
    },
    {
      title: 'Learning Management System (LMS)',
      description: 'Built a comprehensive LMS with user authentication, role-based access (admin, teacher, student, parent), live classes, tests, and activities. Developed RESTful APIs for user management and progress tracking.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'Authentication'],
      company: 'NG - Next Tech Pvt Ltd',
      status: 'Production',
      githubLink: 'https://github.com/prajwal-nayak'
    },
    {
      title: 'SelectRight.ai - CV Parsing Platform',
      description: 'Engineered backend solutions for AI-driven hiring platform. Optimized API performance and automated CV parsing with assessment link automation using distributed systems.',
      tech: ['Node.js', 'AI/ML Integration', 'Database Optimization', 'System Design'],
      company: 'NG - Next Tech Pvt Ltd',
      status: 'Production',
      githubLink: 'https://github.com/prajwal-nayak'
    }
  ];

  const personalProjects = [
    {
      title: 'Microservices Architecture',
      description: 'Built scalable microservices architecture with Docker containerization, API gateway, and service discovery. Implemented circuit breaker patterns and distributed logging.',
      tech: ['Node.js', 'Docker', 'Microservices', 'API Gateway'],
      githubLink: 'https://github.com/prajwal-nayak',
      liveLink: '#'
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Developed real-time analytics backend with WebSocket connections, Redis caching, and PostgreSQL optimization for handling high-frequency data updates.',
      tech: ['Python', 'Redis', 'PostgreSQL', 'WebSocket'],
      githubLink: 'https://github.com/prajwal-nayak',
      liveLink: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const ProjectCard = ({ project, isPersonal = false }) => (
    <motion.div
      className="project-card"
      variants={itemVariants}
      whileHover={{ scale: 1.02, y: -5 }}
      style={{
        background: 'var(--glass-bg)',
        border: '1px solid var(--glass-border)',
        borderRadius: 'var(--border-radius)',
        padding: '2rem',
        backdropFilter: 'blur(10px)',
        marginBottom: '1.5rem'
      }}
    >
      <div className="project-header" style={{ marginBottom: '1rem' }}>
        <h3 style={{ 
          color: 'var(--primary-color)', 
          fontSize: '1.5rem',
          marginBottom: '0.5rem',
          fontWeight: '600'
        }}>
          {project.title}
        </h3>
        
        {project.company && (
          <div style={{ 
            color: 'var(--text-muted)', 
            fontSize: '0.9rem',
            marginBottom: '0.25rem'
          }}>
            {project.company}
          </div>
        )}
        
        {project.status && (
          <span style={{
            background: project.status === 'Production' 
              ? 'rgba(0, 255, 0, 0.1)' 
              : 'rgba(255, 165, 0, 0.1)',
            color: project.status === 'Production' 
              ? 'var(--accent-color)' 
              : '#FFA500',
            padding: '0.25rem 0.75rem',
            borderRadius: '1rem',
            fontSize: '0.8rem',
            fontWeight: '500'
          }}>
            {project.status}
          </span>
        )}
      </div>

      <p style={{ 
        color: 'var(--text-secondary)', 
        lineHeight: '1.6',
        marginBottom: '1.5rem'
      }}>
        {project.description}
      </p>

      <div className="project-tech" style={{ marginBottom: '1.5rem' }}>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '0.5rem'
        }}>
          {project.tech.map((tech, index) => (
            <span
              key={index}
              style={{
                background: 'var(--bg-tertiary)',
                color: 'var(--text-secondary)',
                padding: '0.25rem 0.75rem',
                borderRadius: '1rem',
                fontSize: '0.8rem',
                border: '1px solid var(--border-color)'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="project-links" style={{ 
        display: 'flex', 
        gap: '1rem',
        alignItems: 'center'
      }}>
        {project.githubLink && (
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.25rem',
              transition: 'var(--transition)'
            }}
            whileHover={{ 
              color: 'var(--primary-color)', 
              scale: 1.1 
            }}
          >
            <i className='bx bxl-github'></i>
          </motion.a>
        )}
        
        {project.liveLink && project.liveLink !== '#' && (
          <motion.a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.25rem',
              transition: 'var(--transition)'
            }}
            whileHover={{ 
              color: 'var(--primary-color)', 
              scale: 1.1 
            }}
          >
            <i className='bx bx-link-external'></i>
          </motion.a>
        )}
      </div>
    </motion.div>
  );

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Professional Projects
        </motion.h2>

        {/* Professional Projects */}
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h3 style={{ 
              color: 'var(--text-primary)', 
              fontSize: '1.75rem',
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              Backend Development at NG - Next Tech
            </h3>
          </motion.div>

          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>

        {/* Personal Projects */}
        <motion.div
          className="personal-projects"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ marginTop: '4rem' }}
        >
          <motion.div variants={itemVariants}>
            <h3 style={{ 
              color: 'var(--text-primary)', 
              fontSize: '1.75rem',
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              Personal Projects
            </h3>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '2rem'
          }}>
            {personalProjects.map((project, index) => (
              <ProjectCard key={index} project={project} isPersonal={true} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
