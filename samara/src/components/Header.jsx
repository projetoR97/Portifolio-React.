import React, { useState } from 'react';

const Header = ({ activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'service', label: 'Serviços' },
    { id: 'testimonials', label: 'Depoimentos' },
    { id: 'contact', label: 'Contato' },
  ];

  return (
    <header className="header">
      <a href="#home" className="logo" onClick={closeMenu}>
        Samara<span>Oliveira</span>
      </a>

      <i
        className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-list'}`}
        id="menu-icon"
        onClick={toggleMenu}
      ></i>

      <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? 'active' : ''}
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;