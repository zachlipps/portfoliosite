import React, { Component } from 'react';
import './Projects.css';
import CityRage from './images/cityRage.png';
import DayTrip from './images/dayTrip.png';

export default class Projects extends Component {
  render() {
    return (
      <div className="projects-container" id="projects">
        <p className="title">PROJECTS</p>
        <div className="project-layout">
          <div className="project-layout-child">
            <img src={CityRage} alt="loading" className="project-images" />
          </div>
          <div className="project-text project-layout-child">
            <p>CityRage</p>
            <p>
              City Rampage is a king-of-the-hill game originally designed for the browser. The game
              plays out fairly quickly, and provides many opportunities to push your luck in an
              attempt to be the victor.
            </p>
          </div>
        </div>
        <div className="project-layout">
          <div className="project-layout-child">
            <img src={DayTrip} alt="loading" className="project-images" />
          </div>
          <div className="project-text project-layout-child">
            <p>DayTrip</p>
            <p>
              City Rampage is a king-of-the-hill game originally designed for the browser. The game
              plays out fairly quickly, and provides many opportunities to push your luck in an
              attempt to be the victor.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
