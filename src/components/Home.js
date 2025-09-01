import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/BVEwrvD-removebg-preview.png';

const Home = () => {
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
    <section className="home bd-grid" id="home">
      <motion.div 
        className="home__data"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="home__title" variants={itemVariants}>
          Hi,<br />I'm <span className="home__title-color">Prajwal Nayak</span><br />
        </motion.h1>
        <motion.h3 className="home__secondary" variants={itemVariants}>
          A Passionate Developer!!
        </motion.h3>
      </motion.div>

      <motion.div 
        className="home__social"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.a
          href="https://www.linkedin.com/in/prajwal-nayak-54a6ab20a/"
          className="home__social-icon"
          variants={itemVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className='bx bxl-linkedin'></i>
        </motion.a>
        <motion.a
          href="https://github.com/PrajwalNayak69"
          className="home__social-icon"
          variants={itemVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className='bx bxl-github'></i>
        </motion.a>
      </motion.div>

      <motion.div
        className="home__img"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <svg className="home__blob" viewBox="0 0 500 467" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0" maskType="alpha">
            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
          </mask>
          <g mask="url(#mask0)">
            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
            <image className="home__blob-img" x="100" y="0" href={profileImage} />
          </g>
        </svg>
      </motion.div>
    </section>
  );
};

export default Home;
