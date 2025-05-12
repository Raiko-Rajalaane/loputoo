// src/components/NavigationBar.jsx
import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav       from 'react-bootstrap/Nav';
import Navbar    from 'react-bootstrap/Navbar';
import { Link }  from 'react-router-dom';
import i18n      from '../i18n';
import '../index.css';

export default function NavigationBar() {
  // On first mount, apply saved language (if any)
  useEffect(() => {
    const saved = localStorage.getItem('lang');
    if (saved) i18n.changeLanguage(saved);
  }, []);

  // Dark‐mode state (kept)
  const [dark, setDark] = React.useState(
    () => localStorage.getItem('dark') === 'true'
  );
  useEffect(() => {
    document.body.classList.toggle('dark', dark);
    localStorage.setItem('dark', dark);
  }, [dark]);

  // Helper to switch language
  const switchLang = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lang', lng);
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/courses">Courses &amp; Stack</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Language buttons */}
        <div style={{
          position: 'fixed',
          bottom: 10,
          left:   10,
          display:'flex',
          gap:    8,
          zIndex: 1000
        }}>
          <button
            onClick={() => switchLang('en')}
            style={{ fontSize:24, border:'none', background:'none', cursor:'pointer' }}
            aria-label="English"
          >🇬🇧</button>
          <button
            onClick={() => switchLang('et')}
            style={{ fontSize:24, border:'none', background:'none', cursor:'pointer' }}
            aria-label="Eesti"
          >🇪🇪</button>
        </div>

        {/* Dark-mode toggle */}
        <button
          onClick={() => setDark(d => !d)}
          style={{
            position:  'fixed',
            bottom:     10,
            right:      10,
            fontSize:   24,
            border:     'none',
            background: 'none',
            cursor:     'pointer',
            zIndex:     1000
          }}
          aria-label="Toggle dark mode"
        >
          {dark ? '☀️' : '🌙'}
        </button>
      </Container>
    </Navbar>
  );
}
