import React from 'react'

import { Events, Footer, Resource, Navbar, Landing, About } from '../../components'

function HomePage() {
  return (
    <div>
      <Navbar />
      <Landing  />
      <About />
      <Events />
      <Resource/>
      <Footer />
    </div>
  )
}

export default HomePage