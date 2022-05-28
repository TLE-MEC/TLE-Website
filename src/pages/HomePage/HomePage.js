import React from 'react'
import { motion } from 'framer-motion';

import { Events, Footer, Resource, Navbar, Landing, About, Team } from '../../components'

function HomePage() {
  return (
    <motion.div
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