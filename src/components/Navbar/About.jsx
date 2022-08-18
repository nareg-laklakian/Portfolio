import React from 'react';
import { Link } from 'react-scroll';
import codingImage from '../../img/img.svg';

function About() {
  return (
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
      <div className="image-coding">
        <img src={codingImage} alt="codingImage" />
      </div>
    </div>
  );
}

export default About;
