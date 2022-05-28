import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

import { HomePage, TeamPage ,EventPage, FaqPage } from '../pages'
import { PageNotFound } from '../components'

function AnimatedRoutes() {

  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes