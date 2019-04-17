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
    let whatToRender = <p>Preparing your terms...</p>
    if(this.props.currentTerm && this.props.wrongAnswers) {
      whatToRender = <div className='term-container'>
                      <DefinitionCard definition={this.props.currentTerm.definition} termType={this.props.currentTerm.type} />
                      <MultipleChoice currentAnswer={this.props.currentTerm.term} wrongAnswers={this.props.wrongAnswers} displayNextTerm={this.props.displayNextTerm} getCurrentTerm={this.props.getCurrentTerm} />
                    </div>
    }
    return (
      <div className='learn-container'>
        <hgroup>
          <h1>Match</h1>
          <h5>Get 3 correct and a tree will grow in your forest!</h5>
        </hgroup>
        {whatToRender}
      </div>
    )
  }
}

export default Learn;