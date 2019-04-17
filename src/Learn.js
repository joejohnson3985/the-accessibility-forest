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

  refresh = () => {
    window.location.reload()
  }

  clear = () => {
    localStorage.clear()
    window.location.reload()
  }



  render() {
    let whatToRender = <p>Loading...</p>
    if(this.props.completed) {
      whatToRender = <h3 className='complete' onClick={this.clear}> DONE </h3>
    } else if(this.props.continuePractice) {
      whatToRender = <h3 className='complete' onClick={this.refresh}> CONTINUE LEARNING </h3>
    } else if(this.props.currentTerm && this.props.wrongAnswers) {
      whatToRender = <div className='term-container'>
                      <DefinitionCard definition={this.props.currentTerm.definition} termType={this.props.currentTerm.type} />
                      <MultipleChoice currentAnswer={this.props.currentTerm.term} wrongAnswers={this.props.wrongAnswers} displayNextTerm={this.props.displayNextTerm} />
                    </div>
    }
    return (
      <div className='learn-container'>
        <hgroup>
          <h1>Match</h1>
          <h3>Get 3 correct and a tree will grow in your forest!</h3>
        </hgroup>
        {whatToRender}
        <h2>{this.props.points} Correct Answers</h2>
      </div>
    )
  }
}

export default Learn;