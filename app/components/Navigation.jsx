'use client';
import { useState, useEffect, useRef } from 'react';
import ThemeToggle from './ThemeToggle';

function getGreeting() {
  const h = new Date().getHours();
  if (h >= 5 && h < 12) return '☀️ Good morning';
  if (h >= 12 && h < 17) return '🌤 Good afternoon';
  if (h >= 17 && h < 21) return '🌇 Good evening';
  return '🌙 Good night';
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [greeting, setGreeting] = useState('');
  const menuRef = useRef(null);

  useEffect(() => {
    setGreeting(getGreeting());
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on outside tap / click
  useEffect(() => {
    if (!menuOpen) return;
    const handleOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('touchstart', handleOutside, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('touchstart', handleOutside);
    };
  }, [menuOpen]);

  const links = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#tech', label: 'Tech Stack' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          {/* Logo */}
          <a href="#home" className="nav-logo">
            <span className="nav-logo-bracket">&lt;</span>
            <span className="nav-logo-text">DS</span>
            <span className="nav-logo-bracket">&nbsp;/&gt;</span>
          </a>

          {/* Desktop links */}
          <ul className="nav-links">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="nav-right">
            {greeting && (
              <span className="nav-greeting">{greeting}</span>
            )}
            <ThemeToggle />
            <a
              href="/resume/Deepanshu_Singla_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-resume-nav"
              download
            >
              Resume
            </a>
            <button
              className={`hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu — ref for outside-click detection */}
      {menuOpen && (
        <div className="mobile-menu" ref={menuRef}>
          {greeting && (
            <span className="mobile-menu-greeting">{greeting}</span>
          )}
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
              <span className="mobile-menu-arrow">↗</span>
            </a>
          ))}
          <a
            href="/resume/Deepanshu_Singla_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            style={{ fontWeight: 600 }}
            onClick={() => setMenuOpen(false)}
          >
            Resume
            <span className="mobile-menu-arrow">↓</span>
          </a>
        </div>
      )}
    </>
  );
}
