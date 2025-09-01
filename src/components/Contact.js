import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact Form');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:prajwalnayak21@gmail.com?subject=${subject}&body=${body}`;

    // Open default email client
    window.location.href = mailtoLink;

    // Reset form after a brief delay
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      alert('Email client opened! Please send the email from your default email application.');
    }, 1000);
  };

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(`${type} copied to clipboard!`);
    } catch (err) {
      console.error('Failed to copy: ', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert(`${type} copied to clipboard!`);
    }
  };

  const handleContactClick = (info) => {
    if (info.icon === 'bx-envelope') {
      copyToClipboard(info.value, 'Email');
    } else if (info.icon === 'bx-phone') {
      copyToClipboard(info.value.replace(/[^0-9+]/g, ''), 'Phone number');
    } else if (info.link.startsWith('http')) {
      window.open(info.link, '_blank');
    } else {
      window.location.href = info.link;
    }
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

  const contactInfo = [
    {
      icon: 'bx-envelope',
      label: 'Email',
      value: 'prajwalnayak21@gmail.com',
      link: 'mailto:prajwalnayak21@gmail.com'
    },
    {
      icon: 'bx-phone',
      label: 'Phone',
      value: '+91-9449605476',
      link: 'tel:+919449605476'
    },
    {
      icon: 'bxl-linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/prajwal-nayak',
      link: 'https://www.linkedin.com/in/prajwal-nayak-54a6ab20a/'
    },
    {
      icon: 'bxl-github',
      label: 'GitHub',
      value: 'github.com/prajwal-nayak',
      link: 'https://github.com/PrajwalNayak69'
    }
  ];

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto 3rem',
            fontSize: '1.1rem'
          }}
        >
          Ready to build something amazing together? Let's discuss your next project 
          or explore opportunities for collaboration.
        </motion.p>

        {/* Let's Connect Section - Now First */}
        <motion.div
          className="contact__info"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ marginBottom: '4rem' }}
        >
          <motion.h3 
            variants={itemVariants}
            style={{
              color: 'var(--primary-color)',
              marginBottom: '2rem',
              fontSize: '1.5rem',
              fontWeight: '600',
              textAlign: 'center'
            }}
          >
            Let's Connect
          </motion.h3>
          
          <motion.div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap'
            }}
            variants={itemVariants}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="contact__icon-item"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: '70px',
                  height: '70px',
                  background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.8rem',
                  color: 'white',
                  cursor: 'pointer',
                  boxShadow: '0 8px 32px rgba(100, 255, 218, 0.3)',
                  position: 'relative',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => handleContactClick(info)}
                title={`${info.label}: ${info.value}`}
              >
                <i className={`bx ${info.icon}`}></i>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.p
            variants={itemVariants}
            style={{
              textAlign: 'center',
              color: 'var(--text-secondary)',
              fontSize: '0.9rem',
              marginTop: '1.5rem',
              fontStyle: 'italic'
            }}
          >
            Click to copy email/phone or visit social profiles
          </motion.p>
        </motion.div>

        {/* Send a Message Section - Now Centered */}
        <div style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <motion.form 
            onSubmit={handleSubmit}
            className="contact__form"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              width: '100%',
              maxWidth: '500px'
            }}
          >
            <motion.h3 
              variants={itemVariants}
              style={{
                color: 'var(--primary-color)',
                marginBottom: '1.5rem',
                fontSize: '1.5rem',
                fontWeight: '600',
                textAlign: 'center'
              }}
            >
              Send a Message
            </motion.h3>

            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              className="contact__input"
              value={formData.name}
              onChange={handleChange}
              required
              variants={itemVariants}
              whileFocus={{ scale: 1.02 }}
              style={{
                width: '100%',
                padding: '0.875rem 1rem',
                background: 'var(--bg-secondary)',
                border: '2px solid var(--border-color)',
                borderRadius: 'var(--border-radius-sm)',
                color: 'var(--text-primary)',
                fontFamily: 'inherit',
                transition: 'var(--transition)',
                fontSize: '0.95rem'
              }}
            />
            
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              className="contact__input"
              value={formData.email}
              onChange={handleChange}
              required
              variants={itemVariants}
              whileFocus={{ scale: 1.02 }}
              style={{
                width: '100%',
                padding: '0.875rem 1rem',
                background: 'var(--bg-secondary)',
                border: '2px solid var(--border-color)',
                borderRadius: 'var(--border-radius-sm)',
                color: 'var(--text-primary)',
                fontFamily: 'inherit',
                transition: 'var(--transition)',
                fontSize: '0.95rem',
                marginTop: '0.5rem'
              }}
            />

            <motion.input
              type="text"
              name="subject"
              placeholder="Subject"
              className="contact__input"
              value={formData.subject}
              onChange={handleChange}
              variants={itemVariants}
              whileFocus={{ scale: 1.02 }}
              style={{
                width: '100%',
                padding: '0.875rem 1rem',
                background: 'var(--bg-secondary)',
                border: '2px solid var(--border-color)',
                borderRadius: 'var(--border-radius-sm)',
                color: 'var(--text-primary)',
                fontFamily: 'inherit',
                transition: 'var(--transition)',
                fontSize: '0.95rem',
                marginTop: '0.5rem'
              }}
            />
            
            <motion.textarea
              name="message"
              cols="0"
              rows="6"
              className="contact__input"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              variants={itemVariants}
              whileFocus={{ scale: 1.02 }}
              style={{
                width: '100%',
                padding: '0.875rem 1rem',
                background: 'var(--bg-secondary)',
                border: '2px solid var(--border-color)',
                borderRadius: 'var(--border-radius-sm)',
                color: 'var(--text-primary)',
                fontFamily: 'inherit',
                transition: 'var(--transition)',
                fontSize: '0.95rem',
                resize: 'vertical',
                marginTop: '0.5rem'
              }}
            />
            
            <motion.button
              type="submit"
              className="contact__button button"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
              style={{
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                width: '100%',
                padding: '0.875rem 1rem',
                background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))',
                color: 'var(--bg-primary)',
                border: 'none',
                borderRadius: 'var(--border-radius-sm)',
                fontWeight: '600',
                fontSize: '0.95rem',
                transition: 'var(--transition)',
                marginTop: '0.5rem',
                boxShadow: '0 4px 12px rgba(100, 255, 218, 0.2)'
              }}
            >
              {isSubmitting ? (
                <>
                  <i className='bx bx-loader-alt bx-spin'></i>
                  Sending...
                </>
              ) : (
                <>
                  <i className='bx bx-send'></i>
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;