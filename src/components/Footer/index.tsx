import React from 'react';

import "./index.css";

import { FaLinkedin } from "react-icons/fa6";

import { FaInstagram } from "react-icons/fa6";

const Footer: React.FC = () => {
    return (
        <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-description">
            <img src="https://s3-alpha-sig.figma.com/img/d7fb/35d1/0a5d5473989ba4ec575b8af8fe1f746c?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n-vbAPQ05LmD8Nda2f2mGNfZTgj7C6YBEioDb~0ls1JxMZ5voB4rtvKkqDu8mDFa9VKS4X~28N4hO14wVLH-Aaips877QZP2jTVclw~oKbP2-R0Qz-NXaQES6jgHdYYG6XJTT31iOazUoRUpPb3Y9U-8~DwuxkzPZnq5SG3zOgqASsaIeiHiO7uId7sMl7jnpznKoyNk~F-lEI73oUHez4df0sd86oEDWzKWRAGY~oxiwQv2J5iJ3PZpHP3RN-~i7P29JdHP6US2hi4N-MOlhHADGHdxVYkiuJ~y4k1eyZUHYlLo-~TAMM1nHamq4uA7BPtgQPLwN19MZEeOlGHqOw__" alt="Company Logo" className="footer-logo" />
            <p>
              Your dream space deserves the best execution, and that's where United Builder Pvt Ltd excels. Our construction services encompass everything from foundational work to structural builds, tailored to residential, commercial, and industrial needs. We pride ourselves on using high-quality materials and advanced techniques to ensure durability and efficiency in every project we undertake.
            </p>
            <div className="social-icons">
                <FaInstagram size = {35} />
                <FaLinkedin size = {35}/>

            </div>
          </div>
          <div className="footer-links">
            <div className="quick-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#living">Living</a></li>
                <li><a href="#storage">Storage</a></li>
                <li><a href="#dining">Dining</a></li>
                <li><a href="#bedroom">Bedroom</a></li>
                <li><a href="#mattress">Mattress</a></li>
                <li><a href="#study">Study</a></li>
                <li><a href="#office">Office</a></li>
                <li><a href="#outdoor">Outdoor</a></li>
              </ul>
            </div>
            <div className="categories">
              <h4>Categories</h4>
              <ul>
                <li><a href="#residential">Residential</a></li>
                <li><a href="#institutional">Institutional</a></li>
                <li><a href="#commercial">Commercial</a></li>
              </ul>
            </div>
          </div>
        </div>
  
        <div className="footer-bottom">
          <p>2024 © All rights reserved — Cosy Comfort</p>
          <div className="payment-icons">
            <img src="https://s3-alpha-sig.figma.com/img/3ab9/eeb0/e196ede389387ab9e06d10d71ce9b10e?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LNTwUY4uSrRu2N7zb5JVUSxrebvHcRD16NWb6iCg~nP9UvpRlYMSof~ZUorH0ehgJFPOFR9wmDxuzdDoq-ez5fgNVVg4XdLzitmu5T~HKn1SS20Ox~ST5gis5Kp60DTVNn8OO8VgeNhOR3X0xIrGn8LXHEwdp~OFMluGXPRJMWsEeoU5PBpG93z45rOKcIaB4Lhk5CJA7Dw6BpLnPJL~VXfAzanIznxxRYq3EP1wi3JXo1i4oeKlBufOjH5IgKmaTu2PpmamU-KzrR91OaddMfoylzO8dibDAWYwRGh7p38g~QQx5H4w~EYAF5lKEmoP76bsyG7w0xMBCmtBRnmHcQ__" alt="Payments"  className = "payment-methods"/>
          </div>
        </div>
      </footer>
    );
  };


  export default Footer;