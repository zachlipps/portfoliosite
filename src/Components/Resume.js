import React, { Component } from 'react';
import './Resume.css';

export default class Resume extends Component {
  render() {
    return (
      <div className="resume-container odd" id="resume">
        <p className="title">SKILLS</p>
        <p>
          My preferred Frontend frameworks are React, React Native, and Angular. I love learning new
          tech and appreciate the time it takes to fit the right technology for each unique problem.
          However, Here is an overview of my skills to date:
        </p>
        <p>
          ⬧ JavaScript ⬧ Node ⬧ Bootstrap ⬧ ES6 ⬧ MongoDB ⬧ JSX ⬧ HTML ⬧ MySQL ⬧ Git ⬧ CSS ⬧
          Firebase ⬧ GraphQL ⬧ Apollo ⬧ React ⬧ React Native ⬧ Webpack ⬧ Redux ⬧ Babel ⬧jQuery
        </p>
      </div>
    );
  }
}
