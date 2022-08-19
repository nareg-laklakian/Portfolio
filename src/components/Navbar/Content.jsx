import React from 'react';
<<<<<<< HEAD
import img from '../../img/img.svg';
import calculator from '../../img/calculator.PNG';
import pool from '../../img/pool-game.PNG';
import { Link } from 'react-scroll';
=======
import Projects from './Projects';
import Skills from './Skills';
import Navbar from './Navbar';
import About from './About';
>>>>>>> development

function Content() {
  return (
    <div>
<<<<<<< HEAD
      <nav className="nav">
        <a href="/" className="site-title">
          Laklak
        </a>
        <text className="text"> | </text>
        {/* <a
          className="content-projects"
          // onClick={this.scrollTo}
          // to="container-projects"
        >
          {' '}
          Projects
        </a> */}
        <Link
          className="content-projects"
          to="container-projects"
          smooth={true}
          duration={500}
        >
          Projects
        </Link>
        <a href="https://github.com/nareg-laklakian" className="github">
          {' '}
          {/* <img src={github} alt="github" width={15} /> */}
          github
        </a>
        <a
          href="https://www.linkedin.com/in/nareg-laklakian-b10120200/"
          className="linkedIn"
        >
          {' '}
          {/* <img src={linkedin} alt="linkedin" width={15} /> */}
          linkedIn
        </a>
      </nav>
      <main>
        <div className="container">
          <div className="content">
            <h1>
              Hello, I'm Nareg.
              <br></br>
              Software is what i do
            </h1>
            <p>
              A software engineer with a passion for bringing concepts to life,
              while also solving every problem that comes with it. Jack of all
              trades.
            </p>
            <div>
              <div className="buttons">
                <Link
                  className="cta-Projects"
                  to="container-projects"
                  smooth={true}
                  duration={500}
                >
                  {' '}
                  See My Projects
                </Link>
                <Link
                  className="cta-Skills"
                  to="list-skills"
                  smooth={true}
                  duration={500}
                >
                  Skills
                </Link>
              </div>
            </div>
          </div>
          <div className="image">
            <img src={img} alt="img" />
          </div>
        </div>
        <div className="container-projects">
          <div className="projects-title">
            <h1>Projects</h1>
          </div>
          <div className="projects">
            <div className="calculator-image">
              <img src={calculator} alt="calculator" />
            </div>
            <div className="pool-game-image">
              <img src={pool} alt="pool game" />
            </div>
          </div>
        </div>

        <div className="container-skills">
          <div className="text-center">
            <h1>
              <br></br>
              Skills
            </h1>
          </div>
          <div className="list-skills">
            <div className="skill-1">
              <h2>Javascript</h2>
            </div>
            <div className="skill-2">
              <h2>HTML / CSS</h2>
            </div>
            <div className="skill-3">
              <h2>Solidity</h2>
            </div>
            <div className="skill-4">
              <h2>TypeScript</h2>
            </div>
            <div className="skill-5">
              <h2>React</h2>
            </div>
            <div className="skill-6">
              <h2>NodeJs</h2>
            </div>
            <div className="skill-7">
              <h2>MongoDB</h2>
            </div>
          </div>
        </div>
      </main>
      <figure></figure>
=======
      <Navbar />
      <About />
      <Projects />
      <Skills />
>>>>>>> development
    </div>
  );
}

export default Content;
