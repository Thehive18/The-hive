import "./Hero.css";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "../../Assets/Images/hero-img.png";
// Logos
import myob from "../../Assets/Logos/client-1.png";
import belimo from "../../Assets/Logos/client-2.png";
import lifegroups from "../../Assets/Logos/client-3.png";
import lilly from "../../Assets/Logos/client-4.png";
import citrus from "../../Assets/Logos/client-5.png";
import trustly from "../../Assets/Logos/client-6.png";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const logos = [myob, belimo, lifegroups, lilly, citrus, trustly];

  // Partner logo animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const logoVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="hero">
      <div className="hero-container">
        {/* Slide-in from left for text content */}
        <motion.div
          className="hero-content"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1>
            Better IT solutions <br /> for your Website
          </h1>
          <p>
            We are a group of Tech Solution team trying <br />
            to move your company's forward
          </p>
          <div className="hero-buttons">
            <button
              className="get-started-btn"
              onClick={() => scrollToSection("about")}
            >
              Get Started
            </button>
            <button className="watch-video-btn">
              <span className="play-icon-wrapper">
                <Play className="play-icon" size={16} />
              </span>
              Watch Video
            </button>
          </div>
        </motion.div>

        {/* Slide-in from right + float effect for image */}
        <motion.div
          className="hero-image"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ willChange: "transform" }}
          >
            <img
              src={heroImage}
              alt="Tech solutions illustration"
              className="tech-illustration"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Drop-in effect for logos */}
      <motion.div
        className="partners"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="partners-container">
          {logos.map((logo, index) => (
            <motion.img
              key={index}
              src={logo}
              alt={`partner-${index}`}
              variants={logoVariants}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
