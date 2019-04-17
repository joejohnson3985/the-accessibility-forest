import React, { Component } from 'react';
import './App.scss';
import Header from './Header.js';
import Actions from './Actions.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }



  render() {
    return (
      <div>
        <Header />
        <Actions />
      </div>
    );
  }
}

export default App;