import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import CustomTitle from '../../utils/CustomTitle'

import './PageNotFound.css'

import about_ellipse_circle from '../../assets/svg/about_ellipse_circle.svg'
import pnf_circle from '../../assets/svg/landing_circle.svg'
import pnf_ellipse from '../../assets/svg/ellipse1.svg'


function PageNotFound() {
  return (
    <motion.div 
      className='pageNotFound'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <CustomTitle title="Page Not Found"/>
      <img src={about_ellipse_circle} alt="" className="pnf_ellipse_circle" />
      <img src={pnf_circle} alt="" className="pnf_circle" />
      <img src={pnf_ellipse} alt="" className="pnf_ellipse" />

      <div className='pnf__container'>
        <p>Page Not Found</p>
        <div className='pnf__content'>
          <span className='fnf_bold'>4</span>
          <span className='fnf_bold'>0</span>
          <span className='fnf_bold'>4</span>
        </div>
        <Link to='/'>
          <button className='pnf_btn'>Back to Homepage</button>
        </Link>
      </div>  
    </motion.div>
  )
}

export default PageNotFound