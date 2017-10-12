import React, { Component } from 'react';
import Header from './Components/Header';
import Intro from './Components/Intro';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import Welcome from './Components/Welcome';
import Footer from './Components/Footer';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="scroll-container">
          <Welcome />
          <Intro />
          <Projects />
          <Resume />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
