import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: 'bxl-facebook', url: 'https://www.facebook.com/prajwal.nayak.3557' },
    { icon: 'bxl-instagram', url: 'https://www.instagram.com/prajwal.nayak_/' },
    { icon: 'bxl-twitter', url: '#' }
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

  return (
    <motion.footer 
      className="footer"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.p className="footer__title" variants={itemVariants}>
        Prajwal
      </motion.p>
      
      <motion.div className="footer__social" variants={itemVariants}>
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__icon"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className={`bx ${link.icon}`}></i>
          </motion.a>
        ))}
      </motion.div>
      
      <motion.p variants={itemVariants}>
        &#169; 2025 copyright all right reserved
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
