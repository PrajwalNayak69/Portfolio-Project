import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend & Database',
      skills: [
        { icon: 'bxl-nodejs' },
        { icon: 'bxl-python' },
        { icon: 'bx-data' },
        { icon: 'bx-network-chart' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { icon: 'bxl-google-cloud' },
        { icon: 'bxl-docker' },
        { icon: 'bx-cloud' },
        { icon: 'bx-cog' }
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { icon: 'bxl-react' },
        { icon: 'bxl-javascript' },
        { icon: 'bxl-html5' },
        { icon: 'bxl-css3' }
      ]
    },
    {
      title: 'Tools',
      skills: [
        { icon: 'bxl-git' },
        { icon: 'bx-code-alt' },
        { icon: 'bx-task' },
        { icon: 'bx-note' }
      ]
    }
  ];

  const coreCompetencies = [
    { name: 'API Development', icon: 'bx-network-chart' },
    { name: 'Database Design', icon: 'bx-data' },
    { name: 'Microservices', icon: 'bx-cube' },
    { name: 'Cloud Architecture', icon: 'bx-cloud' },
    { name: 'Performance Optimization', icon: 'bx-tachometer' },
    { name: 'System Design', icon: 'bx-sitemap' },
    { name: 'CI/CD', icon: 'bx-git-branch' },
    { name: 'Authentication', icon: 'bx-shield-quarter' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>

        {/* Skills Categories */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              className="skill-category"
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              style={{
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--glass-border)',
                borderRadius: '20px',
                padding: '2rem',
                textAlign: 'center'
              }}
            >
              <h3 style={{ 
                color: 'var(--primary-color)', 
                fontSize: '1.3rem', 
                fontWeight: '600',
                marginBottom: '1.5rem'
              }}>
                {category.title}
              </h3>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem'
              }}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '60px',
                      height: '60px',
                      background: 'var(--bg-secondary)',
                      border: '2px solid var(--border-color)',
                      borderRadius: '15px',
                      margin: '0 auto',
                      fontSize: '2rem',
                      color: 'var(--primary-color)',
                      transition: 'var(--transition)'
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      borderColor: 'var(--primary-color)',
                      boxShadow: '0 10px 25px rgba(74, 144, 226, 0.2)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className={`bx ${skill.icon}`}></i>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Competencies */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 style={{ 
            textAlign: 'center', 
            marginBottom: '2rem',
            fontSize: '1.8rem', 
            fontWeight: '600',
            color: 'var(--text-primary)'
          }}>
            Core Competencies
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {coreCompetencies.map((competency, index) => (
              <motion.div
                key={index}
                className="competency-card"
                whileHover={{ 
                  scale: 1.05,
                  y: -8,
                  boxShadow: '0 15px 35px rgba(0,0,0,0.1)'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                style={{
                  background: 'var(--glass-bg)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  textAlign: 'center',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: `linear-gradient(135deg, var(--primary-color), var(--accent-color))`,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem auto',
                  fontSize: '1.5rem',
                  color: 'white'
                }}>
                  <i className={`bx ${competency.icon}`}></i>
                </div>
                <div style={{
                  color: 'var(--text-primary)',
                  fontSize: '1rem',
                  fontWeight: '500'
                }}>
                  {competency.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Summary */}
        <motion.div 
          style={{ 
            marginTop: '4rem',
            textAlign: 'center',
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(10px)',
            border: '1px solid var(--glass-border)',
            borderRadius: '20px',
            padding: '2.5rem',
            maxWidth: '800px',
            margin: '4rem auto 0 auto'
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h4 style={{ 
            color: 'var(--primary-color)', 
            fontSize: '1.4rem',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            Specialized In
          </h4>
          <p style={{ 
            color: 'var(--text-secondary)', 
            fontSize: '1.1rem',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Building robust backend systems with modern technologies. 
            Expert in <span className="text-primary">Node.js</span>, <span className="text-primary">Python</span>, 
            and <span className="text-primary">PostgreSQL</span> for scalable applications 
            serving <span className="text-primary">100K+</span> users.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;