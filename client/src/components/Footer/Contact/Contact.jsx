import React from "react";

import "./Contact.scss";

import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact-section">
      <h1 className="title">CONTACT US</h1>
      <div className="contact-content">
        <div className="contact-form">
          <div className="input-double">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
          </div>
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message"></textarea>
          <button>Submit</button>
        </div>
        <div className="contact-info">
          <div className="info">
            <FaLocationArrow />
            <span>
              70 To Ky Street, Tan Hung Thuan Ward, District 12, Ho Chi Minh
              City, Vietnam
            </span>
          </div>
          <div className="info">
            <FaMobileAlt />
            <span>0854 345 978</span>
          </div>
          <div className="info">
            <FaEnvelope />
            <span>modelstore@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
