import React, { Component } from 'react';
import './App.scss';
import Header from './Header.js'
import Practice from './Practice.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <Header />
      <Practice />
      <Forest />
    )
  }
}