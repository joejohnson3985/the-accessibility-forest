import React, { Component } from 'react';
import './App.scss';
import Header from './Header.js';
import Forest from './Forest.js';
import Actions from './Actions.js'
import Terms from './accessibility-data.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      forestName: ''

    }
  }



  nameForest = (name) => {
    this.setState({
      forestName: name
    })
  }

  render() {

    console.log(Terms)
    return (
      <div>
        <Header />
        <Actions forestName={this.state.forestName} nameForest={this.nameForest}/>
        <Forest forestName={this.state.forestName} />
      </div>
    );
  }
}

export default App;