import React, { Component } from 'react';
import MultipleChoiceItem from './MultipleChoiceItem.js';
import './MultipleChoice.scss';

class MultipleChoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  displayAnswers = () => {
    const answersDisplay = [];
    let answerOptions = this.props.wrongAnswers;
    answerOptions.push(this.props.currentAnswer)
    answerOptions.sort()
    let i = 0
    answerOptions.map(answerOption => {
      i++
      return answersDisplay.push(<MultipleChoiceItem choice={answerOption} key={i} handleAnswer={this.handleAnswer}/>)
    })
    return answersDisplay;
  }

  handleAnswer = (answer) => {
    this.props.displayNextTerm(answer);
  }

  render() {
    return (
      <div className='multiple-choice-container'>
        {this.displayAnswers()}
      </div>
    )
  }
}

export default MultipleChoice;
