import React from 'react'
import { motion } from 'framer-motion';

import { Events, Footer, Resource, Navbar, Landing, About, Team } from '../../components'

import './HomePage.css'

function HomePage() {
  return (
    <motion.div
      className='homePage'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <Navbar />
      <Landing  />
      <About />
      <Events />
      <Resource/>
      <Team />
      <Footer />
    </motion.div>
  )
}

export default HomePage