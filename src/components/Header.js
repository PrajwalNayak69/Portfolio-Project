import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="#home" className="nav__logo" onClick={() => handleNavClick('home')}>
            Prajwal
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
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                className={`nav__link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => handleNavClick('about')}
              >
                About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                className={`nav__link ${activeSection === 'skills' ? 'active' : ''}`}
                onClick={() => handleNavClick('skills')}
              >
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#projects"
                className={`nav__link ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={() => handleNavClick('projects')}
              >
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                className={`nav__link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => handleNavClick('contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <i className='bx bx-menu'></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;