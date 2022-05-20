import React from 'react';

import './About.css';

import grid from '../../assets/svg/grid.svg'
import about_cubo from '../../assets/svg/about_cubo.svg'
import about_ellipse_circle from '../../assets/svg/about_ellipse_circle.svg'


function About() {
  return (
    <div className="about" id='about'>
      <div className='about__container'>
        <div className='about__top'>
          <h1>ABOUT US</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis hendrerit proin mattis fusce. Adipiscing integer ornare id nisl elit, elit. Diam aliquam sit pellentesque odio venenatis nisl matti
          </p>
        </div>
        <div className='about__bottom'>

        </div>
      </div>
    </div>
  );
}

export default About;
