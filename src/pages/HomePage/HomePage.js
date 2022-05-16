import React from 'react'


import { Events, Footer, Resource, Navbar } from '../../components'

function HomePage() {
  return (
    <div>
      <Navbar  />
      <Events />
      <Resource/>
      <Footer />

    </div>
  )
}

export default HomePage