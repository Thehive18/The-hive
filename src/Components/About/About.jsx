import React, { useState, useEffect } from "react";
import "./About.css";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 200) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 200) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  return (
    <motion.section
      className="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="about"
    >
      <h2 className="about-title">ABOUT US</h2>
      <div className="underline">
        <span></span>
      </div>

      <div className="about-content">
        <div className="about-left">
          <p className="about-intro">
            We are a group of certified IT company that gives you the following
            as a means of satisfaction
          </p>

          <ul className="about-list">
            <li>
              <FaCheckCircle className="icon" /> We give you clean and smooth
              Graphic designs
            </li>
            <li>
              <FaCheckCircle className="icon" /> Quality and professional video
              editing
            </li>
            <li>
              <FaCheckCircle className="icon" /> Website Development
            </li>
          </ul>
        </div>

        <div className="about-right">
          <p className="about-desc">
            We help you in all forms of Graphic designs like, video editing,
            logo making and so on. In terms of websites, we are not left behind
            also. We create websites with captivating intelligence. We also
            provide you with great social media advertising. Click on the button
            to learn more about us.
          </p>

          <button
            className="learn-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Learn More
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
