import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React.js', icon: 'bxl-react', level: 90 },
        { name: 'JavaScript', icon: 'bxl-javascript', level: 85 },
        { name: 'TypeScript', icon: 'bxl-typescript', level: 80 },
        { name: 'HTML5', icon: 'bxl-html5', level: 95 },
        { name: 'CSS3', icon: 'bxl-css3', level: 90 },
        { name: 'Next.js', icon: 'bx-code-curly', level: 75 },
        { name: 'Vue.js', icon: 'bxl-vuejs', level: 70 },
        { name: 'Tailwind CSS', icon: 'bx-palette', level: 85 }
      ]
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', icon: 'bxl-nodejs', level: 80 },
        { name: 'Express.js', icon: 'bx-server', level: 75 },
        { name: 'MongoDB', icon: 'bx-data', level: 75 },
        { name: 'MySQL', icon: 'bx-data', level: 70 },
        { name: 'PostgreSQL', icon: 'bx-data', level: 65 },
        { name: 'REST APIs', icon: 'bx-network-chart', level: 85 },
        { name: 'GraphQL', icon: 'bx-network-chart', level: 60 }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', icon: 'bxl-git', level: 85 },
        { name: 'Docker', icon: 'bxl-docker', level: 70 },
        { name: 'AWS', icon: 'bxl-aws', level: 65 },
        { name: 'Firebase', icon: 'bx-cloud', level: 75 },
        { name: 'Webpack', icon: 'bx-package', level: 70 },
        { name: 'Jest', icon: 'bx-test-tube', level: 75 },
        { name: 'Figma', icon: 'bxl-figma', level: 80 }
      ]
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', icon: 'bxl-javascript', level: 85 },
        { name: 'Python', icon: 'bxl-python', level: 75 },
        { name: 'Java', icon: 'bxl-java', level: 70 },
        { name: 'C++', icon: 'bx-code-alt', level: 65 }
      ]
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1, delay: 0.5, ease: "easeOut" }
    })
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
          Skills & Technologies
        </motion.h2>

        <motion.div
          className="grid-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              className="card"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-primary mb-3" style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                {category.title}
              </h3>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    className="skill-item-detailed mb-3"
                    variants={itemVariants}
                  >
                    <div className="skill-header" style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      marginBottom: '0.5rem'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <i className={`bx ${skill.icon}`} style={{ 
                          fontSize: '1.25rem', 
                          color: 'var(--primary-color)' 
                        }}></i>
                        <span style={{ fontWeight: '500' }}>{skill.name}</span>
                      </div>
                      <span style={{ 
                        color: 'var(--text-secondary)', 
                        fontSize: '0.875rem' 
                      }}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="skill-bar" style={{
                      width: '100%',
                      height: '4px',
                      backgroundColor: 'var(--border-color)',
                      borderRadius: '2px',
                      overflow: 'hidden'
                    }}>
                      <motion.div
                        className="skill-progress"
                        variants={barVariants}
                        initial="hidden"
                        whileInView="visible"
                        custom={skill.level}
                        viewport={{ once: true }}
                        style={{
                          height: '100%',
                          background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))',
                          borderRadius: '2px'
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Grid */}
        <motion.div 
          className="mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-center mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
            Additional Technologies
          </h3>
          
          <div className="skills-grid">
            {[
              { name: 'Redux', icon: 'bx-store' },
              { name: 'Material-UI', icon: 'bx-palette' },
              { name: 'Bootstrap', icon: 'bxl-bootstrap' },
              { name: 'Sass', icon: 'bxl-sass' },
              { name: 'Webpack', icon: 'bx-package' },
              { name: 'Vite', icon: 'bx-lightning-bolt' },
              { name: 'Netlify', icon: 'bx-cloud' },
              { name: 'Vercel', icon: 'bx-cloud-upload' }
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="skill-item"
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.3 }
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="skill-icon">
                  <i className={`bx ${tech.icon}`}></i>
                </div>
                <div className="skill-name">{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
