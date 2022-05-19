import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Aboutus from '../../components/Aboutus/Aboutus'

import { Events, Footer, Resource, Navbar, Landing } from '../../components'

function HomePage() {
  return (
    <div>
      <Navbar />
      <Aboutus />
      <Landing  />
      <Events />
      <Resource/>
      <Footer />
    </div>
  )
}

export default HomePage