import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact-section">
      <h2 className="section-title">CONTACT</h2>
      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-info">
          <div className="info-item">
            <span className="icon">📍</span>
            <div>
              <strong>Location:</strong><br />
             <strong> E 12, ATRUMENAL, LONDON</strong>
            </div>
          </div>

          <div className="info-item">
            <span className="icon">📧</span>
            <div>
              <strong>Email:</strong>
              <br />
              admin@hive.com
            </div>
          </div>

          <div className="info-item">
            <span className="icon">📞</span>
            <div>
              <strong>Call:</strong>
              <br />
              +234900000000000 (Whatsapp Only)
            </div>
          </div>

          <iframe
            title="Google Map"
            src="https://maps.google.com/maps?q=Downtown%20Conference%20Center&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="map"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Right Side */}
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
          </div>
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
