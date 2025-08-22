import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section - Logo + Copyright + Social Icons */}
        <div className="footer-brand">
          <div className="footer-logo-container">
            <img src="/images/logoicon.png" alt="Nexcent" className="footer-logo" />
            <strong className="footer-company-name">Nexcent</strong>
          </div>
          <p>Copyright © 2020 Nexcent ltd.</p>
          <p>All rights reserved</p>
          <div className="footer-social">
            <img src="/images/socialicons.png" alt="Social Media Links" />
          </div>
        </div>

        {/* Middle Sections */}
        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li>About us</li>
            <li>Blog</li>
            <li>Contact us</li>
            <li>Pricing</li>
            <li>Testimonials</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Support</h4>
          <ul>
            <li>Help center</li>
            <li>Terms of service</li>
            <li>Legal</li>
            <li>Privacy policy</li>
            <li>Status</li>
          </ul>
        </div>

        {/* Email Subscription */}
        <div className="footer-subscribe">
          <h4>Stay up to date</h4>
          <div className="email-box">
            <input type="email" placeholder="Your email address" />
          </div>
        </div>
      </div>
    </footer>
  );
}
