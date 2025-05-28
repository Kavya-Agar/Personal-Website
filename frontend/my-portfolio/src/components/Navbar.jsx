import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo 2.png';
import '../styles/Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar fixed top-0 left-0 w-full z-5">
      {/* Logo */}
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-button" />
        </Link>
      </div>

      {/* Hamburger menu for mobile */}
      <button
        className="md:hidden absolute right-4 top-4 z-20"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="block w-8 h-1 mb-1 rounded" style={{ backgroundColor: '#0f420f' }}></span>
        <span className="block w-8 h-1 mb-1 rounded" style={{ backgroundColor: '#0f420f' }}></span>
        <span className="block w-8 h-1 rounded" style={{ backgroundColor: '#0f420f' }}></span>
      </button>

      {/* Center nav links (desktop) */}
      <div className="nav-links-wrapper hidden md:flex">
        <div className="nav-links">
          <Link to="/about" className="nav-button">About Me</Link>
          <Link to="/projects" className="nav-button">Projects</Link>
          <Link to="/blog" className="nav-button">Blog</Link>
          <Link to="/extras" className="nav-button">Extras</Link>
        </div>
      </div>

      {/* GitHub button (desktop) */}
      <div className="nav-actions hidden md:flex">
        <a
          href="https://github.com/Kavya-Agar"
          target="_blank"
          rel="noopener noreferrer"
          className="action-btn black flex items-center justify-center"
          style={{ width: '100px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          GITHUB
        </a>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden" onClick={() => setMenuOpen(false)}>
          <div
            className="absolute top-0 right-0 w-2/3 max-w-xs h-full bg-white shadow-lg flex flex-col items-start p-6 gap-6"
            onClick={e => e.stopPropagation()}
          >
            <Link to="/about" className="nav-button w-full text-left" onClick={() => setMenuOpen(false)}>About Me</Link>
            <Link to="/projects" className="nav-button w-full text-left" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link to="/blog" className="nav-button w-full text-left" onClick={() => setMenuOpen(false)}>Blog</Link>
            <Link to="/extras" className="nav-button w-full text-left" onClick={() => setMenuOpen(false)}>Extras</Link>
            <a
              href="https://github.com/Kavya-Agar"
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn black w-full flex items-center justify-center text-left"
              onClick={() => setMenuOpen(false)}
              style={{ height: '40px' }}
            >
              GITHUB
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
