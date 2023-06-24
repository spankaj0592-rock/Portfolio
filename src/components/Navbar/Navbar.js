import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import About from '../about/About';
import Portfolio from '../portfolio/Portfolio';
import TechStacks from '../TechStacks/TechStacks';
import Contact from '../Contact/Contact';
import Logo from '../../assets/images/logo.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <><nav className={`navbar ${isOpen ? 'active' : ''}`}>
          <div className="logo">
              <a href="/">Pankaj</a>
              
          </div>
          <div className="menu-icon" onClick={toggleNavbar}>
              <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className="menu">
             
              <li>
                  <a href='https://drive.google.com/file/d/1XrpxB460PNwb2ZwXD-ttjCnCD2j4RWVx/view?usp=share_link' download>Resume</a>
              </li>
             
             
          </ul>
      </nav>
      <About />
      <Portfolio/>
      <TechStacks/>
      <Contact/>
      </>
  );
};

export default Navbar;
