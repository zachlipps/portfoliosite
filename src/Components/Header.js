import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="topbar-container">
        <a href="#welcome">Welcome</a>
        <a href="#intro">Intro</a>
        <a href="#projects">Projects</a>
        <a href="#pobbies">Hobbies</a>
        <a href="#resume">Resume</a>
        <a href="#contact-me">Contact Me</a>
      </div>
    );
  }
}
