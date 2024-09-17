import React from "react";
import './Footer.scss'
import footerLogo from "../../assets/images/images/footer-logo.png";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer__company__container d-flex">
              <a href="/" target="_blank" rel="noopener noreferrer">
                <img src={footerLogo} alt="company logo" />
              </a>
              <div className="text__wrapper">
                <h6>COMPANY NAME</h6>
                <p>Company Slogan</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 footer__quick__links">
            <h5>Quick Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a href="#" >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#" >
                  Guides
                </a>
              </li>
              <li className="nav-item">
                <a href="#" >
                  Career Advice
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 footer__community">
            <h5>Community</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a href="#" >
                  Help/Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a href="#" >
                  Guideline
                </a>
              </li>
              <li className="nav-item">
                <a href="#" >
                  Terms of Usage
                </a>
              </li>
              <li className="nav-item">
                <a href="#" >
                  Privacy Policy
                </a>
              </li>
              <li className="nav-item">
                <a href="#" >
                  Cookies
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 footer__employer">
            <h5>Employer</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a href="#" >
                  Employer Center
                </a>
              </li>
              <li className="nav-item">
                <a href="#" >
                  Account
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
