import React, { Component } from 'react';
import './Actions.scss'
import Welcome from './Welcome.js';
import Practice from './Practice.js'
import Learn from './Learn.js'

class Actions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      learn: false,
      practice: false
    }
  }

  nameForest = (name) => {
    this.props.nameForest(name);
  }

  render() {
    let whatToRender;
    if(!this.props.forestName) {
      whatToRender = <Welcome nameForest={this.nameForest}/>
    } else {
      whatToRender = <Learn />
    }
    return (
      <div className='actions-container'>
        {whatToRender}
      </div>
    )
  }
}

export default Actions;