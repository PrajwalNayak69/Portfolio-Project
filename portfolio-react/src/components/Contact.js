import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

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
    <section className="contact section" id="contact">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact
      </motion.h2>

      <div className="contact__container bd-grid">
        <motion.form 
          onSubmit={handleSubmit}
          className="contact__form"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Name"
            className="contact__input"
            value={formData.name}
            onChange={handleChange}
            required
            variants={itemVariants}
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Email"
            className="contact__input"
            value={formData.email}
            onChange={handleChange}
            required
            variants={itemVariants}
            whileFocus={{ scale: 1.02 }}
          />
          <motion.textarea
            name="message"
            cols="0"
            rows="10"
            className="contact__input"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            variants={itemVariants}
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="submit"
            value="Submit"
            className="contact__button button"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
