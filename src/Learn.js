import React, { Component } from 'react';
import './Learn.scss';
import DefinitionCard from './DefinitionCard.js';
import MultipleChoice from './MultipleChoice.js';

class Learn extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    console.log(this.props.data)
    return (
      <div className="learn-container">
        <DefinitionCard data={this.props.data}/>
        <MultipleChoice />
      </div>
    )
  }
}

export default Learn;