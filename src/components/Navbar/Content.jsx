import React from 'react';
import Projects from './Projects';
import Skills from './Skills';
import Navbar from './Navbar';
import About from './About';

function Content() {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}

export default Content;
