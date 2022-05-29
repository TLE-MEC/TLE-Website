import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import AOS from 'aos'

import './About.css';

// import grid from '../../assets/svg/grid.svg'
import about_cubo from '../../assets/svg/about_cubo.svg'
import about_ellipse_circle from '../../assets/svg/about_ellipse_circle.svg'

const texts = ["Data Structures and Algorithms Competitive Programming", "Hello helllo hello", "bye bye bye hehehe yeheh"];
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
    }, 4 * 1000);
  }, [index, setIndex]);

  return (
    <div className="about" id='about'>
      <img src={about_ellipse_circle} className='about_ellipse_circle' alt="" />
      <div className='about__container'>
        <div className='about__top' data-aos="fade-right">
          <h1 className='section__header'>ABOUT US</h1>
          <p>
            TLE MEC is the Competitive Programming and Data Structures & Algorithms club of MEC. It was with the motive of having a club to guide students in honing their 
            problem-solving abilities and analytical skills, that we launched the Codechef MEC Chapter in 2020, and later transformed it to the independent club of TLE MEC. 
          </p>
          <p>
            We seek to inculcate a culture of competitive programming and problem-solving in the campus while helping students gain exposure within a peer-learning environment. 
            Proficiency in these fields after all, will help students face real-world problems from both a personal as well as a professional skill development perspective.
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
                    y: { type: "spring", stiffness: 300, damping: 300 }, opacity: { duration: 0.2  }
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
