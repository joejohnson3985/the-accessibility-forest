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

  componentWillMount = () => {
    this.getJsonData()
  }

  getJsonData = () => {
    fetch(`https://fe-apps.herokuapp.com/api/v1/memoize/1901/joejohnson3985/terms`)
    .then(data => data.json())
    .then(data => this.setState({ data: data.terms }))
    .catch(error => console.error(error))
  }

  render() {
    return (
      <div>
        <Header />
        <Actions data={this.state.data} />
      </div>
    );
  }
}

export default App;