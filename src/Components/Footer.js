import React, { Component } from 'react';
import gitHubLogo from './images/githubLogo.png';
import linkedInLogo from './images/linkedin.png';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <h1>Contact Me!</h1>
        <div className="footer-container" id="contact-me">
          <div className="footer-info">
            <p>
              Cell: <a href="tel:6505158151">650-515-8151</a>
            </p>
            <p>
              Email: <a href="mailto:zacharylipps10@gmail.com">zacharylipps10@gmail.com </a>
            </p>
          </div>
          <a href="https://github.com/zachlipps" target="_blank" rel="noopener noreferrer">
            <img src={gitHubLogo} alt="" className="logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/zach-lipps/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedInLogo} alt="" className="logo" />
          </a>
        </div>
      </div>
    );
  }
}
