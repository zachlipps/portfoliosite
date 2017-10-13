import React, { Component } from 'react';
import Slider from './imageslider/Slider';
import linkedInLogo from './images/linkedin.png';
import gitHubLogo from './images/githubLogo.png';
import './Welcome.css';

export default class Welcome extends Component {
  render() {
    return (
      <div className="welcome-container" id="welcome">
        <Slider />
        <div className="welcome-modal">
          <h1>Good morning starshine, the earth says Hello!</h1>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/zach-lipps/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedInLogo} alt="" className="logo" />
            </a>
            <a href="https://github.com/zachlipps" target="_blank" rel="noopener noreferrer">
              <img src={gitHubLogo} alt="" className="logo" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
