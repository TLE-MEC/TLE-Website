import React from 'react'
import { motion } from 'framer-motion';

import CustomTitle from '../../utils/CustomTitle'

function PageNotFound() {
  return (
    <motion.div 
      className='pageNotFound'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
        <CustomTitle title="Page Not Found"/>
        <h1>OOOOOpssss!!!!!!</h1>
    </motion.div>
  )
}

export default PageNotFound