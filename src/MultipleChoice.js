import React, { Component } from 'react';
import MultipleChoiceItem from './MultipleChoiceItem.js';
import './MultipleChoice.scss';

class MultipleChoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answerOptions: []
    }
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  componentDidUpdate() {
    this.getAnswerOptions();
  }

  getAnswerOptions() {
    if(!this.state.answerOptions.length) {
      const correctAnswer = this.props.currentAnswer
      let allOptions = this.props.wrongAnswers
      allOptions.push(correctAnswer);
      allOptions.sort();
      this.setState({
        answerOptions: allOptions
      })
    }
  }

  displayAnswers() {
    const answersDisplay = [];
    for(let i = 0; i < 4; i++) {
      answersDisplay.push(<MultipleChoiceItem choice={this.state.answerOptions[i]} key={i} checkAnswer={this.checkAnswer}/>)
    }
    return answersDisplay;
  }

  checkAnswer = (answer) => {
    if(answer === this.props.currentAnswer) {
      this.props.displayNextTerm();
      setTimeout(() => {
        this.setState({
          answerOptions: []
        })
      }, 1000)
    } else {
      alert('Try Again')
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
