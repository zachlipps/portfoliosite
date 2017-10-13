import React, { Component } from 'react';
import gitHubLogo from './images/githubLogo.png';
import linkedInLogo from './images/linkedin.png';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-container" id="contact-me">
          <div>
            <p>
              <a href="mailto:zacharylipps10@gmail.com">zacharylipps10@gmail.com </a>
            </p>
          </div>
          <div>
            <p>
              <a href="tel:6505158151">650-515-8151</a>
            </p>
          </div>
          <div className="footer-info">
            <a href="https://github.com/zachlipps" target="_blank" rel="noopener noreferrer">
              <img src={gitHubLogo} alt="" className="bottom-logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/zach-lipps/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedInLogo} alt="" className="bottom-logo" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
