import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Laklak
      </a>
      <text className="text"> | </text>
      <Link
        className="content-projects"
        to="container-projects"
        smooth={true}
        duration={500}
      >
        Projects
      </Link>
      <a href="https://github.com/nareg-laklakian" className="github">
        github
      </a>
      <a
        href="https://www.linkedin.com/in/nareg-laklakian-b10120200/"
        className="linkedIn"
      >
        linkedIn
      </a>
    </nav>
  );
}

export default Navbar;
