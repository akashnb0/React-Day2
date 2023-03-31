import React from 'react';
import './Footer.css'

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        {/* Primary row */}
        <div className="row primary">
          {/* About column */}
          <div className="column about">
            <h3 className="about-title">Foolish Developer</h3>
            <p className="about-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              voluptatem corporis error non,
            </p>
            {/* Social media icons */}
            <div className="social">
              <i className="fa-brands fa-facebook-square"></i>
              <i className="fa-brands fa-instagram-square"></i>
              <i className="fa-brands fa-twitter-square"></i>
              <i className="fa-brands fa-youtube-square"></i>
              <i className="fa-brands fa-whatsapp-square"></i>
            </div>
          </div>
          {/* Links column 1 */}
          <div className="column links">
            <h3>Some Links</h3>
            <ul>
              <li>
                <a href="#faq">F.A.Q</a>
              </li>
              <li>
                <a href="#cookies-policy">Cookies Policy</a>
              </li>
              <li>
                <a href="#terms-of-services">Terms Of Service</a>
              </li>
              <li>
                <a href="#support">Support</a>
              </li>
            </ul>
          </div>
          {/* Subscribe column */}
          <div className="column subscribe">
            <h3>Newsletter</h3>
            <div>
              <input type="email" placeholder="Your email id here" />
              <button >Subscribe</button>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="row copyright">
          {/* Footer menu */}
          <div className="footer-menu">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Blog</a>
            <a href="">Social</a>
          </div>
          {/* Copyright */}
          <p className="copy-right">
            &copy; 2021 Foolish Developer
          </p>
        </div>
      </footer>
    </div>
  );
}
