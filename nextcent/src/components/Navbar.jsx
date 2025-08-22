import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        {/* Hamburger (mobile only) */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Logo (hidden on small screens) */}
        <div className="logo">
          <img src="/images/logoicon.png" alt="logoicon" />
          <span>Nexcent</span>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/service" onClick={() => setMenuOpen(false)}>Service</Link></li>
          <li><Link to="/feature" onClick={() => setMenuOpen(false)}>Feature</Link></li>
          <li><Link to="/product" onClick={() => setMenuOpen(false)}>Product</Link></li>
          <li><Link to="/testimonial" onClick={() => setMenuOpen(false)}>Testimonial</Link></li>
          <li><Link to="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link></li>
        </ul>

        {/* Always visible actions */}
        <div className="nav-actions">
          <button className="btn-login">Login</button>
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </div>
    </header>
  );
}
