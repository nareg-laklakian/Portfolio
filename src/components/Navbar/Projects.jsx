import React from 'react';

import calculator from '../../img/calculator.PNG';
import pool from '../../img/pool-game.PNG';
import dice from '../../img/dice-high-number-game.PNG';
import guess from '../../img/guess-number-game.PNG';

function Projects() {
  return (
    <div className="container-projects">
      <div className="projects-title">
        <h1>Projects</h1>
      </div>
      <div className="projects">
        <div className="first-row-space">
          <div className="calculator-image">
            <img src={calculator} alt="calculator" />
          </div>
          <div className="pool-image">
            <img src={pool} alt="pool game" />
          </div>
        </div>
        <div className="second-row-space">
          <div className="dice-image">
            <img src={dice} alt="dice game" />
          </div>
          <div className="guess-number-image">
            <img src={guess} alt="guess-number-game" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
