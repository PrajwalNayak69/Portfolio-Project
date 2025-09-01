import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/BVEwrvD-removebg-preview.png';

const Home = () => {
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
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content-centered">
          <motion.div 
            className="hero-content-integrated"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="hero-intro" variants={itemVariants}>
              <motion.div 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginBottom: '2rem'
                }}
              >
                <motion.img 
                  src={profileImage} 
                  alt="Prajwal Nayak" 
                  className="profile-image-inline"
                  style={{ 
                    filter: 'grayscale(100%) contrast(1.2)',
                    borderRadius: '50%',
                    width: '120px',
                    height: '120px',
                    objectFit: 'cover',
                    border: '4px solid var(--primary-color)',
                    boxShadow: '0 15px 40px rgba(0,0,0,0.4)',
                    marginBottom: '1.5rem'
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    filter: 'grayscale(0%) contrast(1)',
                    boxShadow: '0 20px 50px rgba(74, 144, 226, 0.4)'
                  }}
                  transition={{ duration: 0.4 }}
                />
                <motion.h1 
                  variants={itemVariants}
                  style={{
                    fontSize: '3.5rem',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    textAlign: 'center'
                  }}
                >
                  <span className="highlight">Prajwal Nayak</span>
                </motion.h1>
                
                <motion.p 
                  className="subtitle" 
                  variants={itemVariants}
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '500',
                    color: 'var(--text-secondary)',
                    textAlign: 'center'
                  }}
                >
                  Backend-Focused Full Stack Developer
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '1.4rem',
                marginBottom: '2rem',
                lineHeight: '1.7',
                maxWidth: '750px',
                textAlign: 'center',
                fontWeight: '400'
              }}
            >
              Crafting scalable backend architectures and high-performance applications 
              with expertise in modern technologies.
            </motion.p>

            {/* Social Icons Only */}
            <motion.div 
              variants={itemVariants}
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '2rem',
                marginBottom: '3rem'
              }}
            >
              <motion.a
                href="https://github.com/prajwal-nayak"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '2rem',
                  textDecoration: 'none',
                  transition: 'var(--transition)'
                }}
                whileHover={{ 
                  scale: 1.2,
                  color: 'var(--primary-color)'
                }}
                whileTap={{ scale: 0.9 }}
              >
                <i className='bx bxl-github'></i>
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/prajwal-nayak"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '2rem',
                  textDecoration: 'none',
                  transition: 'var(--transition)'
                }}
                whileHover={{ 
                  scale: 1.2,
                  color: 'var(--primary-color)'
                }}
                whileTap={{ scale: 0.9 }}
              >
                <i className='bx bxl-linkedin'></i>
              </motion.a>
            </motion.div>

            {/* Quick Stats without Years */}
            <motion.div 
              className="quick-stats"
              variants={itemVariants}
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '2rem',
                marginTop: '3rem',
                flexWrap: 'wrap'
              }}
            >
              {[
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  style={{
                    textAlign: 'center',
                    padding: '1rem',
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '12px',
                    minWidth: '80px'
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '700', 
                    color: 'var(--primary-color)',
                    marginBottom: '0.25rem'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{ 
                    fontSize: '0.875rem', 
                    color: 'var(--text-secondary)' 
                  }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Background Elements */}
        <motion.div
          className="floating-elements"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: -1,
            top: 0,
            left: 0
          }}
        >
          <motion.div
            style={{
              position: 'absolute',
              top: '15%',
              left: '8%',
              fontSize: '2.5rem',
              color: 'var(--primary-color)',
              opacity: 0.15
            }}
            animate={{
              y: [-25, 25, -25],
              rotate: [0, 15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <i className='bx bx-data'></i>
          </motion.div>

          <motion.div
            style={{
              position: 'absolute',
              bottom: '25%',
              right: '10%',
              fontSize: '2rem',
              color: 'var(--accent-color)',
              opacity: 0.15
            }}
            animate={{
              y: [25, -25, 25],
              rotate: [0, -15, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          >
            <i className='bx bx-server'></i>
          </motion.div>

          <motion.div
            style={{
              position: 'absolute',
              top: '40%',
              right: '5%',
              fontSize: '1.8rem',
              color: 'var(--primary-color)',
              opacity: 0.1
            }}
            animate={{
              y: [-15, 15, -15],
              x: [-10, 10, -10],
              rotate: [0, 10, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <i className='bx bx-cloud'></i>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;