import React, { useState } from 'react';
import { MenuIcon } from '../utils/Svg';

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
  setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <a href="/" className="header_logo">
        <span className="titles text-accent">DPD</span>ev
      </a>

      <MenuIcon style="menu-icon" onClick={handleMenuClick}/>

      <ul className={`navbar ${menuOpen ? 'menu-open' : ''}`}>
        <li className="navbar_item">
          <a className="navbar_link navbar_active" href="#home">
            Home
          </a>
        </li>
        <li className="navbar_item">
          <a className="navbar_link" href="#about">
            About
          </a>
        </li>
        <li className="navbar_item">
          <a className="navbar_link" href="#skills">
            Skills
          </a>
        </li>
        <li className="navbar_item">
          <a className="navbar_link" href="#proyects">
            Proyects
          </a>
        </li>
        <li className="navbar_item">
          <a className="navbar_link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
};
