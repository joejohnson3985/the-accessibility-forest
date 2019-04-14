import React, { Component } from 'react';
import './Learn.scss';
import DefinitionCard from './DefinitionCard.js';
import MultipleChoice from './MultipleChoice.js';

class Learn extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div className="learn-container">
        <DefinitionCard />
        <MultipleChoice />
      </div>
    )
  }
}

export default Learn;