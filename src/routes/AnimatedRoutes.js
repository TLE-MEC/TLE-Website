import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import {
  HomePage,
  TeamPage,
  EventPage,
  FaqPage,
  BlogPage,
  BlogListPage,
  ShortlinkRedirect,
} from "../pages";
import { PageNotFound, Loader } from "../components";

function AnimatedRoutes() {
  const location = useLocation();

  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 1500);
  }, []);

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={spinner ? <Loader /> : <HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/events/:eventSlug" element={<EventPage />} />
        <Route path="/faq" element={<FaqPage />} />

        <Route path="/blogs" element={<BlogListPage />} />
        <Route path="/blog/:id" element={<BlogPage />} />

        {/* Shortlinks backed by Sanity `shortlink` docs, e.g. /s/hw */}
        <Route path="/s/:slug" element={<ShortlinkRedirect />} />
        <Route path="/go/:slug" element={<ShortlinkRedirect />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
