import React from 'react';
import './index.css'
import Navbar from './components/Navbar';
import Socials from './components/Socials';
import Home from './Sections/Home';
import About from './Sections/About';
import Skills from './Sections/Skills';
import Edu from './Sections/Edu';
import Project from './Sections/Project';
import Contact from './Sections/Contact';
import Footer from './Sections/Footer';


function App() {
  return (
    <div className="App">
    
      <Navbar />
      <Socials />
      <Home />
      <About />
      <Skills />
      <Edu />
      <Project />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
