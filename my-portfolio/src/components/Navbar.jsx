import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-button" />
        </Link>
      </div>

      {/* Center nav links */}
      <div className="nav-links-wrapper">
        <div className="nav-links">
          <Link to="/about" className="nav-button">About Me</Link>
          <Link to="/projects" className="nav-button">Projects</Link>
          <Link to="/blog" className="nav-button">Blog</Link>
          <Link to="/stats" className="nav-button">Stats</Link>
        </div>
      </div>

      {/* GitHub button */}
      <div className="nav-actions">
        <a
          href="https://github.com/Kavya-Agar"
          target="_blank"
          rel="noopener noreferrer"
          className="action-btn black"
        >
          GITHUB
        </a>
      </div>
    </nav>
  );
}
