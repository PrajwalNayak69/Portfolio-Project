import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'TaskY',
      description: 'A Task Management App with HTML, CSS and JS.',
      liveLink: 'https://github.com/PrajwalNayak69/TaskY-App',
      githubLink: 'https://github.com/PrajwalNayak69/TaskY-App'
    },
    {
      title: 'BookMyShow App',
      description: 'A Clone of BookMyShow using ReactJS and JS.',
      liveLink: 'https://book-my-show-three-cyan.vercel.app/',
      githubLink: 'https://github.com/PrajwalNayak69/BookMyShow'
    },
    {
      title: 'Zomato Clone',
      description: 'A Clone of Zomato using ReactJS and modern web technologies.',
      liveLink: '#',
      githubLink: 'https://github.com/PrajwalNayak69/Zomato'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="work section" id="projects">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <section className="timeline">
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.li 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div>
                <div className="discovery">
                  <h5>
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none' }}
                    >
                      {project.title}
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="home__social-icon"
                    >
                      <i className='bx bxl-github'></i>
                    </a>
                  </h5>
                  <p>{project.description}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </section>
    </section>
  );
};

export default Projects;
