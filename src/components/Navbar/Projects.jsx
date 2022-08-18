import React from 'react';

import calculator from '../../img/calculator.PNG';
import pool from '../../img/pool-game.PNG';

function Projects() {
  return (
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
  );
}

export default Projects;
