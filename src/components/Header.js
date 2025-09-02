import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    closeMenu();
    
    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className={`l-header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav bd-grid">
        <div>
          <a href="#home" className="nav__logo" onClick={() => handleNavClick('home')}>
            <span className="logo-bracket">{'{'}</span>
            Prajwal Nayak
            <span className="logo-bracket">{'}'}</span>
          </a>
        </div>

        <div className={`nav__menu ${isMenuOpen ? 'show' : ''}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#home"
                className={`nav__link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => handleNavClick('home')}
              >
                <i className='bx bx-home'></i>
                <span>Home</span>
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                className={`nav__link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => handleNavClick('about')}
              >
                <i className='bx bx-user'></i>
                <span>About</span>
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                className={`nav__link ${activeSection === 'skills' ? 'active' : ''}`}
                onClick={() => handleNavClick('skills')}
              >
                <i className='bx bx-code-alt'></i>
                <span>Skills</span>
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#projects"
                className={`nav__link ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={() => handleNavClick('projects')}
              >
                <i className='bx bx-folder'></i>
                <span>Projects</span>
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                className={`nav__link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => handleNavClick('contact')}
              >
                <i className='bx bx-envelope'></i>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="nav__actions">
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`}></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;