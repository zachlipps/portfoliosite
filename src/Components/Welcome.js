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
          <h1>Welcome</h1>
          <div className="social-media">
            <img src={linkedInLogo} alt="" className="logo" />
            <img src={gitHubLogo} alt="" className="logo" />
          </div>
        </div>
      </div>
    );
  }
}
