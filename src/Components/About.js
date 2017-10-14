import React, { Component } from 'react';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div className="intro-container odd" id="about">
        <div>Hi there, my name is</div>
        <img src="http://via.placeholder.com/600x300" alt="" className="about-img" />
      </div>
    );
  }
}
