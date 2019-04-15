import React, { Component } from 'react';
import './App.scss';
import Header from './Header.js';
import Actions from './Actions.js'
import Terms from './accessibility-data.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: Terms
    }
  }



  

  render() {

    return (
      <div>
        <Header />
        <Actions data={this.state.data}/>
      </div>
    );
  }
}

export default App;