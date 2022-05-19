import React from 'react'


import { Events, Footer, Resource, Navbar, Landing } from '../../components'

function HomePage() {
  return (
    <div>
      <Navbar  />
      <Landing  />
      <Events />
      <Resource/>
      <Footer />

    </div>
  )
}

export default HomePage