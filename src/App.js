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
      forestName: '',
      data: Terms
    }
  }



  nameForest = (name) => {
    this.setState({
      forestName: name
    })
  }

  render() {

    return (
      <div>
        <Header />
        <Actions data={this.state.data} forestName={this.state.forestName} nameForest={this.nameForest}/>
        <Forest forestName={this.state.forestName} />
      </div>
    );
  }
}

export default App;