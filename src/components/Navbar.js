'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const links = [
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'About', id: 'why-us' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <nav style={{ borderBottomColor: scrolled ? 'var(--line)' : 'transparent' }}>
        <div className="nav-logo" style={{ fontFamily: 'var(--font-display)' }}>
          OPTIO<span>N</span> EXCAVATING
        </div>

        <ul className="nav-links" style={{ fontFamily: 'var(--font-ui)' }}>
          {links.map(link => (
            <li key={link.id}>
              <a href={`#${link.id}`} onClick={(e) => handleNavClick(e, link.id)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="nav-cta"
          style={{ fontFamily: 'var(--font-ui)' }}
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          Get an Estimate
        </button>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-nav-overlay ${menuOpen ? 'open' : ''}`} style={{ fontFamily: 'var(--font-ui)' }}>
        {links.map(link => (
          <a key={link.id} href={`#${link.id}`} onClick={(e) => handleNavClick(e, link.id)}>
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, 'contact')}
          style={{ color: 'var(--orange)' }}
        >
          Get an Estimate
        </a>
      </div>
    </>
  );
}
