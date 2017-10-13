import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from './images/Swiss1.JPG';
import img2 from './images/Swiss2.JPG';
import './Slider.css';

export default class Slider extends Component {
  render() {
    return (
      <Carousel
        autoPlay
        showArrows
        infiniteLoop
        interval={10000}
        transitionTime={500}
        showStatus={false}
        stopOnHover={false}
        useKeyboardArrows
      >
        <div>
          <img src={img1} alt="nope" />
        </div>
        <div>
          <img src={img2} alt="nope" />
        </div>
      </Carousel>
    );
  }
}
