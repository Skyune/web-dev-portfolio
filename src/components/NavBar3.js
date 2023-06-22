import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/discord.svg';
import navIcon5 from '../assets/img/twitter.svg';
import profile from '../assets/img/profile.png';
import code from '../assets/img/code.svg';
import briefcase from '../assets/img/briefcase.svg';
import envelope from '../assets/img/envelope.svg';
import home from '../assets/img/home.svg';

import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

import './NavBar3.css';


export const NavBar3 = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [navLinkStyle, setNavLinkStyle] = useState({
    opacity: 1,
    height: '160px',
    transition: 'all ease',
    backgroundColor: 'transparent'
  });
  const [navLinkPosition, setNavLinkPosition] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const homeSection = document.getElementById('home');
      const homeSectionHeight = homeSection.offsetHeight;
      const homeSectionBottom = homeSection.offsetTop + homeSectionHeight;
      const maxScrollPosition = homeSectionBottom;

      if (window.scrollY > homeSectionBottom) {
        setScrolled(true);
        
        setNavLinkPosition(0);
      } else {
        setScrolled(false);
        setNavLinkPosition(window.scrollY + homeSectionBottom);
      }

      const scrollPercentage = Math.min(window.scrollY / maxScrollPosition, 1);
      const minHeight = 60;
      const maxHeight = 160;
      const newHeight = minHeight + (maxHeight - minHeight) * (1 - scrollPercentage);

      setNavLinkStyle({
        opacity: 1,
        height: `${newHeight}px`,
        transition: 'height ease, background-color 0.3s ease',

      });
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar className={`navbar3-navbar ${scrolled ? "scrolled1" : ""}`} expand="md" style={navLinkStyle}>
      <Router>
        <Container fluid className="flex-column justify-content-center">
          <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Brand href="/">
              <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Nav fluid className="ms-auto flex-row">
              <Nav.Link
                href="#home"
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('skills')}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('projects')}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon ms-auto flex-row">
                <a href="#">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="#">
                  <img src={navIcon2} alt="" />
                </a>
                <a href="#">
                  <img src={navIcon3} alt="" />
                </a>
              </div>
              <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
              </Navbar.Toggle>
            </span>
          </Navbar.Collapse>
        </Container>
      </Router>
    </Navbar>
  );
};
