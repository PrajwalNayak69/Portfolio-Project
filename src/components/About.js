import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const highlights = [
    'Scalable architecture design & optimization',
    'Database performance & query optimization',
    'Cloud infrastructure management (GCP)',
    'AI-driven solutions & API development'
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}
        >
          <motion.div variants={itemVariants}>
            <h3 style={{ 
              fontSize: '2rem',
              color: 'var(--primary-color)', 
              marginBottom: '1.5rem',
              fontWeight: '600'
            }}>
              Backend-Focused Full Stack Developer
            </h3>
            
            <p style={{ 
              fontSize: '1.2rem',
              color: 'var(--text-secondary)', 
              lineHeight: '1.7',
              marginBottom: '2rem',
              maxWidth: '700px',
              margin: '0 auto 2rem auto'
            }}>
              Passionate about building robust, scalable backend systems with{' '}
              <span className="text-primary">3+ years of experience</span> at{' '}
              <span className="text-primary">NG - Next Tech Pvt Ltd</span>. 
              Specializing in high-performance applications that serve 100K+ users.
            </p>
          </motion.div>

          {/* Key Highlights */}
          <motion.div variants={itemVariants} style={{ marginBottom: '3rem' }}>
            <h4 style={{ 
              color: 'var(--text-primary)', 
              marginBottom: '1.5rem',
              fontSize: '1.3rem',
              fontWeight: '600'
            }}>
              Core Expertise
            </h4>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1rem',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  style={{
                    padding: '1rem 1.5rem',
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '12px',
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    textAlign: 'left'
                  }}
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span style={{ color: 'var(--primary-color)', marginRight: '0.5rem' }}>
                    •
                  </span>
                  {highlight}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Current Role */}
          <motion.div 
            variants={itemVariants} 
            style={{
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              borderRadius: '16px',
              padding: '2rem',
              marginBottom: '3rem',
              maxWidth: '600px',
              margin: '0 auto 3rem auto'
            }}
          >
            <h4 style={{ 
              color: 'var(--primary-color)', 
              fontSize: '1.2rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              Current Position
            </h4>
            <div style={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: '500', marginBottom: '0.5rem' }}>
              Software Development Engineer - 1
            </div>
            <div style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
              NG - Next Tech Pvt Ltd • Bangalore
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Jul 2023 - Present
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={itemVariants} style={{ marginBottom: '3rem' }}>
            <h4 style={{ 
              color: 'var(--text-primary)', 
              marginBottom: '1.5rem',
              fontSize: '1.3rem',
              fontWeight: '600'
            }}>
              Technology Stack
            </h4>
            
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '0.75rem',
              justifyContent: 'center',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              {[
                'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GCP', 
                'React', 'Next.js', 'Docker', 'AI/ML', 'REST APIs'
              ].map((tech, index) => (
                <motion.span
                  key={index}
                  style={{
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '25px',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    fontWeight: '500'
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: 'var(--primary-color)',
                    color: 'white' 
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;