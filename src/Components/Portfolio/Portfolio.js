import React, { useState } from 'react';
import './Portfolio.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi'; 

import img1 from './hero-img.png';
import img2 from './hero-img.png';
import img3 from './hero-img.png';
import img4 from './hero-img.png';
import img5 from './hero-img.png';
import img6 from './hero-img.png';

const allProjects = [
  { id: 1, category: 'Web', img: img1 },
  { id: 2, category: 'Web', img: img2 },
  { id: 3, category: 'Graphics', img: img3 },
  { id: 4, category: 'Graphics', img: img4 },
  { id: 5, category: 'Games', img: img5 },
  { id: 6, category: 'Games', img: img6 },
];

const categories = ['All', 'Web', 'Graphics', 'Games'];

const Portfolio = () => {
  const [selected, setSelected] = useState('All');
  const [modalIndex, setModalIndex] = useState(null);

  const filteredProjects = selected === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === selected);

  const handleNext = () =>
    setModalIndex((modalIndex + 1) % filteredProjects.length);
  const handlePrev = () =>
    setModalIndex((modalIndex - 1 + filteredProjects.length) % filteredProjects.length);

  return (
    <section className="portfolio">
      <h2 className="title">PORTFOLIO</h2>
      <div className="underline"></div>
      <p className="description">
        Explore our work and see how we bring innovation to life. From cutting-edge tech reviews to in-depth projects,
        our portfolio highlights our Expertise, Creativity and commitment to excellence. Check out our latest achievements and see what we can do.
      </p>

      <div className="buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={selected === cat ? 'active' : ''}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid">
        <AnimatePresence>
          {filteredProjects.map((item, index) => (
            <motion.div
              className="card"
              key={item.id}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 80 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={item.img}
                alt="project"
                onClick={() => setModalIndex(index)} 
              />
              <div
                className="overlay"
                onClick={() => setModalIndex(index)} 
              >
           
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {modalIndex !== null && (
        <div className="modal">
          <span className="close" onClick={() => setModalIndex(null)}>
            <FiX /> 
          </span>
          <img src={filteredProjects[modalIndex].img} alt="preview" />
          <div className="modal-controls">
            <button onClick={handlePrev}>←</button>
            <button onClick={handleNext}>→</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;