import React, { Component } from 'react';
import MultipleChoiceItem from './MultipleChoiceItem.js';
import './MultipleChoice.scss';

class MultipleChoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    console.log(answerOptions)
    for(let i = 0; i < 4; i++) {
      answersDisplay.push(<MultipleChoiceItem choice={answerOptions[i]} key={i} checkAnswer={this.checkAnswer}/>)
    }
    return answersDisplay;
  }

  checkAnswer = (answer) => {
    if(answer === this.props.currentAnswer) {
      this.props.displayNextTerm();
        this.setState({
          answerOptions: []
        })

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
