import React from 'react';
import './Service.scss';
import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaVideo, FaGamepad } from 'react-icons/fa';


function Services() {

  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.3 } },
  };

  const cardItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="services-section">
      <motion.h2
        className="services-heading"
        initial="hidden"
        animate="visible"
        variants={headingVariants}
      >
        SERVICES
      </motion.h2>
      <motion.p
        className="services-subtitle"
        initial="hidden"
        animate="visible"
        variants={subtitleVariants}
      >
        What we do to give you the premium tech solutions for your company
      </motion.p>

      <motion.div
        className="services-grid"
        initial="hidden"
        animate="visible"
        variants={cardVariants}
      >
        <motion.div className="service-card" variants={cardItemVariants}>
          <FaCode className="service-icon" />
          <h3>Web Design</h3>
          <p>
            AT HIVE We design quality sites for professional, modern and economical uses
          </p>
        </motion.div>

        <motion.div className="service-card" variants={cardItemVariants}>
          <FaPaintBrush className="service-icon" />
          <h3>Graphics Design</h3>
          <p>
            We bring you top notch graphic design, by creating quality and great imagery
          </p>
        </motion.div>

        <motion.div className="service-card" variants={cardItemVariants}>
          <FaVideo className="service-icon" />
          <h3>Video Editing</h3>
          <p>
            Our Video Editing sector has always been the best all over, Cudos to HIVE
          </p>
        </motion.div>

        <motion.div className="service-card" variants={cardItemVariants}>
          <FaGamepad className="service-icon" />
          <h3>Game Developing</h3>
          <p>
            We design high quality, user friendly, mobile friendly games
          </p>
         
        </motion.div>
 
      </motion.div>
    </div>
    
  );
}

export default Services;