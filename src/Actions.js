import React, { Component } from 'react';
import './Actions.scss'
import Welcome from './Welcome.js';
import Learn from './Learn.js';
import Forest from './Forest.js';

class Actions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forestName: '',
      learn: false,
      practice: false,
      points: 0
    }
  }

  nameForest = (name) => {
    this.setState({
      forestName: name
    })
  }

  render() {
    let whatToRender;
    if(!this.state.forestName) {
      whatToRender = <Welcome nameForest={this.nameForest}/>
    } else {
      whatToRender = <Learn data={this.props.data}/>
    }
    return (
      <div>
        <div className='actions-container'>
          {whatToRender}
        </div>
        <Forest forestName={this.state.forestName} />
      </div>
    )
  }
}

export default Actions;