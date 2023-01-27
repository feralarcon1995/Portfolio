import React, { useEffect } from 'react';
import './App.css'
import { GlobalStyles } from './styles/GlobalStyles';
import {  Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import NotFound from './pages/NotFound';
import { AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Project from './pages/Project';

function App() {
  const location = useLocation();
  const root = document.documentElement;
  const width = window.innerWidth;

  window.addEventListener("resize", () => {
    const newWidth = window.innerWidth;
    if (newWidth < 500) {
      if (newWidth !== width) {
        window.location.reload();
      }
    } else {
      window.location.reload();
    }
  })

  useEffect(() => {
    root.style.setProperty("--VW", `${window.innerWidth * 0.01}px`);
    root.style.setProperty("--VH", `${window.innerHeight * 0.01}px`);
  }, [root.style])

  return (
    <>
      <GlobalStyles />
      <CustomCursor />
      <AnimatePresence>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/works" element={<Work />} />
          <Route exact path="/works/:projectID" element={<Project/>}/>
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>



    </>

  )
}

export default App
