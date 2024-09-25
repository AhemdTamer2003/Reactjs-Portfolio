import React from 'react';
import './NavBar.css';
import logo from '../../assets/logo.jpeg';
import { Link } from 'react-scroll'; // For smooth scrolling

const NavBar = () => {
  // Function to handle the "Contact Me" button click
  const handleContactClick = () => {
    // You can trigger a modal, scroll to a contact section, or open a mailto link
    window.location.href = '#contact';
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        {/* Small rounded logo on the left */}
        <img src={logo} alt="Company Logo" className="logo small-rounded-logo" />

        {/* Animated text next to the logo */}
        <div className="animated-text">
          <span className="front-end-text">Front-End Developer</span>
        </div>
      </div>

      {/* Navigation menu */}
      <div className="desktopMenu">
        <Link to="home" smooth={true} duration={500}>Home</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="media" smooth={true} duration={500}>Media</Link>
        <Link to="about" smooth={true} duration={500}>About</Link>
      </div>

      {/* Contact Me button */}
      <button className="desktopmenubtn" onClick={handleContactClick}>
        Contact Me
      </button>
    </nav>
  );
}

export default NavBar;
