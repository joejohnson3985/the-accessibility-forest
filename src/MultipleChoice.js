import React, { Component } from 'react';
import MultipleChoiceItem from './MultipleChoiceItem.js';
import './MultipleChoice.scss';

class MultipleChoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopUp: false
    }
  }

  componentDidMount() {
    this.displayAnswers();
  }

  displayAnswers() {
    const answersDisplay = [];
    let answerOptions = this.props.wrongAnswers;
    answerOptions.push(this.props.currentAnswer)
    answerOptions.sort()
    for(let i = 0; i < 4; i++) {
      answersDisplay.push(<MultipleChoiceItem choice={answerOptions[i]} key={i} handleAnswer={this.handleAnswer}/>)
    }
    return answersDisplay;
  }

  handleAnswer = (answer) => {
    this.props.displayNextTerm(answer);
  }

  checkAnswer = (answer) => {
    if(answer === this.props.currentAnswer) {
      this.props.displayNextTerm(answer);
    } else {
      this.props.getCurrentTerm();
    }
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
