import React, { useState, useEffect } from "react";
import "./About.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import faqIllustration from "../../Assets/Images/hero-img.png";
import skillsIllustration from "../../Assets/Images/skills.png";

const faqData = [
  {
    id: 1,
    question: "How do we ensure the accuracy of our tech reviews and articles",
    answer:
      "We research thoroughly, test products and follow strict editorial guidelines. Content is updated as technologies evolve.",
  },
  {
    id: 2,
    question:
      "Do we accept paid sponsorships or affiliate links in your contents",
    answer:
      "Yes, but our reviews stay unbiased.We disclose sponsorships and affilate links for transparency",
  },
  {
    id: 3,
    question: "Can I contribute an article or suggest a topic for coverage",
    answer:
      "Yes,submit your ideas via our contact page,and our team will review them",
  },
  {
    id: 4,
    question: "How can I stay updated with your latest content and news",
    answer:
      "Subscribe to our newsletter, follow us on social media, or enable site notifications",
  },
];
const skills = [
  { name: "FULL STACK WEB DEVELOPMENT", percentage: 92 },
  { name: "GRAPHICS DESIGN", percentage: 90 },
  { name: "VIDEO EDITING", percentage: 85 },
  { name: "GAME DEVELOPMENT", percentage: 80 },
];

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showScroll, setShowScroll] = useState(false);

  const toggleFAQ = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  useEffect(() => {
    const checkScrollTop = () => {
      setShowScroll(window.scrollY > 200);
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

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
        <motion.div
          className="about-left"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>

        <motion.div
          className="about-right"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>
      </div>

      <div className="faq-container">
        <motion.div
          className="faq-left"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            Our <span>FAQ</span>
          </h2>
          <p>
            Everything you need to know about our tech site: Answers to most of
            your common questions on reviews, content, contributions and more!
          </p>

          {faqData.map((faq, index) => (
            <motion.div
              key={faq.id}
              className="faq-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <div
                className={`faq-question ${openIndex === faq.id ? "open" : ""}`}
                onClick={() => toggleFAQ(faq.id)}
              >
                <span className="faq-number">{`0${faq.id}`}</span>
                <span className="faq-text">{faq.question}</span>
                <span className="arrow">
                  {openIndex === faq.id ? "˄" : "˅"}
                </span>
              </div>

              <AnimatePresence>
                {openIndex === faq.id && (
                  <motion.div
                    className="faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="faq-right"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img src={faqIllustration} alt="Illustration" />
        </motion.div>
      </div>
      <motion.div
        className="skills-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: "easeOut",
              when: "beforeChildren",
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <motion.div
          className="skills-left"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.2, once: false }} // Looser trigger
        >
          <motion.img
            src={skillsIllustration}
            alt="Team analyzing data"
            className="skills-image"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ amount: 0.2, once: false }}
          />
        </motion.div>

        <motion.div
          className="skills-right"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.2, once: false }}
        >
          <h2 className="skills-title">Our Amazing Skills</h2>
          <p className="skills-description">
            Our Team Specialises in cutting-edge technologies, from in-depth
            product reviews to expert analysis, software Development, and
            digital innovation...
          </p>

          <div className="skills-bars">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-item"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="skill-bar-bg">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{
                      duration: 1,
                      delay: 0.2 * index,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
