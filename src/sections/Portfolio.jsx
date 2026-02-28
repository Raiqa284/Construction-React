import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

const Portfolio = () => {
  const scrollRef = useRef(null);

  // 🔥 AUTO IMPORT ALL IMAGES FROM src/projects
  const images = Object.values(
    import.meta.glob('../projects/*.{png,jpg,jpeg,svg}', {
      eager: true,
    })
  ).map((module) => module.default);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 340;

      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div id="projects" className="w-full bg-black relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col items-center gap-[20px]"
      >
        <motion.h3
          variants={slideUpVariants}
          className="text-pink-500 text-2xl uppercase"
        >
          Portfolio
        </motion.h3>

        <motion.h2
          variants={slideUpVariants}
          className="uppercase text-white text-5xl font-bold text-center"
        >
          Our  Projects
        </motion.h2>

        <motion.div
          variants={zoomInVariants}
          className="w-[120px] h-[6px] bg-pink-500"
        />

        <div className="relative w-full mt-6">

          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-white p-3 bg-black bg-opacity-50 rounded-full hover:bg-opacity-80"
          >
            <FaArrowLeft size={24} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-white p-3 bg-black bg-opacity-50 rounded-full hover:bg-opacity-80"
          >
            <FaArrowRight size={24} />
          </button>

          <motion.div
            ref={scrollRef}
            variants={zoomInVariants}
            className="flex gap-6 overflow-x-hidden scroll-smooth snap-x snap-mandatory"
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Project ${index + 1}`}
                className="h-[250px] w-[320px] object-cover rounded-xl flex-shrink-0 snap-center"
              />
            ))}
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;