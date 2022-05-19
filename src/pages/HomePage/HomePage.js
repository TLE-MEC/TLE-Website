import React from 'react'
import Aboutus from '../../components/Aboutus/Aboutus'

import { Events, Footer, Resource, Navbar, Landing } from '../../components'

function HomePage() {
  return (
    <div>
      <Navbar />
      <Landing  />
      <Aboutus />
      <Events />
      <Resource/>
      <Footer />
    </div>
  )
}

export default HomePage