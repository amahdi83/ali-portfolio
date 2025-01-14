/**
 * @copyright 2024 AliMahdi
 * @license Apache-2.0
 */


/* Components */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/Header"
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Publications from './pages/Publications';
import Contact from './pages/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router basename="/ali-portfolio">
      <Header />
      <main className="mt-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;