import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          {/* <img src={assets.logo} alt="" /> */}
          <h1>Delicious</h1>
          <p >
            Delicious is your go-to food delivery platform, bringing your favorite meals from local restaurants straight to your doorstep. With a focus on speed, convenience, and great taste, we make ordering food easy and enjoyable. Whether you're craving a quick bite or planning a family dinner, Delicious delivers happiness—one meal at a time.
          </p>
          <div className="footer-social-icons">
         <a href="https://www.facebook.com/" target="_blank"> <img src={assets.facebook_icon} alt="facebook"/></a>   
          <a href="https://www.twitter.com/" target="_blank"> <img src={assets.twitter_icon} alt="twitter" /></a> 
           <a href="https://www.linkedin.com/" target="_blank"><img src={assets.linkedin_icon} alt="linkedin" /></a> 
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Platform</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in Touch</h2>
          <ul>
            <li>+91773889254</li>
            <li>contact@Delicious.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 202$ © Delicious.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
