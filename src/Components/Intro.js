import React, { Component } from 'react';
import './Intro.css';
import Profile from './images/Profile.png';

export default class Intro extends Component {
  render() {
    return (
      <div className="intro-container odd" id="intro">
        <p className="title">INTRODUCTION</p>
        <img src={Profile} alt="loading" className="intro-image" />
        <p className="intro-text">Hello friends,</p>
        <p className="intro-text">
          My name is Zach Lipps, I am a passionate Frontend Engineer with a strong attention to
          detail and an appreciation for a clean, intuituve UI.
        </p>
      </div>
    );
  }
}
