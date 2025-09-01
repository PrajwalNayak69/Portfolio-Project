import React from 'react';
import { motion } from 'framer-motion';
import devImage from '../assets/dev.jpg';

const About = () => {
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

  return (
    <section className="about section" id="about">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About
      </motion.h2>

      <motion.div 
        className="about__container bd-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="about__img" variants={itemVariants}>
          <img src={devImage} alt="About Prajwal" />
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="about__subtitle">I'm Prajwal</h2>
          <p className="about__text">
            I'm an undergraduate studying Information Science and Engineering at N.M.A.M.I.T Nitte.
            I'm aspiring to be a Full Stack Web Developer. It's been only a few months since I've begun
            my journey in the web development world and I aspire to learn more. I like DevOps and want to 
            develop more and more applications as I move forward in this journey of Web development.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
