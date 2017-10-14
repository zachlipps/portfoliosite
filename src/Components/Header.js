import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="topbar-container">
        <AnchorLink href="#welcome">Welcome</AnchorLink>
        <AnchorLink href="#intro">Intro</AnchorLink>
        <AnchorLink href="#projects">Projects</AnchorLink>
        <AnchorLink href="#resume">Resume</AnchorLink>
        <AnchorLink href="#contact-me">Contact Me</AnchorLink>
      </div>
    );
  }
}
