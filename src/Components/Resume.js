import React, { Component } from 'react';
import './Resume.css';

export default class Resume extends Component {
  render() {
    return (
      <div className="resume-container odd" id="resume">
        <embed src="http://example.com/the.pdf" width="500" height="375" type="application/pdf" />
      </div>
    );
  }
}
