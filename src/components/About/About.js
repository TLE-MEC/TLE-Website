import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import AOS from 'aos'

import './About.css';

// import grid from '../../assets/svg/grid.svg'
import about_cubo from '../../assets/svg/about_cubo.svg'
import about_ellipse_circle from '../../assets/svg/about_ellipse_circle.svg'

const texts = ["DSA Mentorship", "Programming Bootcamps", "Coding Contests", "Learning Sessions"];
const variants = {
  enter: direction => {
    return {
      y: -20,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1
  },
  exit: direction => {
    return {
      zIndex: 0,
      opacity: 0
    };
  }
};

function About() {

  AOS.init({
    duration: 800,
  })

  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      let next = index + 1;
      if (next === texts.length) {
        next = 0;
      }
      setIndex(next);
    }, 3 * 1000);
  }, [index, setIndex]);

  return (
    <div className="about" id='about'>
      <img src={about_ellipse_circle} className='about_ellipse_circle' alt="" />
      <div className='about__container'>
        <div className='about__top' data-aos="fade-right">
          <h1 className='section__header'>ABOUT US</h1>
          <p>
            TLE MEC is the Competitive Programming and Data Structures & Algorithms club of Govt. Model Engineering College, Thrikkakara, Kochi.
          </p>
          <p>
            We’re an enthusiastic community of students who seek to inculcate a culture of competitive programming and problem-solving in the campus while helping students gain exposure within a peer-learning environment.
          </p>
        </div>
        <div className='about__bottom'>
          <div className='about_bottom_content' data-aos="flip-up">
            <div className='abc_top'>
              <h3>What do we do ? </h3>
            </div>
            <div className='abc_bottom'>
              <AnimatePresence>
                <motion.p
                  style={{ position: "absolute" }}
                  variants={variants}
                  key={index}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    y: { type: "spring", stiffness: 300, damping: 300 }, opacity: { duration: 0.2 }
                  }}
                >
                  {texts[index]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
          {/* <p>Data Structures and Algorithms Competitive Programming </p> */}
        </div>
        <img src={about_cubo} alt="" className="about_cubo" />
      </div>
    </div>
  );
}

export default About;
