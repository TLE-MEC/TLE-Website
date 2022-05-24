import React from 'react'

import { Events, Footer, Resource, Navbar, Landing, About, Team } from '../../components'

function HomePage() {
  return (
    <div>
      <Navbar />
      <Landing  />
      <About />
      <Events />
      <Resource/>
      <Team />
      <Footer />
    </div>
  )
}

export default HomePage