import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Welcome to our model shop! We offer a wide range of high-quality
            model kits and collectibles for hobbyists and enthusiasts alike.
            Explore our collection of intricately detailed models, including
            cars, airplanes, ships, and more. Whether you're a seasoned builder
            or just starting, we have something for everyone. Enjoy the thrill
            of assembling and displaying these miniature masterpieces. Happy
            modeling!
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              70 To Ky Street, Tan Hung Thuan Ward, District 12, Ho Chi Minh
              City, Vietnam
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 0854 345 978</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: modelstore@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">One Piece</span>
          <span className="text">Naruto</span>
          <span className="text">Demon Slayder</span>
          <span className="text">Dragon Ball</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
