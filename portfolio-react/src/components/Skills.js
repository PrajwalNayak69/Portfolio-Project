import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'HTML5', percentage: 95, icon: 'bxl-html5' },
    { name: 'CSS3', percentage: 85, icon: 'bxl-css3' },
    { name: 'JAVASCRIPT', percentage: 65, icon: 'bxl-javascript' },
    { name: 'REACT', percentage: 75, icon: 'bxl-react' },
    { name: 'UX/UI', percentage: 85, icon: 'bxs-paint' }
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
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: (percentage) => ({
      width: `${percentage}%`,
      transition: { duration: 1, delay: 0.5, ease: "easeOut" }
    })
  };

  return (
    <section className="skills section" id="skills">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <div className="skills__container bd-grid">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="skills__subtitle" variants={itemVariants}>
            Professional Skills
          </motion.h2>
          <motion.p className="skills__text" variants={itemVariants}>
            Here are the technologies and skills I've been working with in my development journey.
            I'm constantly learning and improving to stay current with the latest trends.
          </motion.p>

          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="skills__data"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="skills__names">
                <i className={`bx ${skill.icon} skills__icon`}></i>
                <span className="skills__name">{skill.name}</span>
              </div>
              <div className="skills__bar">
                <motion.div
                  className={`skills__percentage-bar skills__${skill.name.toLowerCase().replace('/', '').replace(' ', '')}`}
                  variants={barVariants}
                  initial="hidden"
                  whileInView="visible"
                  custom={skill.percentage}
                  viewport={{ once: true }}
                  style={{
                    height: '100%',
                    backgroundColor: 'var(--first-color)',
                    borderRadius: '0.5rem'
                  }}
                />
              </div>
              <div>
                <span className="skills__percentage">{skill.percentage}%</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
