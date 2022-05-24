import React from 'react';

import './About.css';

// import grid from '../../assets/svg/grid.svg'
import about_cubo from '../../assets/svg/about_cubo.svg'
import about_ellipse_circle from '../../assets/svg/about_ellipse_circle.svg'


function About() {
  return (
    <div className="about" id='about'>
      <img src={about_ellipse_circle} className='about_ellipse_circle' alt="" />
      <div className='about__container'>
        <div className='about__top'>
          <h1 className='section__header'>ABOUT US</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis hendrerit proin mattis fusce. Adipiscing integer ornare id nisl elit, elit. Diam aliquam sit pellentesque odio venenatis nisl matti
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis hendrerit proin mattis fusce. Adipiscing integer ornare id nisl elit, elit. Diam aliquam sit pellentesque odio venenatis nisl matti
          </p>
        </div>
        <div className='about__bottom'>
          <div className='about_bottom_content'>
            <div className='abc_top'>
              <h3>What do we do ? </h3>
            </div>
            <div className='abc_bottom'>
              <p>Data Structures and Algorithms Competitive Programming </p>
            </div>
          </div>
        </div>
        <img src={about_cubo} alt="" className="about_cubo" />  
      </div>
    </div>
  );
}

export default About;
