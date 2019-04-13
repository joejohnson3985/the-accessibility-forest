import React, { Component } from 'react';
import './App.scss';
import Header from './Header.js';
import Welcome from './Welcome.js';
import Practice from './Practice.js';
import Forest from './Forest.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Welcome />
      </div>
    );
  }
}

export default App;