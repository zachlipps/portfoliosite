import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="topbar-container">
        <AnchorLink offset="50" href="#welcome">
          Back to Top
        </AnchorLink>
        <AnchorLink offset="50" href="#intro">
          Introduction
        </AnchorLink>
        <AnchorLink offset="50" href="#resume">
          Skills
        </AnchorLink>
        <AnchorLink offset="50" href="#projects">
          Projects
        </AnchorLink>
        <AnchorLink offset="50" href="#contact-me">
          Contact Me
        </AnchorLink>
      </div>
    );
  }
}
