import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="FooterContainer">
      {/* Icons */}
      <div className="icons">
        <a href="https://www.linkedin.com/">
          <img src="/assets/icon1.png" alt="" />
        </a>
        <a href="https://www.facebook.com/">
          <img src="/assets/icon2.png" alt="" />
        </a>
        <a href="https://www.instagram.com/">
          <img src="/assets/icon3.png" alt="" />
        </a>
        <a href="https://twitter.com/">
          <img src="/assets/icon4.png" alt="" />
        </a>
      </div>
      {/* Links */}
      <div className="footerlinks">
        <div className="underlinelinks">
          <a href="https://www.facebook.com/">Contact Us</a>
          <a href="https://www.facebook.com/">Privacy Policy</a>
          <a href="https://www.facebook.com/">Terms of Use</a>
        </div>
        <div className="nonunderlinelinks">
          <a href="https://www.facebook.com/">Help Center</a>
          <a href="https://www.facebook.com/">About Us</a>
          <a href="https://www.facebook.com/">FAQs</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
